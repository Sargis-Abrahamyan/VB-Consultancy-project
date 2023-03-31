import { useState, useEffect } from 'react';
import Table from '../../components/Table';
import SingleCurses from './SinglCurses/index';
import PaginatePages from './PaginatePages/Index';
import SingleCursesMoreInfo from './SingleCursesMoreInfo/Index'
import { useGlobalContext } from '../../context';

import styles from './courses.module.css'

const Courses = () => {
  const { showCourseVariations, showMembershipLevels, courseItems } = useGlobalContext();
  const [coursesName, setCoursesName] = useState({ backgroundTitle: 'Course Variations', id: '' });
  const [singleMoreInfo, setSingleMoreInfo] = useState({});
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageNull, setPageNull] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    if (coursesName.id) {
      const courseFind = courseItems.find((item) => coursesName.id === item.id)
      setSingleMoreInfo(courseFind)
    }
    setPageNull(!pageNull)
  }, [coursesName])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(courseItems.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(courseItems.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % courseItems.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.mainCourses}>
      {showCourseVariations &&
        <div className={`${styles.mainCursesBlock ? styles.mainCursesBlock : ''} container`}>
          <div className={styles.cursesHeading}>
            <h2>{coursesName.backgroundTitle}</h2>
          </div>
          {
            !coursesName.id ? (
              <div className={styles.cursesBlock}>
                {
                  currentItems && currentItems.map(curses =>
                    <SingleCurses
                      key={curses.id}
                      {...curses}
                      setCoursesName={setCoursesName}
                      handlePageClick={handlePageClick}
                      currentItems={currentItems} />)
                }
              </div>
            ) : (singleMoreInfo && <SingleCursesMoreInfo setCoursesName={setCoursesName} singleMoreInfo={singleMoreInfo} />)
          }
          {pageNull ? null : <PaginatePages pageCount={pageCount} handlePageClick={handlePageClick} />}
        </div>
      }
      {showMembershipLevels &&
        <div className={styles.mainMembershipLevels}>
          <div className={showCourseVariations && showMembershipLevels ? styles.memberShipHeadinginAllCourses : styles.membershipHeading}>
            <h2>Membership Levels</h2>
          </div>
          <Table />
        </div>
      }
    </div>
  )
}

export default Courses