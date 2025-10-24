import React from 'react'

const Header = () => {
  console.log('header rendered')
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}

export default React.memo(Header)
