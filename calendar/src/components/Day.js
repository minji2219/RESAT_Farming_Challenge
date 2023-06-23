import React, { useState } from 'react'
import Month from './Month'
import day from '../css/day.css'
import Memo from './Memo';

const Day = ({month}) => {
  const [memoDay,setMemoDay] = useState(0)
  const startDay = new Date(2023,month,1).getDay(); //시작 요일
  const endDate = new Date(2023,month+1,0).getDate(); // 끝난 날
  
  const dates =[]
  for(let i =1; i<=endDate+startDay;i++){
    if(i<startDay){
     dates.push(0);}
    else{
      dates.push(i-startDay)
    }
  }
  return (
    <div className='daybox'>
      {dates.map((date)=>(
        (date==0)
         ?<div className='day'></div>
         :<div className='day' onClick={()=>{setMemoDay(date)}}>{date}</div>
        )
      )}
    <Memo memoDay={memoDay} memoMonth={month}/>
    </div>
  )
}

export default Day
