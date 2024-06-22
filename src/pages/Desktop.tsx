import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import Hero from "../components/Hero";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.wrapperIllustrations}>
        <img
          className={styles.illustrationsIcon}
          loading="lazy"
          alt=""
          src="/illustrations.svg"
        />
      </div>
      <main className={styles.header}>
        <div className={styles.bg} />
        <header className={styles.frameParent}>
          <div className={styles.circleWrapper}>
            <a className={styles.circle}>Circle</a>
          </div>
          <div className={styles.navigation}>
            <nav className={styles.dropdownMenu}>
              <nav className={styles.dropdownItems}>
                <a className={styles.features}>Features</a>
                <a className={styles.pricing}>Pricing</a>
                <a className={styles.aboutUs}>About Us</a>
              </nav>
            </nav>
            <div className={styles.authButtons}>
              <div className={styles.loginButton}>
                <a className={styles.customerLogin}>Customer Login</a>
              </div>
              <Button
                className={styles.signUp}
                disableElevation
                color="primary"
                variant="contained"
                sx={{ borderRadius: "0px 0px 0px 0px" }}
              />
            </div>
          </div>
        </header>
        <Hero />
      </main>
    </div>
  );
};

export default Desktop;
