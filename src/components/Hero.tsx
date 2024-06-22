import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <section className={[styles.hero, className].join(" ")}>
      <div className={styles.heroContent}>
        <div className={styles.anAiToolMadeForConversionWrapper}>
          <div className={styles.anAiTool}>
            An AI tool made for conversion rate optimization
          </div>
        </div>
        <div className={styles.increaseYourConversionRateWrapper}>
          <h1 className={styles.increaseYourConversionContainer}>
            <span>{`Increase your conversion rate `}</span>
            <span className={styles.usingAi}>using AI</span>
          </h1>
        </div>
        <div className={styles.callToAction}>
          <div className={styles.buttonAndTrial}>
            <div className={styles.buttonprimarywithIconWrapper}>
              <Button
                className={styles.buttonprimarywithIcon}
                disableElevation
                color="primary"
                variant="contained"
                sx={{ borderRadius: "0px 0px 0px 0px" }}
              />
            </div>
            <div className={styles.daysFreeTrial}>
              30 Days free trial | No credit card required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
