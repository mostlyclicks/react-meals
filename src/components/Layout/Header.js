import React, { Fragment } from 'react'

import Button from './HeaderCartButton'
import mealsImg from  '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <Button label="Your Cart" onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="Meals Image" />
      </div>
      
    </React.Fragment>
  )
}

export default Header
