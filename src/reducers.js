import { combineReducers } from 'redux';

import * as homeReducer from './pages/Home/reducers';
import * as counterReducer from './pages/CounterPage/reducers';
import * as componyReducer from './pages/ComponyIntroducePage/components/ComponyNews/reducers';
import * as caseReducer from './pages/TypicalCasePage/components/TypicalCaseContents/reducer/reducer.js';
import * as solutionReducer from './pages/SolutionPage/reducer/reducer.js';
import * as whitebookReducer from './pages/WhiteBook/reducer';

// 通过一系列异步加载来创建总reducers
export default combineReducers({
	...homeReducer,
	...counterReducer,
	...componyReducer,
	...caseReducer,
	...solutionReducer,
	...whitebookReducer
});



