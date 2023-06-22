import React from 'react'

const Filter = () => {
  return (
    <div>
      <div className='title'>
        TO-DO LIST
      </div>
      <div className='btns'>
        <button value='전체'>전체</button>
        <button value='완료'>완료</button>
        <button value='미완료'>미완료</button>
      </div>

    </div>
  )
}

export default Filter
