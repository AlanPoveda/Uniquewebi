import styles from "./styles.module.scss";

export function Header() {
    return (
        <>
            <nav className={styles.navbars}>
                <div>
                    <span>Uniquewebi</span>
                </div>

                <div className={styles.links}>
                    <a>Home</a> <a>About Us</a> <a>Services</a> <a>News</a>
                    <button>Contact Us</button>
                </div>
            </nav>
        </>
    );
}
