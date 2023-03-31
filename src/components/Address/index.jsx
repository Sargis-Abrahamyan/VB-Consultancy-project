import React from 'react';
// css
import styles from './address.module.css'

const Address = () => {
    return (
        <div className={styles.mainAddress}>
            <h2>Address</h2>
            <div className={styles.line}></div>
            <ul className={styles.infoAddress}>
                <li>
                    <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                    <p>43 castle road 517 district, kiyev port south Canada​.</p>
                </li>
                <li>
                    <i aria-hidden="true" className="far fa-envelope"></i>
                    <p>email@yourmail.com</p>
                </li>
                <li>
                    <i aria-hidden="true" className="fas fa-phone"></i>
                    <p>+ 0123 3456 7890</p>
                </li>
                <li>
                    <i aria-hidden="true" className="fas fa-globe"></i>
                    <p>www.yoursite.com</p>
                </li>
            </ul>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24379.384091880172!2d44.477989449999995!3d40.1996524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd6b568a4607%3A0xcdbec953750d2c96!2sBarekamutyun!5e0!3m2!1sen!2s!4v1656664899978!5m2!1sen!2s" title={'iframe'} width={'100%'} style={{ border: 0 }} allowFullScreen={true} loading={'lazy'} referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Address
