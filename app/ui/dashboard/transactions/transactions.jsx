import Image from "next/image"
import styles from "./transactions.module.css"

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transaction</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={35}
                                    height={35}
                                    className={styles.userImage} />
                                Peter Obi
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>23.6.2024</td>
                        <td>$500</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={35}
                                    height={35}
                                    className={styles.userImage} />
                                Peter Obi
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>23.6.2024</td>
                        <td>$500</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={35}
                                    height={35}
                                    className={styles.userImage} />
                                Peter Obi
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                        </td>
                        <td>23.6.2024</td>
                        <td>$500</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={35}
                                    height={35}
                                    className={styles.userImage} />
                                Peter Obi
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>23.6.2024</td>
                        <td>$500</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions;