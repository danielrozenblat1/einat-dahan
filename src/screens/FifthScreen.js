import React, { useState } from 'react';

import styles from "./FifthScreen.module.css"
import FAQItem from '../components/questions/Questions';



const FifthScreen = () => {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <>
      <div className={styles.title}>אתן שואלות ואני עונה</div>
      <div className={styles.description}>
        ריכזתי עבורך את כל השאלות שקיבלתי במהלך השנים ואני בטוחה שעלו גם לך לראש - לחצי על כל שאלה כדי שתפתח התשובה
      </div>
      
      <div className={styles.tabsContainer}>
        <button 
          className={`${styles.tab} ${activeTab === 'courses' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('courses')}>
   אני מתעניינת בקורס - לחצי כאן
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'brides' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('brides')}
        >
         אני כלה - לחצי כאן
        </button>
      </div>

      {activeTab === 'courses' && (
        <div className={styles.faqSection}>
          <FAQItem 
            question="אופס, פספסתי שיעור... מה עושים?"
            answer="יש לך אפשרות להשלים בקבוצה הבאה, וגם לחזור לחיזוק - אפילו אחרי שסיימת את הקורס!"/>
          
          <FAQItem 
            question="כמה מהר אוכל להתחיל להרוויח מהתחום?"
            answer="הבנות שלי מתחילות לעבוד עוד במהלך הקורס - לרוב אחרי השיער השלישי והרביעי"/>
          
          <FAQItem 
            question="מה בדיוק אני מקבלת בערכה?"
            answer="הכל הכל הכל! עד הפרט הכי קטן - כל המוצרים המקצועיים שאני עובדת איתם, כדי שתוכלי להתחיל לעבוד עם ההכי טוב שיש!"/>
          
          <FAQItem 
            question="מה קורה אחרי שהקורס נגמר?"
            answer="אני לא נעלמת! אני פה בשבילך לאורך כל הדרך - גם במהלך הקורס וגם אחריו. שאלות, עצות, בעיות - אני זמינה. יש לי תלמידות שמתקשרות אליי אחרי 3 שנים ואני עדיין שם בשבילן."/>
          
          <FAQItem 
            question="יש מקום עדיין בשוק? יש מלא מאפרות.."
            answer="חשבתי לעצמי את אותו הדבר לפני שאני יצאתי לדרך! חשוב לי שתדעי שהביקוש הוא ענק ויש עבודה בשפע לכולן. מה שקובע את ההצלחה זה המוטיבציה שלך, ההתמדה שלך והכישרון - ואני כאן כדי להוציא ממך את המקסימום."/>
          
     
          
          <FAQItem 
            question="למה דווקא אצלך ולא בבית ספר גדול?"
            answer="אני מלמדת בקבוצות קטנות של עד 4 תלמידות בקבוצה וכל תלמידה שלי מקבלת ממני את מלוא תשומת הלב בקורס - אם חשוב לך היחס האישי, המעטפת וההכוונה המדוייקת  - אני זה המקום"/>
          

        </div>
      )}
      
      {activeTab === 'brides' && (
        <div className={styles.faqSection}>
          <FAQItem 
            question="כמה כלות את מאפרת ביום?"
            answer="כלה אחת בלבד! ביום החתונה שלך את מקבלת ממני יחס VIP מלא - את כל תשומת הלב, כל הזמן, וכל הסבלנות שמגיעה לך ביום הכי חשוב."/>
          
          <FAQItem 
            question="האיפור יחזיק לי עד סוף האירוע?"
            answer="בהחלט! אני משתמשת במוצרים מקצועיים ובטכניקות שמבטיחות עמידות מושלמת. ובונוס - כל כלה מקבלת ערכת טאץ'אפ קטנה לרענון במהלך היום."/>
          
          <FAQItem 
            question="אנחנו נפגשות לפני החתונה?"
            answer="זה חובה! יש לנו מפגש לפני החתונה שבו אני לומדת בדיוק איך את רוצה להיראות, מה החלום שלך, ואיך להגשים אותו בדיוק כמו שחלמת."/>
          
      
     
        </div>
      )}
    </>
  );
};

export default FifthScreen;