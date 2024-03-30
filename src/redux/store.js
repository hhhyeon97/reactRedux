import { createStore } from 'redux';
import reducer from './reducer/reducer';

// 앱의 상태를 보관하는 Redux 저장소 만들기
let store = createStore(reducer);

export default store;
