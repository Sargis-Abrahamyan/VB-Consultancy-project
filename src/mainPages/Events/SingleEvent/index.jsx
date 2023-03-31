import { Link } from 'react-router-dom';
import eventIcon from '../../../images-logos/event-icon.png'
import timeIcon from '../../../images-logos/time-icon.png'
import styles from './singleEvent.module.css'

const SingleEvent = ({ id, title, date, background, startTime, endTime, phone, email, content, setEventName }) => {
    return (
        <div className={styles.singleEventBlock}>
            <div style={{
                background: `url(${background})`,
                height: '225px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '4px'
            }} className={styles.datePart}>
                <p><img src={eventIcon} alt="eventIcon" />{date}</p>
                <p><img src={timeIcon} alt="timeIcon" />{startTime} to {endTime}</p>
            </div>
            <Link to={'/events'} onClick={() => setEventName({title, id})} className={styles.title}>{title}</Link>
        </div>
    )
}

export default SingleEvent
