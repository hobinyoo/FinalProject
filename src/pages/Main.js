import React, { useState, useEffect, useCallback } from "react";
import instance from "../shared/Request";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as planActions } from "../redux/modules/plan";
import { actionCreators as userActions } from "../redux/modules/user";
import styled from "styled-components";
import MainBookMarkList from "../components/Main/MainBookMarkList";
import MainUserpickList from "../components/Main/MainUserpickList";
import MainTopTravelList from "../components/Main/MainTopTravelList";
import MainTravelList from "../components/Main/MainTravelList";
import Loader from "../components/Main/Loader";
import Filter from "../components/Main/Filter";
import { useLocation } from "react-router";
import HeaderBar from "../components/Main/HeaderBar";
import Banner from "../components/Main/Banner";
import axios from "axios";

const Main = (props) => {
  const is_token = localStorage.getItem("token") ? true : false;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.checkUserDB());
    dispatch(planActions.getBookMarkDB());
    dispatch(planActions.getUserPickDB());
    dispatch(planActions.getTopTravelDB());
  }, []);

  const bookmark_list = useSelector((store) => store.plan.bookmark_list);
  const userpick_list = useSelector((store) => store.plan.userpick_list);
  const toptravel_list = useSelector((store) => store.plan.toptravel_list);

  if (is_token) {
    return (
      <Container>
        <HeaderBar />
        <Banner />
        <Div>
          <Content>
            <BookMarkListBox>
              {bookmark_list.length > 0 ? (
                <>
                  <P>내가 담은 짜여 👀</P>
                  <MainBookMarkList />
                </>
              ) : null}
            </BookMarkListBox>
            <BookMarkListBox>
              {userpick_list.length > 0 ? (
                <>
                  <P>이달의 유저 픽 ✅</P>
                  <MainUserpickList />
                </>
              ) : null}
            </BookMarkListBox>
            <BookMarkListBox>
              {toptravel_list.length > 0 ? (
                <>
                  <P>이달의 인기 여행 🏞</P>
                  <MainTopTravelList />
                </>
              ) : null}
            </BookMarkListBox>
          </Content>
        </Div>
      </Container>
    );
  }

  return (
    <Container>
      <HeaderBar />
      <Banner />
      <Div>
        <Content>
          <BookMarkListBox>
            {userpick_list.length > 0 ? (
              <>
                <P>이달의 유저 픽 ✅</P>
                <MainUserpickList />
              </>
            ) : null}
          </BookMarkListBox>
          <BookMarkListBox>
            {toptravel_list.length > 0 ? (
              <>
                <P>이달의 인기 여행 🏞</P>
                <MainTopTravelList />
              </>
            ) : null}
          </BookMarkListBox>
        </Content>
      </Div>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 93.7%;
  bottom: 0;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #ffffff;
  padding-top: 12px;
`;

const Div = styled.div`
  background-color: #cfcfff;
`;

const TravelListBox = styled.div``;

const P = styled.p`
  margin: 0;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #1a1a1a;
`;

const BookMarkListBox = styled(TravelListBox)`
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 24px;
  p {
    margin: 0;
    margin-bottom: 16px;
  }
`;
