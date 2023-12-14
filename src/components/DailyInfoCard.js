import React from 'react'
import style from '../style/dailyInfoCard.module.css'
import data from '../data/dailyCard.json';

const DailyInfoCard = () => {
    console.log(data[0].title);
    return (
        <div className={style.dailyCard}>
            {
                data.map(item => (
                    <div>
                        <span className=''>{item.tile}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default DailyInfoCard