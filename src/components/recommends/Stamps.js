import React from 'react';
import styles from './Recommends.module.css';


// Import your images
import result1 from "../../images/עינת דהן תעודות 1.png";
import result2 from "../../images/עינת דהן תעודות 2.png";
import result3 from "../../images/עינת דהן תעודות 3.png";
import result4 from "../../images/עינת דהן תעודות 4.png";
import result5 from "../../images/עינת דהן תעודות 5.png";

import result6 from "../../images/עינת דהן תעודות 6.png";
import result7 from "../../images/עינת דהן תעודות 7.png";


const Stamps = () => {
  const images = [
   result1,result2,result3,result4, result5, result6, result7

  ];

  return (
    <>
      <div className={styles.explain}>
הובלתי עשרות נשים לקריירה בתחום האיפור
      </div>

   
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className={styles.explain}>
שכבר בשיעורים הראשונים מתחילות לקבל לקוחות ולעבוד..
      </div>
    </>
  );
};

export default Stamps;