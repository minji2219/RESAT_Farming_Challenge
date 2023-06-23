import React, { useState } from 'react'
import month from '../css/month.css'
import Day from './Day'
import Dating from './Date'
// import {MyContext} from '../context/Daycontext'


const Month = () => {

  // const [minusMonth, plusMonth,month] = useContext(MyContext)
  const date = new Date()
  const [month,setMonth] = useState(date.getMonth())

  const minusMonth = ()=>{
    setMonth(month=>month-1)
  }
  const plusMonth = ()=>{
    setMonth(month=>month+1)
  }

  return (
    <>
    <div className='big_month'>
      <div className='small_month'>
        <div className='left' onClick={()=>minusMonth()}>◀</div>
        <div> 2023년 {month+1}월 </div>
        <div onClick={()=>plusMonth()} className='right'>▶</div>
      </div>
    </div>
      <Dating/>
      <Day month={month}/>
    </>
  )
}

export default Month
