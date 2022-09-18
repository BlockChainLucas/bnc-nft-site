import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

//定义配置的信息
const persitConfig = {
  key: "root",
  storage: storage,
  // 如果不想将部分state持久化，可以将其放入黑名单(blacklist)中.黑名单是设置
  blacklist: ["不想缓存的状态的名字"],
};
//创建持久化的配置persist的信息
const persist_reducers = persistReducer(persitConfig, rootReducer);
//创建存储对象并且抛出对象
const store = createStore(persist_reducers, applyMiddleware(thunk));
// const store = createStore(rootReducer, applyMiddleware(thunk));
// export default store;
const persistor = persistStore(store); //使用persistStore包裹一下
export { store, persistor };
