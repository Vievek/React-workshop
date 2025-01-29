import React from 'react'
import Button from './Button'

function UseState() {
  return (
    <div>
      <Button onClick={onClick}>{children}</Button>
    </div>
  )
}

export default UseState