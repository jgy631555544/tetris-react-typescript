import { createStore } from 'redux'
import reducer from '../reducer'
const store = createStore(reducer, (window as any).devToolsExtension && (window as any).devToolsExtension());
export default store
