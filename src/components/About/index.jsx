import React from 'react';
import Button from '../Button';
import styles from "./about.module.css";

const About = () => {
    return (
        <div className={`${styles.about} container`}>
            <h2 className={styles.aboutTitle}>About</h2>
            <div className={styles.aboutTitleTextBtn}>
                <p className={styles.aboutText}>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem
                    quibibendum auci elit
                    cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet.
                    Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris.
                </p>
                <div className={styles.btnSize}>
                    <Button bgColor={'#FFD000'} width={212} height={69} to={"/pages"} content={"Learn More"} />
                </div>
            </div>
        </div>
    );
};

export default About;
