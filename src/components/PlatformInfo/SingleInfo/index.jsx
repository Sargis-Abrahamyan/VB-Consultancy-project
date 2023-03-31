import React from 'react';
import { Link } from 'react-router-dom';
import styles from './singleInfo.module.css';

const SingleInfo = ({ pageGoTo, name, imgUrl, title, bgColor }) => {
  return (
    <Link style={{ backgroundColor: bgColor }} to={pageGoTo} className={styles.singleInfoContainer}>
      <img src={imgUrl} alt={name} />
      {title}
    </Link>
  )
}

export default SingleInfo
