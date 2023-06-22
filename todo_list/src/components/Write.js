import React, { useState } from 'react'

const Write = () => {

  const [inputVal,setInputval] = useState("")
  const todoitem={
    key:0,
    input:"",
    check:true
  }
  const todolist = []
  const addItem =()=>{

  }
  return (
    <div>
      <div className='bar'>
        <input placeholder='할 일을 작성해주세요.' value={inputVal} onChange={(e)=>{setInputval(e.target.value)}}/>
        <div className='levels'>
          <button value='낮음'>낮음</button>
          <button value='보통'>보통</button>
          <button value='높음'>높음</button>
          <button value='아주높음'>아주높음</button>
          <button value='추가'>추가</button>
        </div>
      </div>
    </div>
  )
}

export default Write
