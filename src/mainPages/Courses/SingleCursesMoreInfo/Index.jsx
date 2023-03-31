import React from 'react';
import SingleCursesMoreInfoVideo from "../SingleCursesMoreInfoVideo/Index";
import styles from "./singleCursesMoreInfo.module.css"

const SingleCursesMoreInfo = ({ singleMoreInfo, setCoursesName }) => {
    const { information } = singleMoreInfo

    return (
        information && (
            <div className={styles.CursesContainer}>
                <div className={styles.cursesMoreInfoBlock}>
                    <h3 className={styles.infoTitle}>{information.title}</h3>
                    <p className={styles.cursesMoreInfoBlockText}>{information.desc}</p>
                    <div className={styles.infoDoneSize}>
                        <h3 className={styles.infoTitle}>{information.titleDoneInfo}</h3>
                        <div className={styles.infoItemDone}>
                            <p className={styles.infoDone}><img src={information.icon} alt={"dane"} /> {information.info}</p>
                            <p className={styles.infoDone}><img src={information.icon} alt={"dane"} /> {information.info1}
                            </p>
                            <p className={styles.infoDone}><img src={information.icon} alt={"dane"} /> {information.info2}
                            </p>
                            <p className={styles.infoDone}><img src={information.icon} alt={"dane"} /> {information.info3}
                            </p>
                            <p className={styles.infoDone}><img src={information.icon} alt={"dane"} /> {information.info4}
                            </p>
                            <p className={styles.infoDone}><img src={information.icon} alt={"dane"} /> {information.info5}
                            </p>
                        </div>
                    </div>
                </div>
                <SingleCursesMoreInfoVideo singleMoreInfo={singleMoreInfo} setCoursesName={setCoursesName} />
            </div>
        )

    );
};

export default SingleCursesMoreInfo;