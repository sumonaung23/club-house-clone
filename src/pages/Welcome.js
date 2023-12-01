import React from 'react'
import style from '../style/welcome.module.css';

const Welcome = () => {
    return (
        <>
            <div className={style.WelcomeContainer}>
                <h1>Welcome Page!</h1>
            </div>
            <div className={style.WelcomeInfo}>
                <p>We're working hard to get clubhouse ready for everyone! While we wrap up the finishing touches, we're adding people gradually.</p>
            </div>
        </>
    )
}

export default Welcome