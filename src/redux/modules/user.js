import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";
import axios from "axios";

//actions
const SET_USER = "SET_USER";
const SET_USERPROFILE = "SET_USERPROFILE";
const LOG_OUT = "LOG_OUT";

//actioncreator
const setUser = createAction(SET_USER, (user) => ({ user }));
const setUserProfile = createAction(SET_USERPROFILE, (userInfo) => ({
  userInfo,
}));
const logOut = createAction(LOG_OUT, () => ({}));

//initial
const initialState = {
  user: { userId: null, nickname: null, userImg: null },
  userInfo: [],
  is_login: false,
};

//카카오로그인
const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(
        // `http://54.180.162.220:3001/api/auth/kakao/callback?code=${code}`
        `https://stgon.shop/api/auth/kakao/callback?code=${code}`
      )
      .then((res) => {
        const token = res.data.token;
        const userId = res.data.userId;
        const snsId = res.data.snsId;
        localStorage.setItem("token", token); //예시로 로컬에 저장
        localStorage.setItem("userId", userId);
        localStorage.setItem("snsId", snsId);
        localStorage.setItem("newChat", "false");
        localStorage.setItem("mainNotice", "false");
        dispatch(checkUserDB());
        window.location.replace("/"); // 토큰 받고 로그인되면 화면 전환(메인으로)
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        window.location.replace("/"); // 로그인 실패하면 로그인화면으로 보내기
      });
  };
};

//유저확인
const checkUserDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`https://stgon.shop/api/users/auth/me`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        let userId = res.data.userId;
        let nickname = res.data.nickname;
        let userImg = res.data.userImg;
        let snsId = res.data.snsId;
        dispatch(
          setUser({
            userId: userId,
            nickname: nickname,
            userImg: userImg,
            snsId: snsId,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//유저프로필 조회
const userProfileDB = (userId) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/api/users/${userId}`)
      .then((res) => {
        dispatch(setUserProfile(res.data.userInfo));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user.userId = action.payload.user.userId;
        draft.user.nickname = action.payload.user.nickname;
        draft.user.userImg = action.payload.user.userImg;
        draft.user.snsId = action.payload.user.snsId;
        draft.is_login = true;
      }),
    [SET_USERPROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = action.payload.userInfo;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // localStorage.removeItem("token");
        localStorage.clear();
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  setUser,
  kakaoLogin,
  checkUserDB,
  setUserProfile,
  userProfileDB,
  logOut,
  // naverLogin,
};

export { actionCreators };
