import React from "react";
import styled from "styled-components";
import Like from "../Main/Like";
import { history } from "../../redux/ConfigureStore";
import Bookmark from "../Main/Bookmark";

const SearchList = (props) => {
  const { title, isLike, isBookmark, planId, userId, thumbnailImage } = props;

  const defaultUrl = [
    "../../images/1.png",
    "../../images/2.png",
    "../../images/3.png",
    "../../images/4.png",
    "../../images/5.png",
    "../../images/6.png",
  ];

  let imgUrl = Math.floor(Math.random() * defaultUrl.length);

  return (
    <React.Fragment>
      <Container>
        <TripCard
          onClick={() => {
            history.push(`/detail/${planId}`);
          }}
        >
          <CardImg
            src={
              props.thumbnailImage ? props.thumbnailImage : defaultUrl[imgUrl]
            }
          ></CardImg>
          <UserImg src={userId.profile_img} />
          <UserNickName>{userId.nickname}</UserNickName>
          <CardTitle>{title}</CardTitle>
          <Box>
            <Like isLike={isLike} />
            <Bookmark isBookmark={isBookmark} />
          </Box>
        </TripCard>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 24px;
`;

const TripCard = styled.div`
  position: relative;
  width: 100%;
  height: 242px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));
  cursor: pointer;
`;

const CardImg = styled.div`
  width: 100%;
  height: 160px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`;

const UserImg = styled.img`
  position: absolute;
  left: 5.13%;
  right: 76.92%;
  top: 54.55%;
  bottom: 22.31%;
  width: 56px;
  height: 56px;
  border-radius: 56px;
  background: #eeeeee;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.06), 0px -4px 6px rgba(0, 0, 0, 0.1);
`;

const UserNickName = styled.div`
  position: absolute;
  margin: 12px 0px 0px 80px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #212121;
`;

const CardTitle = styled.div`
  position: absolute;
  padding: 40px 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #212121;
`;

const Box = styled.div`
  position: absolute;
  display: flex;
  margin-top: 4px;
  right: 12px;
`;

export default SearchList;
