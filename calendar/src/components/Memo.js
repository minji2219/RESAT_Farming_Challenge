import React, { useState } from 'react'
import memo from '../css/memo.css'

const write =[]
const Memo = ({memoDay, memoMonth}) => {
 
  const [content,setContent] = useState("")
  const writing = ()=>{
    write.push({
      day:memoDay,
      content:content
    })
  }
  let contents=""
  for(let i =0; i<write.length;i++){
    if(write[i].day === memoDay){
      contents = write[i].content
    }
  }

  return (
    <div>
      <div className='memobox'>
        <div className='head'>
          2023년 {memoMonth+1}월 {memoDay}일
        </div>
        <div>
          <textarea vlaue={contents} onChange={(e)=>{setContent(e.target.value)}}></textarea>
        </div>
        <button onClick={()=>writing()}>등록</button>
      </div>
    </div>
  )
}

export default Memo
