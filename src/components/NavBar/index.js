import React from 'react'
import { NavLink } from "react-router-dom"

export default function Navbar(){
    return (
        <>
            <NavLink exact to="/">
                <p>Home</p>
            </NavLink>
            <NavLink exact to="/characters">
                <p>Characters</p>
            </NavLink>
        </>
    )
    
    
}