import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './Me.module.css';
import einat from "../../images/עינת דהן תמונה שמאלית.png"
import Stamps from '../recommends/Stamps';
import Works from '../recommends/Works';

const AboutSection = () => {
  useEffect(() => {
    // הגדרת ScrollReveal עבור הפסקאות
    ScrollReveal().reveal(`.${styles.storyParagraph}`, {
      distance: '30px',
      origin: 'bottom',
      duration: 800,
      delay: 200,
      interval: 150,
      easing: 'ease-out',
      reset: false
    });

    // הגדרת ScrollReveal עבור הכותרת
    ScrollReveal().reveal(`.${styles.nameTitle}`, {
      distance: '30px',
      origin: 'bottom',
      duration: 800,
      delay: 100,
      easing: 'ease-out',
      reset: false
    });

    // הגדרת ScrollReveal עבור הציטוט
    ScrollReveal().reveal(`.${styles.quote}`, {
      distance: '30px',
      origin: 'bottom',
      duration: 800,
      delay: 300,
      easing: 'ease-out',
      reset: false
    });

    // הגדרת ScrollReveal עבור התמונה
    ScrollReveal().reveal(`.${styles.imageContainer}`, {
      distance: '30px',
      origin: 'bottom',
      duration: 800,
      delay: 400,
      easing: 'ease-out',
      reset: false
    });

  }, []);

  return <>
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.textContent}>
            <h2 className={styles.nameTitle}>נעים מאוד, עינת דהן</h2>
            <div className={styles.quote}>
              <span className={styles.quoteMark}>"</span>
              <p className={styles.quoteText}>
          תני לי יד ואני אתן לך עשר- בדרך להצלחה שלך
              </p>
              <span className={styles.quoteMark}>"</span>
            </div>
            
            <div className={styles.story}>
              <p className={styles.storyParagraph}>
               נכנסתי לתחום הזה נטו מאהבה גדולה לאיפור וחלום עמוק להפוך אותו למשהו יותר גדול.<br/> 26 שנה עברו מאז שעשיתי את הצעד הראשון, והיום אני יכולה להגיד שכל בוקר אני מתעוררת ויודעת שאני מתפרנסת בדיוק ממה שתמיד חלמתי עליו.
              </p>
              
                   <p className={styles.storyParagraph}>
                 נכנסתי לתחום עם המון מוטיבציה ורעב אבל גם עם הפחדים שבטוח עלו גם לכן לראש - "האם אני מתאימה לזה? מה הסיכוי שדווקא אני אצליח? איך אני אדע אם זה בשבילי?" אבל החלטתי ללצאת לדרך!. 26 שנה אחרי, אני יכולה להגיד שזה היה הצעד הכי נכון בחיים שלי - בניתי קריירה, זכיתי לעצמאות כלכלית מלאה והפכתי למאפרת מבוקשת.
              </p>
              
              <p className={styles.storyParagraph}>
              במהלך השנים ראיתי כמה בנות מתלבטות, מפחדות להתחיל, או לומדות בבתי ספר גדולים ונופלות בין הכיסאות. החלטתי שאני חייבת להעביר את כל הידע שצברתי כדי לתת את המעטפת,התמיכה והכוונה שאני כל כך הייתי צריכה בתחילת הדרך שלי וכמובן - לחסוך לכן את הזמן היקר שלא תלמדו את זה על בשרכן! במקום ללמוד בטעויות ולמצוא את הדרך לבד, אני פה כדי לקצר לכן את הדרך ולהוביל אתכן ישר להצלחה.
              </p>
            </div>
          </div>
          
          <div className={styles.imageContent}>
            <div className={styles.imageContainer}>
              <img 
                src={einat}
                alt="עינת דהן - מלמדת איפור מקצועי"
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <Stamps/>
  </>
};

export default AboutSection;