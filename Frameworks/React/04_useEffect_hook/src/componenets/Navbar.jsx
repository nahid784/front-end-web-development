import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

    // runs on every render
    useEffect(() => {
        alert("Its run on every render")

    })

    // runs on first render
    useEffect(() => {
        alert("Runs only on first render")

    }, [])

    useEffect(() => {
        alert("Its is running because Color was Changed")
    }, [color])

    // example of unmount cleanup function
    useEffect(()=>{
    alert("Welcome to page. This is the first render of app")
    return()=>{ // optional
      alert("component was unmounted as navbar is removed")
    }
  }, [])

    return (
        <div>
            I am navbar of a website, which has {color} color
        </div>
    )
}

export default Navbar
