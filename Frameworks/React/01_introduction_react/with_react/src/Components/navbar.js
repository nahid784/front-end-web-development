// type rafce to get arrowfunction component
import React from 'react'

const navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
      {/* data can be passed in components which is called props */}
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
    </div>
  )
}

export default navbar
