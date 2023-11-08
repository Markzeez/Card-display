import React from 'react'
import daisyui from 'daisyui'

const ToggleButton = ( {tem}) => {
 
  return (
    
    <div className='flex items-center justify-center pt-5'>
      <div className=''>
        <input type="checkbox" onClick={tem}  className="toggle" />
    </div>
    </div>
  )
}

export default ToggleButton