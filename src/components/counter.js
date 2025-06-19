'use client'
import React, { useState } from 'react'
import Button from './Button';

const counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <Button/>
    </div>
  )
}

export default counter
