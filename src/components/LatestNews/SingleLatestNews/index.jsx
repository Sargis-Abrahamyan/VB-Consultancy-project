import React from 'react';
import styles from './singleLatestNews.module.css'

const SingleLatestNews = ({ heading, info, link, imgUrl, date }) => {
    return (
        <div className={styles.singleLatestNewsBlock}>
            <div className={styles.imgBlock}>
                <img src={imgUrl} alt={heading} />
            </div>
            <div className={styles.newsInfo}>
                <h2>{heading}</h2>
                <p>{info}</p>
                <a href={link} rel="noreferrer" target="_blank">Read More</a>
            </div>
            <p className={styles.date}>{date}</p>
        </div>
    )
}

export default SingleLatestNews
