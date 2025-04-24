import React from 'react'

const HeaderBox = ({ type='title', subtext, title, user } : HeaderBoxProps) => {
  return (
    <div className='header-box'>
      <h1 className='header-box-title'>
        {title}
        {type === 'greeting' && user && <span className='text-blue-400'>&nbsp;{user}</span>}
        </h1>
        <p className='header-box-subtext 2xl'>{subtext}</p>
    </div>
  )
}

export default HeaderBox
