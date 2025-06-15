import React from "react";
import Testimonials from "../newRecommends/NewRecommends";
import headerImage from "../../images/עינת דהן תמונת המלצות.png"
// Import all testimonial images
import recommend1 from "../../images/עינת דהן המלצות 1.png";
import recommend2 from "../../images/עינת דהן המלצות 2.png";
import recommend3 from "../../images/עינת דהן המלצות 3.png";
import recommend4 from "../../images/עינת דהן המלצות 4.png";
import recommend5 from "../../images/עינת דהן המלצות 5.png";
import recommend6 from "../../images/עינת דהן המלצות 6.png";
import recommend7 from "../../images/עינת דהן המלצות 7.png";
import recommend8 from "../../images/עינת דהן המלצות 8.png";
import recommend9 from "../../images/עינת דהן המלצות 9.png";
import recommend10 from "../../images/עינת דהן המלצות 10.png";
import recommend11 from "../../images/עינת דהן המלצות 11.png";
import recommend12 from "../../images/עינת דהן המלצות 12.png";
import recommend13 from "../../images/עינת דהן המלצות 13.png";
import recommend14 from "../../images/עינת דהן המלצות 14.png";
import recommend15 from "../../images/עינת דהן המלצות 15.png";
import recommend16 from "../../images/עינת דהן המלצות 16.png";
import recommend17 from "../../images/עינת דהן המלצות 17.png";
import recommend18 from "../../images/עינת דהן המלצות 18.png";
import recommend19 from "../../images/עינת דהן המלצות 19.png";
import recommend20 from "../../images/עינת דהן המלצות 20.png";
import recommend21 from "../../images/עינת דהן המלצות 21.png";
import recommend22 from "../../images/עינת דהן המלצות 22.png";
import recommend23 from "../../images/עינת דהן המלצות 23.png";
import recommend24 from "../../images/עינת דהן המלצות 24.png";
import styles from "./RecommendsScreen.module.css";

const RecommendsScreen = () => {
  // Create array of testimonial images
  const testimonialImages = [
    { src: recommend1 },
    { src: recommend2 },
    { src: recommend3 },
    { src: recommend4 },
    { src: recommend5 },
    { src: recommend6 },
    { src: recommend7 },
    { src: recommend8 },
    { src: recommend9 },
    { src: recommend10 },
    { src: recommend11 },
    { src: recommend12 },
    { src: recommend13 },
    { src: recommend14 },
    { src: recommend15 },
    { src: recommend16 },
    { src: recommend17 },
    { src: recommend18 },
    { src: recommend19 },
    { src: recommend20 },
    { src: recommend21 },
    { src: recommend22 },
    { src: recommend23 },
    { src: recommend24 }
  ];

  return (
    <>
      <div className={styles.recommendsContainer}>
        {/* אלמנט דקורטיבי */}
        <div className={styles.decorativeElement}></div>
        
        <div className={styles.rightSection}>
          <h2 className={styles.title}>קצת ממה שיש לתלמידות שלי לומר אחרי הקורס:</h2>
          <div className={styles.headerImageContainer}>
            <img 
              src={headerImage} 
              alt="תמונת כותרת" 
              className={styles.headerImage} 
            />
          </div>
        </div>
        
        <div className={styles.leftSection}>
          <Testimonials testimonialImages={testimonialImages} />
        </div>
        
      </div>
    </>
  );
};

export default RecommendsScreen;