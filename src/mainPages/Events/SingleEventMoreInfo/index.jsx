import Button from '../../../components/Button';
import eventIcon from '../../../images-logos/event-blue.png';
import startIcon from '../../../images-logos/date-blue.png';
import endIcon from '../../../images-logos/date-end-blue.png';
import phoneIcon from '../../../images-logos/phone-blue.png';
import emailIcon from '../../../images-logos/email-blue.png';
import styles from './singleEventMoreInfo.module.css'

const SingleEventMoreInfo = ({ singleMoreInfo, setEventName }) => {
    const { date, startTime, endTime, phone, email, content, background } = singleMoreInfo

    return (
        <>
            <div className={`${styles.moreInfoAboutEvent ? styles.moreInfoAboutEvent : ''}`}>
                <div className={styles.firstPart}>
                    <img src={background} alt="background" />
                    <p>{content}</p>
                </div>
                <div className={styles.secondPart}>
                    <p><span><img src={eventIcon} alt="eventIcon" />Date:</span><span>{date}</span></p>
                    <p><span><img src={startIcon} alt="eventIcon" />Start Time: </span><span>{startTime}</span></p>
                    <p><span><img src={endIcon} alt="eventIcon" />End Time:</span><span>{endTime}</span></p>
                    <p><span><img src={phoneIcon} alt="eventIcon" />Phone:</span><span>{phone}</span></p>
                    <p><span><img src={emailIcon} alt="eventIcon" />Email:</span><span>{email}</span></p>
                </div>
                <div className={styles.backToEventsBtn}>
                    <Button to={'/events'} onclick={() => setEventName({ title: 'Events', id: '' })} content={'⮘ Back to Events'} width={180} height={60} bgColor={'#FFD000'} fontSize={18} />
                </div>
            </div>
        </>
    )
}

export default SingleEventMoreInfo
