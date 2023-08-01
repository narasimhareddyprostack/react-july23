import React from 'react'
import {gmAction,gnAction} from '../redux/message/message.action'

import {useDispatch, useSelector} from 'react-redux'
const Message = () => {
  let dispatch = useDispatch();

  let msg = useSelector((state)=>{
    return state
  })
  let gmHandler =()=>{
    //dispatch redux action
    dispatch(gmAction())
  }
  let gnHandler =()=>{
    dispatch(gnAction())
  }
  return (
    <div>
        <h2>Message Component</h2>
        <pre>{JSON.stringify(msg)}</pre>

        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message