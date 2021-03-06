import styles from "./styles.module.scss";
import Image from "next/image";
import FirstAvatar from "../../../public/images/alan.png";

export const LandingPage = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>
                    Advance software, advanced research for{" "}
                    <strong>simple</strong> life
                </h1>
                <p>
                    We harness the lasted technologies to develop cutting-edge
                    digital solutions for modern business requirements
                </p>
                <a>
                    Get a Quote <button>{"->"}</button>
                </a>
            </div>
        </>
    );
};
