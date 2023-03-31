import { useGlobalContext } from '../../context';
import Button from '../Button'
import SingleLatestNews from './SingleLatestNews';
import styles from './latestNews.module.css'

const LatestNews = () => {
  const { latestNews } = useGlobalContext()

  return (
    <div className={`${styles.latestNewsContainer} container`}>
      <h2>Latest News</h2>
      <div className={styles.latestNewsBlock}>
        {
          latestNews.length > 0
          &&
          latestNews.map(singleNews => <SingleLatestNews key={singleNews.id} {...singleNews} />)
        }
      </div>
      <Button to={'/'} width={155} height={69} bgColor={'#FFD000'} content={'See More'} />
    </div>
  )
}

export default LatestNews
