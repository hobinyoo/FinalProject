import React, { useState } from "react";
import styled from "styled-components";

import Header from "../components/Chat/Header";
import Onechat from "../components/Chat/Onechat";
import { history } from "../redux/ConfigureStore";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { useDispatch, useSelector } from "react-redux";
import { socket } from '../shared/Socket';

// import io from "socket.io-client";

// 서버와 클라이언트 연결
// const socket = io.connect("http://3.36.50.53:3000");
// const socket = io.connect("http://localhost:5000");

const ChatList = (props) => {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState("");
  const [roomId, setRoomId] = useState("1");

  const joinRoom = () => {
    const data = {
      userId: userId,
      roomId: roomId,
      // socket: socket,
    };

    dispatch(chatActions.getRoom(data));

    // 서버에 방id 전송 같은 방일경우에 서로의 채팅이 보인다.
    // 방입장할때는 메세지 보내는자 Id랑 받는자 Id 그그그 email형식 아이디
    // socket.emit("joinRoom", roomId);

    history.push("/chatroom");
  };

  return (
    <ListContainer>
      <Header />
      <ListWrap>
        <OneChatWrap>
          테스트용 userId입력
          <input onChange={(e) => setUserId(e.target.value)} />
          <Onechat _onClick={joinRoom} />
          <Onechat _onClick={() => console.log("test")} />
          <Onechat _onClick={() => console.log("test")} />
        </OneChatWrap>

      </ListWrap>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 100%;
  height: 90%;
  /* background-color: orange; */
  padding: 25px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const ListWrap = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: white; */
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;


// 컴포넌트에 스타일을 바꾸는방법 괄호안에 컴포넌트를 넣으면된당
// const TripDestBox = styled(TitleBox)``;

// const ListWrap = styled.div`
//     width: 100%;
//     height: 100%;
//     background-color: white;
//     overflow-y: scroll;
//     overflow-x: hidden;

// 컴포넌트에 스타일을 바꾸는방법 괄호안에 컴포넌트를 넣으면된당
// const TripDestBox = styled(TitleBox)``;



const OneChatWrap = styled.div``;

export default ChatList;
