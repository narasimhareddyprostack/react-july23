import {GM,GN} from './message.action'
let initialState = {
    msg:"Hello......."
}
let messageReducer = (state=initialState,action)=>{
    console.log(action.type)
    switch(action.type){
        case 'GM':
            return {msg:"Hello,GM"}
        case 'GN':
            return {msg:"Hello,GN"}
        default:
            return state
    }


}
export {messageReducer}