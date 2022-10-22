import React from 'react'
import classes from './backdrop.module.css'

const BackDrop = (props) => (
    props.show ? <div onClick={props.clicked} className={classes.BackDrop}></div> : null
)

export default BackDrop
