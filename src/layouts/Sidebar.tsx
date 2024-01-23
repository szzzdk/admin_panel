import { useState } from 'react'
import { NavLink } from 'react-router-dom'

conts routes = [
    {
       path: "/",
       name: "Home",
       icon: "" 
    }
]


export default function Sidebar() {


    return (
        
            <div style={{ display: isSidebarOpen ? 'block' : 'none'}}>
                <ul>
                    <li>fhfh</li>
                    <li>fhfh</li>
                    <li>fhfh</li>
                    <li>fhfh</li>   
                </ul>
            </div>
    )
}