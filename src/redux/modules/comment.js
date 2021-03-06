import {createAction, handleActions} from "redux-actions"
import {produce} from "immer";
import instance from "../../shared/Request";



// 액션타입
const GET_COMMENT = "GET_COMMENT";
const UPDATE_COMMENT = "UPDATE_COMMENT";


// 액션 생성 함수
const getComment = createAction(GET_COMMENT, (planId, comment_list)=> ({planId, comment_list}));
const updateComment = createAction(UPDATE_COMMENT, (commentId, planId)=> ({commentId, planId}));


// 초기 상태값
const initialState = {
    list: {},
    opponent: "",
}


// 미들웨어
const addCommentFB = (planId, contents) => {
    return async function (dispatch, getState, {history}) {
        
        await instance.post(`/api/plans/${planId}/comments`,
            {
                content: contents,
            }
        ).then((res) => {

          

            dispatch(getCommentFB(planId));

        }).catch((err) => {
            console.log(err);
        })

    }
}



const getCommentFB = (planId = null) => {
    return async function (dispatch, getState, {history}) {


        if(!planId){
            return;
        }

        await instance.get(`/api/plans/${planId}/comments`)
        .then((res) => {
       
            const commentList = res.data.comments.reduce((acc, cur, i) => {

                acc.push({
                    commentId: cur.commentId,
                    content: cur.content,
                    createdAt: cur.createdAt,
                    likeCount: cur.likeCount,
                    planId: cur.planId,
                    updatedAt: cur.updatedAt,
                    userId: cur.userId,
                    replies: cur.replies,
                    isLike: cur.isLike,
                    // updateState: false,
                });

                return acc;

            }, []);
            

            dispatch(getComment(planId, commentList));

        })
        .catch((err) => {
            console.log(err);
        })

    }
}


const realUpdateCommentFB = (commentId, planId, upComment) => {
    return async function(dispatch, getState, {history}) {

        await instance.patch(`/api/plans/comments/${commentId}`,
            {
                content: upComment,
            }   
        )
        .then((res) => {

            const preList = getState().comment.list[planId];

            const upDateList = preList.reduce((acc, cur, i) => {

                if(cur.commentId === commentId) {
                    acc.push({...cur, content: upComment});
                }else {
                    acc.push(cur);
                }

                return acc;

            }, []);

            dispatch(getComment(planId, upDateList));

            // dispatch(updateComment(commentId, planId));

        })
        .catch((err) => {
            console.log(err);
        });

    }
}


const removeCommentFB = (commentId, planId) => {
    return async function(dispatch, getState, {history}) {

        await instance.delete(`/api/plans/comments/${commentId}`)
        .then((res) => {

            if(res.data.result === 'false'){
                window.alert(res.data.message);
                return;
            }else {

                const preList = getState().comment.list[planId];

                const deleteList = preList.filter((item, i) => commentId !== item.commentId);

                dispatch(getComment(planId, deleteList));

            }

        })
        .catch((err) => {
            console.log(err);
        })

    }
}


const addReplyFB = (planId, commentId, reply) => {
    return async function (dispatch, getState, {history}) {
 
        await instance.post(`/api/plans/comments/${commentId}/reply`,
            {
                content: reply,
            }
        ).then((res) => {

            dispatch(getCommentFB(planId));

        }).catch((err) => {
            console.log(err);
        })
        
    }
}


const updateReplyFB = (planId, replyId, upReply) => {
    return async function (dispatch, getState, {history}) {

        await instance.patch(`/api/plans/comments/replies/${replyId}`,
            {
                content: upReply,
            }   
        )
        .then((res) => {

            dispatch(getCommentFB(planId));

        })
        .catch((err) => {
            console.log(err);
        });

    }
}

const deleteReplyFB = (planId, replyId) => {
    return async function (dispatch, getState, {history}) {
 
        await instance.delete(`/api/plans/comments/replies/${replyId}`)
        .then((res) => {
            dispatch(getCommentFB(planId));
        })
        .catch((err) => {
            console.log(err);
        })

    }
}

const commentLikeTrue = (planId, commentId) => {
    return async function (dispatch, getState, {history}) {
 
        await instance.post(`/api/plans/comments/${commentId}/like`)
        .then((res) => {
            dispatch(getCommentFB(planId));
        })
        .catch((err) => {
            console.log(err.response);
        })

        
    }
}

const commentLikeFalse = (planId, commentId) => {
    return async function (dispatch, getState, {history}) {

        await instance.delete(`/api/plans/comments/${commentId}/like`)
        .then((res) => {
            dispatch(getCommentFB(planId));
        })
        .catch((err) => {
            console.log(err);
        })

    }
}


const replyLikeTrue = (planId, replyId) => {
    return async function (dispatch, getState, {history}) {

        await instance.post(`/api/plans/comments/replies/${replyId}/like`)
        .then((res) => {

            dispatch(getCommentFB(planId));
        })
        .catch((err) => {
            console.log(err.response);
        })

    }
}


const replyLikeFalse = (planId, replyId) => {
    return async function (dispatch, getState, {history}) {

        await instance.delete(`/api/plans/comments/replies/${replyId}/like`)
        .then((res) => {

            dispatch(getCommentFB(planId));
        })
        .catch((err) => {
            console.log(err.response);
        })

    }
}




export default handleActions (
    {

        [GET_COMMENT]: (state, action) => produce(state, (draft)=> {
            draft.list[action.payload.planId] = action.payload.comment_list;
        }),

        [UPDATE_COMMENT]: (state, action) => produce(state, (draft)=> {

            const upList = state.list[action.payload.planId].reduce((acc, cur) => {

                if(cur.commentId === action.payload.commentId) {
                    acc.push({...cur, updateState: !cur.updateState});
                }else {
                    acc.push(cur);
                }

                return acc;

            }, [])

            draft.list[action.payload.planId] = upList;

        }),


    }, initialState
);



const actionCreators = {
    addCommentFB,
    getCommentFB,
    removeCommentFB,
    updateComment,
    realUpdateCommentFB,
    addReplyFB,
    updateReplyFB,
    deleteReplyFB,
    commentLikeTrue,
    commentLikeFalse,
    replyLikeTrue,
    replyLikeFalse,
}

export {actionCreators};
