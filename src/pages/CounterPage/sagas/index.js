import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function * watchCounter() {
	console.log("watch gg");
	yield takeEvery("sub", workerCounterSub);
}

function* workerCounterSub() {
	const products = yield axios({
      method: 'get',
      url: `https://jsonplaceholder.typicode.com/users`
    });
    console.log(products);
	yield put({type: "counter-saga-sub", number: -1});
	yield put({type: "counter-saga-show", data: products});
}

export default [
    watchCounter,
];
