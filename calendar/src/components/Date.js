import React from 'react'
import date from '../css/date.css'

const Date = () => {
  return (
    <div className='big_date'>
      <div className='date sun'>일</div>
      <div className='date mon'>월</div>
      <div className='date thu'>화</div>
      <div className='date wed'>수</div>
      <div className='date thi'>목</div>
      <div className='date fri'>금</div>
      <div className='date sat'>토</div>
    </div>
  )
}

export default Date
