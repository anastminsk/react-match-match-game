import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import logger from './middlewares/logger';

const enhancer = applyMiddleware(logger);
const store = createStore(rootReducer, enhancer);

export default store;
