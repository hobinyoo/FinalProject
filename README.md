✈️'짜여' 서비스 설명 보러가기
메인 ReadMe.md를 참고 해주세요!

'짜여' 사이트가 궁금하시다면 아래 바로가기를 참고 해주세요!

바로가기 버튼


🙋팀원 소개
이름	깃허브 주소	포지션
유호빈	https://github.com/hobinyoo	프론트엔드
송원석	https://github.com/sws1552	프론트엔드
구미리	https://github.com/mirigu	프론트엔드
📖 라이브러리
name	Appliance	version
socket.io-client	웹소켓 라이브러리	4.4.1
redux	상태 관리	4.1.2
redux-thunk	리덕스 미들웨어	2.4.1
redux-actions	액션 관리	2.6.5
immer	불변성 유지	9.0.12
axios	HTTP 클라이언트 라이브러리	0.26.0
swiper	슬라이더 플러그인	8.0.7
react-date-range	date 라이브러리	1.4.0
react-helmet	html head의 meta, title tag 핸들링을 위해 사용	1.4.0
styled-components	CSS-in-JS 라이브러리	5.3.3
google-map-react	react google map 라이브러리	2.1.10
☄️트러블슈팅
Google Map Api (PolyLine)
Google Map Api (Fitbound)
web socket
무한스크롤 적용

📑서비스 아키텍처
짜여아키텍처


👀피드백 및 개선점
[피드백1] 이용하다가 일정 수정을 클릭하니 모든 날짜가 선택된 것처럼(보라색으로) 나오고 그대로 등록완료 누르면 invalid date로 나옴
문제점: 데이터를 받아올 때 날짜 데이터 형식이 맞지 않음

피드백 개선: DB에서 Day 리스트를 받아 왔을 때 날짜 데이터를 moment 라이브러리를 사용하여 날짜를 새롭게 정립시켜주고 DatePicker 라이브러리가 적용할 수 있는 데이터 형식으로 수정하였음

image

[수정 전, 후]

image image

[피드백2] 모바일에서 스크롤 내리면 네비바가 올라옵니다.
문제점: 전체 높이를 100vh주었을 때 모바일에서 웹을 실행하게 될 경우 모바일 브라우저 네비게이션바 위로 웹이 실행

피드백 개선: 전체 높이를 100%로 수정하고 position: fixed, overflow: hidden을 주어 모바일 화면에서도 전체 웹을 볼 수 있도록 수정

image

[피드백3] 이미지 렌더링 속도가 너무 느립니다.
문제점: 이미지를 업로드 할 경우 이미지 데이터 용량 그대로의 데이터를 업로드하고 데이터를 내려 받기 때문에 모바일 화면에 맞지 않게 데이터 용량이 크다

피드백 개선: 이미지를 업로드 할때 browser-image-compression 라이브러리를 활용하여 이미지를 1MB 이하로 압축시켜 Blob형식을 File 형식으로 변환하여 FormData에 담아 서버전송

image

image

[피드백4] 여행기 작성시 컨셉 태그를 다양하게 누를 수 있다면 좋겠어요! (ex.여행 스타일 - 먹방투어/호캉스 동시 선택 가능하게)
피드백 개선: 유저 입장에서 여행 스타일 항목을 여러 개 선택하고 싶어도 하나의 항목만 선택 해야 하는 단점이 있어 여러 항목을 선택 가능하도록 수정함

image image
