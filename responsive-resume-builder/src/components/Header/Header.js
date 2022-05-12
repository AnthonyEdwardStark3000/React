import React from "react";

import resumeSvg from "../../assets/resume.svg";
import undraw_weather_notification_re_3pad from "../../assets/undraw_weather_notification_re_3pad.svg";

import styles from "./Header.module.scss";

function Header() {
   const check ={
        border: "4px solid red"
    }
   const check1 ={
        border: "4px solid black"
    }
  return (
    // <div className={styles.container}>
    //   <div className={styles.left}>
    //     <p className={styles.heading}>
    //       A <span>Resume</span> that stands out!
    //     </p>
    //     <p className={styles.heading}>
    //       Make your own resume. <span>It's free</span>
    //     </p>
    //   </div>
    //   <div className={styles.right}>
    //     <img src={resumeSvg} alt="Resume" />
    //   </div>
    // </div>
    
     <div className ={styles.container}>
            <div className={styles.main}>
            <div className={styles.main__image}>
            {/* <img src={undraw_weather_notification_re_3pad} width="50%" /> */}
            </div>
            <div className={styles.main__text}>
            <div className={styles.main__text__1}>
                <h1><strong><span>Create</span></strong></h1>
            </div>
            <div className={styles.main__text__2}>
                <p>Your Resume on a <span>Single</span> click</p>
            </div>
            </div>
            </div>
        </div> 

  );
}

export default Header;
