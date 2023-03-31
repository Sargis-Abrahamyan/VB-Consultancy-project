import React from 'react';
import Address from '../../components/Address';
import Form from '../../components/Form';
import styles from './contact.module.css';

const Contact = () => {
    return (
        <div className={styles.mainContact}>
            <div className={styles.contactHeading}>
                <h2>Contact</h2>
            </div>
            <div className={styles.contactContent}>
                <Form />
                <Address/>
            </div>
        </div>
    )
}

export default Contact
