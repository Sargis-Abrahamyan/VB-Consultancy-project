import { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import SingleEvent from './SingleEvent';
import SingleEventMoreInfo from './SingleEventMoreInfo';
import styles from './events.module.css'

const Events = () => {
  const [eventName, setEventName] = useState({ title: 'Events', id: '' })
  const [singleMoreInfo, setSingleMoreInfo] = useState({})
  const { eventsGroup } = useGlobalContext()

  useEffect(() => {
    if (eventName.id) {
      const findedItem = eventsGroup.find(item => eventName.id === item.id)
      setSingleMoreInfo(findedItem)
    }
  }, [eventName])

  return (
    <div className={`${styles.mainEventsBlock ? styles.mainEventsBlock : ''} container`}>
      <div className={styles.eventsHeading}>
        <h2>{eventName.title}</h2>
      </div>
      {
        !eventName.id ?
          (<div className={styles.eventsBlock}>
            {
              eventsGroup.map(event => <SingleEvent key={event.id} {...event} setEventName={setEventName} />)
            }
          </div>) : (
            singleMoreInfo && <SingleEventMoreInfo setEventName={setEventName} singleMoreInfo={singleMoreInfo} />
          )
      }
    </div>
  )
}

export default Events
