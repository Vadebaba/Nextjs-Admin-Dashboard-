import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Adewole Victor</div>
            <div className={styles.test}>
                All rights reserved.
            </div>
        </div>
    );
};

export default Footer;