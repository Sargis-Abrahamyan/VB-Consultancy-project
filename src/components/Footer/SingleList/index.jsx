import React from 'react';
import { Link } from 'react-router-dom';
import styles from './singleList.module.css';

const SingleList = ({ heading, links }) => {
  return (
    <div className={styles.singleListBlock}>
      <h2 className={styles.singleListHeading}>{heading}</h2>
      <ul className={styles.singleList}>
        {
          links.map(item => {
            return <li key={item.id}>
              <Link to={item.linkTo}>{item.title}</Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default SingleList
