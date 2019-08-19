import homeSaga from './pages/Home/sagas/index';
import counterSaga from './pages/CounterPage/sagas/index';

const allSagas = [
	...homeSaga,
	...counterSaga
];

export default allSagas;