import React from 'react'
import Navbar from '../components/Nav-bar.jsx'
import { useState } from 'react'
import RateLimitedUI from '../components/RateLimitedUI.jsx'


const HomePage = () => {
 const [israteLimited, setIsRateLimited] = useState(false)

  return (
    <div>
      <Navbar />
      {israteLimited && <RateLimitedUI />}
    </div>
  )
}

export default HomePage
