import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import logoFooter from '../../images-logos/logo-footer.png'
import SingleList from './SingleList';
import styles from './footer.module.css'

const Footer = () => {
    const { setOpenHamburger, socialMedia, footerInfo } = useGlobalContext()

    return (
        <div className={`${styles.footer} container`}>
            <div className={styles.footerLogoPart}>
                <Link className={styles.logo} to={'/'} onClick={() => setOpenHamburger(false)}><img src={logoFooter} alt="logo" /></Link>
                <ul className={styles.socialIcons}>
                    {
                        socialMedia.map(link => {
                            return <Link className={styles.socialIcon} key={link.id} to={link.href}>{link.iconUrl}</Link>
                        })
                    }
                </ul>
            </div>
            <div className={styles.footerLists}>
                {
                    footerInfo.map((links) => <SingleList key={links.id} {...links} />)
                }
            </div>
        </div>
    )
}

export default Footer
