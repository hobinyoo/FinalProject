import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";
import Plan from "./modules/plan";
import map from "./modules/map";
import polyline from "./modules/polyline";
import image from "./modules/image";
import addPlace from "./modules/addPlace";

import chat from "./modules/chat";
import comment from "./modules/comment";
import mypage from "./modules/mypage";
import notice from "./modules/notice";
import style from "./modules/style";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  addPlace: addPlace,
  user: User,
  plan: Plan,
  image: image,
  map: map,
  polyline: polyline,
  chat: chat,
  comment: comment,
  mypage: mypage,
  notice: notice,
  style: style,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
