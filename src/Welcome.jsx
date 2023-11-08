import React, { useState } from 'react'

const Welcome = () => {
    const [name ,setName] = useState('Azeez')
    const handleClick = markzeez

  return (
    <div>
<h1>Welome {name}</h1>
   <button onClick={handleClick}>Click your Name</button>
    </div>
  )
}

export default Welcome