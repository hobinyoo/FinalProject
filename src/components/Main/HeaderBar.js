import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { history } from "../../redux/ConfigureStore";

const HeaderBar = (props) => {
  const socket = useSelector((state) => state.chat.instance);

  const [mainNoticeState, setMainNoti] = useState(false);

  const mainNoticeSt = localStorage.getItem("mainNotice");
  const is_token = localStorage.getItem("token") ? true : false;

  React.useEffect(() => {
    if (mainNoticeSt === "false") {
      setMainNoti(false);
    } else {
      setMainNoti(true);
    }
  }, [mainNoticeSt]);

  React.useEffect(() => {
    socket?.on("noticePage", (data) => {
      setMainNoti(true);
      localStorage.setItem("mainNotice", "true");
    });
  }, [socket]);

  return (
    <Container>
      <Logo
        onClick={() => {
          window.location.replace("/");
        }}
      >
        <svg
          width="58"
          height="21"
          viewBox="0 0 58 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1724_3133)">
            <path
              d="M16.9454 5.29224H2.22604C1.14118 5.29224 0.261719 6.16333 0.261719 7.23788C0.261719 8.31243 1.14118 9.18353 2.22604 9.18353H16.9454C18.0303 9.18353 18.9097 8.31243 18.9097 7.23788C18.9097 6.16333 18.0303 5.29224 16.9454 5.29224Z"
              fill="#4E49E2"
            />
            <path
              d="M0.65514 18.315C-0.156782 17.6016 -0.22226 16.3694 0.511089 15.5652L3.87663 11.8685V7.12109H7.80529V13.3601L3.43139 18.1724C2.71113 18.9766 1.46706 19.0414 0.65514 18.315Z"
              fill="#4E49E2"
            />
            <path
              d="M16.3036 18.1594L11.9297 13.3472V7.10815H15.8583V11.8555L19.2239 15.5523C19.9441 16.3565 19.8787 17.5757 19.0798 18.3021C18.2679 19.0155 17.0369 18.9506 16.3036 18.1594Z"
              fill="#4E49E2"
            />
            <path
              d="M7.88322 17.6924L4.38672 13.9308L7.28083 11.2977L9.83445 14.0345L12.4797 11.2717L15.3346 13.9437L11.7333 17.7183C10.6857 18.8079 8.93086 18.7949 7.90941 17.6924H7.88322Z"
              fill="#4E49E2"
            />
            <path
              d="M26.1777 21H22.249V6.78378C22.249 5.70719 23.1264 4.83813 24.2133 4.83813C25.3003 4.83813 26.1777 5.70719 26.1777 6.78378V20.987V21Z"
              fill="#4E49E2"
            />
            <path
              d="M57.9999 21H54.0713V6.78378C54.0713 5.70719 54.9487 4.83813 56.0356 4.83813C57.1225 4.83813 57.9999 5.70719 57.9999 6.78378V20.987V21Z"
              fill="#4E49E2"
            />
            <path
              d="M28.4568 13.1008H24.4365V9.20947H28.4568C29.5438 9.20947 30.4212 10.0785 30.4212 11.1551C30.4212 12.2317 29.5438 13.1008 28.4568 13.1008Z"
              fill="#4E49E2"
            />
            <path
              d="M40.6225 19.4824C36.9295 19.4824 33.9307 16.5121 33.9307 12.8542C33.9307 9.19643 36.9295 6.22607 40.6225 6.22607C44.3154 6.22607 47.3143 9.19643 47.3143 12.8542C47.3143 16.5121 44.3154 19.4824 40.6225 19.4824ZM40.6225 10.1174C39.1034 10.1174 37.8593 11.3496 37.8593 12.8542C37.8593 14.3589 39.1034 15.5911 40.6225 15.5911C42.1415 15.5911 43.3856 14.3589 43.3856 12.8542C43.3856 11.3496 42.1415 10.1174 40.6225 10.1174Z"
              fill="#4E49E2"
            />
            <path
              d="M56.0358 11.9721H50.9155C49.8286 11.9721 48.9512 11.103 48.9512 10.0265C48.9512 8.94987 49.8286 8.08081 50.9155 8.08081H56.0358V11.9721Z"
              fill="#4E49E2"
            />
            <path
              d="M56.0358 17.4977H50.9155C49.8286 17.4977 48.9512 16.6287 48.9512 15.5521C48.9512 14.4755 49.8286 13.6064 50.9155 13.6064H56.0358V17.4977Z"
              fill="#4E49E2"
            />
            <path
              d="M5.8403 3.89129C6.92517 3.89129 7.80463 3.0202 7.80463 1.94565C7.80463 0.871095 6.92517 0 5.8403 0C4.75544 0 3.87598 0.871095 3.87598 1.94565C3.87598 3.0202 4.75544 3.89129 5.8403 3.89129Z"
              fill="#8F8CF1"
            />
            <path
              d="M13.894 3.89129C14.9789 3.89129 15.8583 3.0202 15.8583 1.94565C15.8583 0.871095 14.9789 0 13.894 0C12.8091 0 11.9297 0.871095 11.9297 1.94565C11.9297 3.0202 12.8091 3.89129 13.894 3.89129Z"
              fill="#8F8CF1"
            />
          </g>
          <defs>
            <clipPath id="clip0_1724_3133">
              <rect width="58" height="21" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Logo>
      <ButtonBox>
        <SearchCon
          onClick={() => {
            history.push("/search");
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.803 18.0397C20.7653 16.719 21.333 15.0926 21.333 13.3335C21.333 8.91522 17.7513 5.3335 13.333 5.3335C8.91473 5.3335 5.33301 8.91522 5.33301 13.3335C5.33301 17.7518 8.91473 21.3335 13.333 21.3335C15.0921 21.3335 16.7185 20.7658 18.0392 19.8035L22.6872 24.4516C23.1743 24.9386 23.964 24.9386 24.4511 24.4516C24.9382 23.9645 24.9382 23.1748 24.4511 22.6877L19.803 18.0397ZM18.8715 13.3335C18.8715 16.3923 16.3918 18.872 13.333 18.872C10.2742 18.872 7.79455 16.3923 7.79455 13.3335C7.79455 10.2747 10.2742 7.79503 13.333 7.79503C16.3918 7.79503 18.8715 10.2747 18.8715 13.3335Z"
              fill="#4E49E2"
            />
          </svg>
        </SearchCon>
        <NoticeCon
          onClick={() => {
            history.push("/noticepage");
            setMainNoti(false);
            localStorage.setItem("mainNotice", "false");
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mainNoticeState && is_token ? (
              <svg
                width="32"
                height="5"
                viewBox="0 0 60 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="3" r="4" fill="#ED3E44" />
              </svg>
            ) : null}

            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 13.3335C8 8.91522 11.5817 5.3335 16 5.3335C20.4183 5.3335 24 8.91522 24 13.3335V21.3335H8V13.3335ZM16 8.00016C13.0545 8.00016 10.6667 10.388 10.6667 13.3335V18.6668H21.3333V13.3335C21.3333 10.388 18.9455 8.00016 16 8.00016Z"
              fill="#4E49E2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.66699 20.0003C6.66699 19.2639 7.26395 18.667 8.00033 18.667H24.0003C24.7367 18.667 25.3337 19.2639 25.3337 20.0003C25.3337 20.7367 24.7367 21.3337 24.0003 21.3337H8.00033C7.26395 21.3337 6.66699 20.7367 6.66699 20.0003Z"
              fill="#4E49E2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.3337 21.3335C13.3337 22.8063 14.5276 24.0002 16.0003 24.0002C17.4731 24.0002 18.667 22.8063 18.667 21.3335H21.3337C21.3337 24.279 18.9458 26.6668 16.0003 26.6668C13.0548 26.6668 10.667 24.279 10.667 21.3335H13.3337Z"
              fill="#4E49E2"
            />
          </svg>
        </NoticeCon>
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 56px;
  width: 100%;
  background-color: #cfcfff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 12px 0px;
  z-index: 1;
`;

const Logo = styled.div`
  position: absolute;
  left: 24px;
  cursor: pointer;
`;

const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  right: 16px;
`;

const SearchCon = styled.div`
  margin-right: 8px;
  cursor: pointer;
`;

const NoticeCon = styled.div`
  cursor: pointer;
`;

export default HeaderBar;
