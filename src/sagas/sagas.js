import { all } from 'redux-saga/effects';
import todoSaga from './todosaga';
// cobine all sagas with root saga 
export default function* rootSaga() {
  yield all([todoSaga()]);
}