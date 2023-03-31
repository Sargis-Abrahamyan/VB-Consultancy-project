import React from 'react';
import { useGlobalContext } from '../../context';
import SingleInfo from './SingleInfo';
import styles from './platformInfo.module.css'

const PlatformInfo = () => {
  const { platformInformation } = useGlobalContext()

  return (
    <div className={styles.mainPlatform}>
      <h2>Welcome to
        <p>VB Concultancy</p>
      </h2>
      <h3>Best Platform to Learn Everything</h3>
      <div className={styles.platformGroup}>
        {
          platformInformation.map(item => <SingleInfo key={item.id} {...item} />)
        }
      </div>
    </div>
  )
}

export default PlatformInfo
