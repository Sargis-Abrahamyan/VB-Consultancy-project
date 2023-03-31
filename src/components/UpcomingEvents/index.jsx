import { useGlobalContext } from '../../context';
import girlImg from '../../images-logos/girl.png'
import Button from '../Button';
import SingleUpcomingEvent from './SingleUpcomingEvent';
import styles from './upcomingEvents.module.css'

const UpcomingEvents = () => {
    const { upcomingEvents } = useGlobalContext()

    return (
        <div className={`${styles.mainUpcommingEventsBlock} container`}>
            <h2>Upcoming Events</h2>
            <div className={styles.events}>
                <div className={styles.girlBlock}><img src={girlImg} alt="girl" /></div>
                <div className={styles.mainEvents}>
                    <div>
                        {
                            upcomingEvents.length > 0
                            &&
                            upcomingEvents.map(singleEvent => <SingleUpcomingEvent key={singleEvent.id} {...singleEvent} />)
                        }
                    </div>
                    <Button to={'/events'} fontSize={24} content={'See All Events'} width={214} height={69} bgColor={'#FFD000'} />
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvents
