import React from 'react';
import VideoComponent from '../VideoComponent/index';
import enrolled from "./images/Group.png";
import duration from "./images/duration.png";
import lessons from "./images/Lessons.png";
import quizzes from "./images/Quizzes.png";
import skillLevels from "./images/skillLevel.png";
import category from "./images/Vector (2).png";
import language from "./images/Group 716.png";
import Button from '../../../components/Button/index';
import styles from "./SingleCursesMoreInfoVideo.module.css";

const SingleCursesMoreInfoVideo = ({ singleMoreInfo, setCoursesName }) => {
    const { videoInformation, background } = singleMoreInfo

    return (
        <div className={styles.videoInformationContanier}>
            <div className={styles.videoPart}>
                <VideoComponent
                    height={"191px"}
                    playButtonParams={{ width: 60 }}
                    light={background}
                    videoSrc={videoInformation.video} />
                <div className={styles.videoPartBlock}>
                    {
                        videoInformation.enrolled === undefined ? null : <p><span><img src={enrolled}
                            alt="enrolled" />{videoInformation.videoInfoTitle}:</span><span>{videoInformation.enrolled}</span>
                        </p>
                    }
                    {
                        videoInformation.duration === undefined ? null :
                            <p><span><img src={duration}
                                alt="duration" />{videoInformation.videoInfoTitle1}: </span><span>{videoInformation.duration}</span>
                            </p>
                    }
                    {
                        videoInformation.lessons === undefined ? null :
                            <p><span><img src={lessons}
                                alt="lessons" />{videoInformation.videoInfoTitle2}:</span><span>{videoInformation.lessons}</span>
                            </p>
                    }
                    {
                        videoInformation.Quiz === undefined ? null :
                            <p><span><img src={quizzes}
                                alt="quizzes" />{videoInformation.videoInfoTitle3}:</span><span>{videoInformation.Quiz}</span>
                            </p>
                    }
                    {
                        videoInformation.skillLevel === undefined ? null :
                            <p><span><img src={skillLevels}
                                alt="skillLevels" />{videoInformation.videoInfoTitle4}:</span><span>{videoInformation.skillLevel}</span>
                            </p>
                    }
                    {
                        videoInformation.category === undefined ? null :
                            <p><span><img src={category}
                                alt="category" />{videoInformation.videoInfoTitle5}:</span><span>{videoInformation.category}</span>
                            </p>
                    }
                    {
                        videoInformation.language === undefined ? null :
                            <p><span><img src={language}
                                alt="language" />{videoInformation.videoInfoTitle6}:</span><span>{videoInformation.language}</span>
                            </p>
                    }
                </div>
            </div>
            <div className={styles.backToCursesBtn}>
                <Button to={"/courses"} onclick={() => setCoursesName({ backgroundTitle: 'Course Variations', id: '' })} width={180} bgColor={'#FFD000'} height={60} fontSize={18} content={'⮘ Back to Curses'} />
            </div>
        </div>
    );
};

export default SingleCursesMoreInfoVideo
