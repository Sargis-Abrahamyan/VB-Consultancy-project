import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import logo from '../../images-logos/logo.png'
import styles from './navbar.module.css';

const Navbar = () => {
  const { navItems, coursesPages, setShowCourseVariations, setShowMembershipLevels } = useGlobalContext()
  const [dropDownState, setDropDownState] = useState('')
  const [findedItems, setFindedItems] = useState([])
  const [openHamburger, setOpenHamburger] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (dropDownState) {
      const filteredArray = coursesPages.filter(item => item.name === dropDownState)
      setFindedItems(filteredArray)
    }
  }, [dropDownState, coursesPages])

  useEffect(() => {
    return window.onresize = (e) => {
      if (e) {
        if (e.target.outerWidth > 640) {
          setOpenHamburger(false)
        }
      }
    }
  }, [])

  const handleClick = (title) => {
    if (title === 'courses') {
      setShowCourseVariations(true)
      setShowMembershipLevels(true)
    }
  }

  const handleClickDropDownItems = (title) => {
    if (title.includes('Membership')) {
      setShowCourseVariations(false)
      setShowMembershipLevels(true)
    } else if (title.includes('Variations')) {
      setShowMembershipLevels(false)
      setShowCourseVariations(true)
    }
  }

  return (
    <nav className={`${styles.navBar} container`}>
      <Link className={styles.logo} to={'/'} onClick={() => setOpenHamburger(false)}><img src={logo} alt="logo" /><span>VB CONSULTANCY</span></Link>
      <div className={styles.mainNavbarBlock}>
        <ul className={styles.mainList}>
          {
            navItems.map(({ id, title }) => {
              return <li key={id} className={`${styles.dropdown}`} onMouseOver={() => setDropDownState(title)}>
                <Link onClick={() => handleClick(title)} to={`/${title}`} className={`${location.pathname === `/${title}` ? styles.active : ''}`}>
                  {`${title} ${(title === 'courses' || title === 'pages') ? '⮛' : ''}`}
                </Link>
                {
                  <div className={styles.content}>
                    {
                      findedItems.map(item => <Link onClick={() => handleClickDropDownItems(item.title)} to={item.to} key={item.id}>{item.title}</Link>)
                    }
                  </div>
                }
              </li>
            })
          }
        </ul>
      </div>
      <div className={`${styles.mobileBlock} ${openHamburger ? styles.open : ''}`}>
        <ul className={styles.mainList}>
          {
            navItems.map(({ id, title }) => {
              return <li key={id} className={styles.dropdown} onMouseOver={() => setDropDownState(title)}>
                <Link to={`/${title}`} onClick={() => { setOpenHamburger(false); handleClick(title) }}>
                  {`${title} ${(title === 'courses' || title === 'pages') ? '⮛' : ''}`}
                </Link>
                {
                  <div className={styles.content}>
                    {
                      findedItems.map(item => <Link onClick={() => { setOpenHamburger(false); handleClickDropDownItems(item.title) }} to={item.to} key={item.id}>{item.title}</Link>)
                    }
                  </div>
                }
              </li>
            })
          }
        </ul>
      </div>
      <button className={styles.hamburger} onClick={() => setOpenHamburger(!openHamburger)}>
        {openHamburger ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
      </button>
    </nav>
  )
}

export default Navbar
