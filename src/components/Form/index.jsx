import React from 'react'
import { useGlobalContext } from '../../context'
import styles from './form.module.css'

const Form = () => {
    const { formInformation, setFormInformation } = useGlobalContext();
    const { firstName, lastName, email, subject, message } = formInformation

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('formInformation', formInformation)
        setFormInformation({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    return (
        <div className={styles.mainForm}>
            <h3>Contact Us</h3>
            <div className={styles.line}></div>
            <h2>Keep in Touch</h2>
            <form onSubmit={handleSubmit} action="mailto:vanovasilyan@gmail.com" method='POST'>
                <div className={styles.firstLine}>
                    <div>
                        <input required name='firstName' value={firstName} onChange={(e) => setFormInformation({ ...formInformation, firstName: e.target.value })} type="text" placeholder='First Name' />
                    </div>
                    <div>
                        <input required name='lastName' value={lastName} onChange={(e) => setFormInformation({ ...formInformation, lastName: e.target.value })} type="text" placeholder='Last Name' />
                    </div>
                </div>
                <div className={styles.email}>
                    <input required name='email' value={email} onChange={(e) => setFormInformation({ ...formInformation, email: e.target.value })} type="email" placeholder='Your Email' />
                </div>
                <div className={styles.subject}>
                    <input type="text" name='subject' value={subject} onChange={(e) => setFormInformation({ ...formInformation, subject: e.target.value })} placeholder='Your Subject' />
                </div>
                <div className={styles.textArea}>
                    <textarea placeholder='Your Message' value={message} onChange={(e) => setFormInformation({ ...formInformation, message: e.target.value })} name='message' id="" rows="5"></textarea>
                </div>
                <button className={styles.submitBtn}>Submit</button>
            </form>
        </div>
    )
}

export default Form
