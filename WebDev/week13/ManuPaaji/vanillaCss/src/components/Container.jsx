import React from 'react'

const Container = ({children}) => {
  return (
    <div className='layout'>
        <div className="wrapper">{children}</div>
    </div>
  )
}

export default Container
