import React from 'react'

const Child1 = (props) => {
    const onTextCHange=(event)=>{
        props.textChange(event.target.value)
    }
  return (
    <div>
      <input onChange={onTextCHange}  type="text" />
    </div>
  )
}

export default Child1
