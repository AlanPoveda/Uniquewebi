import styles from './styles.module.scss'
import { HeaderButton } from '../HeaderButton'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1>Uniquewebi</h1>
                <nav>
                    <a className={styles.active}href="">Home</a>
                    <a href="">About us</a>
                    <a href="">Services</a>
                    <a href="">News</a>
                    <HeaderButton />
                </nav>
            </div>
        </header>
    );
}