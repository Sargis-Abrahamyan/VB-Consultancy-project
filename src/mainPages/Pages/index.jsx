import React from 'react';
import { useGlobalContext } from '../../context';
import boyImg from '../../images-logos/boy.png'
import styles from './pages.module.css';

const Pages = () => {
  const { whyChooseUsBlocks } = useGlobalContext()

  return (
    <div className={`${styles.mainPagesBlock ? styles.mainPagesBlock : ''} container`}>
      <div className={styles.aboutUs}>
        <div className={styles.aboutUsHeading}>
          <h2>About Us</h2>
        </div>
        <h3>Welcome to the VB Consultancy</h3>
        <div className={styles.infoAndPic}>
          <p>
            Lorem ipsum gravida nibh vel velit auctor
            aliquetn sollicitudirem quibibendum auci
            elit cons equat ipsutis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate
            cursus a sit amet . Morbi accumsan ipsum
            velit. Nam nec tellus a odio tincidunt mauris.
            auci elit cons equat ipsutis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate
            cursus a sit amet . Morbi accumsan ipsum
            velit. Nam nec tellus a odio tincidunt mauris
          </p>
          <div className={styles.boyImg}>
            <img src={boyImg} alt="boy img" />
          </div>
        </div>
        <div className={styles.whyChooseUsBlock}>
          {
            whyChooseUsBlocks.map(block => {
              return <div className={styles.chooseBlock} key={block.id}>
                  <p className={styles.nums}>{block.num}</p>
                  <h2>{block.title}</h2>
                  <p className={styles.info}>{block.info}</p>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Pages
