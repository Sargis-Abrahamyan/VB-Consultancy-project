import React from 'react';
import Button from '../../components/Button';
import PlatformInfo from '../../components/PlatformInfo';
import About from '../../components/About'
import styles from './home.module.css';
import VideoComponent from '../../components/VideoComponent';
import simpleVideo from '../../images-logos/sample-5s.mp4';
import poster from '../../images-logos/lower-post.png'
import UpcomingEvents from '../../components/UpcomingEvents';
import LatestNews from '../../components/LatestNews';

const Home = () => {
  return (
    <div className="container">
      <div className={`${styles.mainHomeContainer}`}>
        <div className={styles.homeInfo}>
          <h2>Choose The Right <br />
            Theme for Education</h2>
          <p>Lorem dummy text of the printing and typesetting
            industry lorem ipsum has been the industry's
            standard dummy text.</p>
        </div>
        <div className={styles.btnControl}>
          <Button width={207} height={65} bgColor={'#FFD000'} content={'Apply Now'} to={'/'} />
          <Button width={207} height={65} bgColor={'#FFFFFF'} content={'Learn More'} to={'/'} />
        </div>
      </div>
      <PlatformInfo />
      <About />
      <VideoComponent width={100} height={762} videoSrc={simpleVideo} light={poster}  playButtonParams={{width : 150, height: 150}}/>
      <UpcomingEvents/>
      <LatestNews/>
    </div>
  )
}

export default Home
