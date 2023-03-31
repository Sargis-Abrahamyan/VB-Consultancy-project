import React from 'react';
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import styles from "./singleCurses.module.css";

const SingleCurses = ({ id, background, name, surName, iconImg, rating, link, setCoursesName }) => {
    return (
        <div className={styles.singleCursesBlock}>
            <div style={{
                background: `url(${background})`
            }} className={styles.starsNameSurName}>
                <div className={styles.StarNameSurNameContainer}>
                    <p>
                        <span><img src={iconImg} alt="cursesIcon" />{name} {surName}</span>
                    </p>
                    <ReactStars 
                        count={5}
                        size={20}
                        activeColor="#ffd700"
                        value={rating}
                        edit={false}
                    />
                </div>
            </div>
            <Link to={'/courses'} onClick={() => setCoursesName({ backgroundTitle: link, id })}
                className={styles.cursesInfo}>{link}</Link>
        </div>
    );
};

export default SingleCurses;
