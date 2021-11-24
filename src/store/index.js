import {createStore} from "redux"
import baseReducer from "../reducers"

const initial = {
    tasks: []
}

export default function configureStore() {
 return createStore(baseReducer, 
    initial,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())
}