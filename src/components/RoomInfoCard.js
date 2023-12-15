import React from 'react';
import style from '../style/roomCard.module.css';
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs';
import data from '../data/roomCard.json'

const RoomInfoCard = () => {
    return (
        <>
            <h2>I'm the room info card.</h2>
            {data.map(item => (
                <div>
                    <div>
                        <div className={style.roomCardContainer}>
                            <h6>{item.title}</h6>
                            <h2>{item.sub_title}</h2>
                            <div className={style.roomMembers}>
                                <div>
                                    <img src='/images/user-img.jpg' alt='' />
                                    <img src='/images/user-img.jpg' alt='' />
                                </div>
                                <div>
                                    {item.members.map(person => (
                                        <p>
                                            {person.first_name} {person.last_name} <BsChatDots />
                                        </p>
                                    ))}
                                    <p className='d-flex align-items-center'>
                                        <span className='mr-2'>1.8</span>
                                        <BsFillPersonFill />
                                        <span className='mx-2'></span>{" "}
                                        <span className='mr-2'>5</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default RoomInfoCard