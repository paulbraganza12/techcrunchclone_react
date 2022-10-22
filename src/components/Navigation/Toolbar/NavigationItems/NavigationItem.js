import React from 'react'
import classes from './NavigationItem.module.css'

import Item from './Item/Item'

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
           <Item clicked={props.clicked} to="/apps" active>Apps</Item>
           <Item clicked={props.clicked} to="/gadgets">Gadgets</Item>
           <Item clicked={props.clicked} to="/startups">Star up</Item>
        </ul>
    )
}

export default navigationItems;
