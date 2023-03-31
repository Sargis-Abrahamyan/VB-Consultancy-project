import React from 'react';
import Button from '../../Button';
import styles from './singleUpcomingEvent.module.css'

const SingleUpcomingEvent = ({ date, title }) => {
  return (
    <div className={styles.mainSingleBlock}>
      <div className={styles.yellowBlock}>
        <p>{date.month}</p>
        <p>{date.day}</p>
      </div>
      <div className={styles.singleEventBlock}>
        <h2>{title}</h2>
        <p>{date.timeStarts} to {date.timeEnds}</p>
        <Button to={'/'} fontSize={16} content={'Learn More'} width={132} height={43} bgColor={'#FFD000'}/>
      </div>
    </div>
  )
}

export default SingleUpcomingEvent
