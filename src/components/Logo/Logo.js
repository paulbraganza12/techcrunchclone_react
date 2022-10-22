import React from 'react'
import classes from './logo.module.css'
import { NavLink } from 'react-router-dom'

const Logo = () =>{
    return (
        <div className={classes.LogoText}>
            <NavLink to="/apps"> TechCrunchClone</NavLink>
           
        </div>
    )
}

export default Logo
