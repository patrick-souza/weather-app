import { Store, applyMiddleware, createStore } from "redux";
import { IApplicationState, rootReducer, rootSaga } from "./ducks";
import sagaMiddleware from "./middlewares";

export default function configureStore(): Store<IApplicationState> {
  const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);
  return store;
}
