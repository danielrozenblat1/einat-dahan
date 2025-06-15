import React from 'react';
import styles from './WhoFits.module.css';
import { FaHeart, FaStar, FaGem, FaTimes, FaExclamationTriangle, FaClock, FaUserTimes, FaComments } from 'react-icons/fa';

const EinatEligibilitySection = () => {
  // מי מתאים ללמוד
  const eligibleList = [
    {
      text: "בנות שחולמות להתמקצע באיפור ולפתוח דלת לקריירה חדשה",
      icon: <FaHeart className={styles.icon} />
    },
    {
      text: "מאפרות שרוצות להשתדרג בטכניקות חדשות ולהגיע לרמה הגבוהה ביותר",
      icon: <FaStar className={styles.icon} />
    },

    {
      text: "מי שמוכנה להשקיע - לתרגל, לעבוד גם מעבר לשיעורים",
      icon: <FaGem className={styles.icon} />
    },
    {
      text: "מי שיש לה תשוקה אמיתית לתחום ורוצה להגשים את עצמה",
      icon: <FaHeart className={styles.icon} />
    },
    {
      text: "מי שמחפשת יחס אישי ולימוד בקבוצה קטנה (עד 4 תלמידות)",
      icon: <FaStar className={styles.icon} />
    }
  ];

  // מי לא מתאים ללמוד
  const nonEligibleList = [
    {
      text: "מי שלא מוכנה להשקיע ולעבוד קשה כדי להצליח",
      icon: <FaTimes className={styles.iconNegative} />
    },
    {
      text: "מי שמחפשת פתרונות קסם והצלחה מהירה",
      icon: <FaExclamationTriangle className={styles.iconNegative} />
    },
    {
      text: "מי שלא מוכנה להתמיד ולהשקיע זמן בתרגול וחזרה על החומר",
      icon: <FaClock className={styles.iconNegative} />
    },
    {
      text: "מי שלא רעבה להצליח בתחום",
      icon: <FaUserTimes className={styles.iconNegative} />
    }
  ];

  const handleCTAClick = () => {
    const formSection = document.getElementById('טופס');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.glowEffect}></div>
      
      <div className={styles.sectionWrapper}>
        <div className={styles.section}>
          <h2 className={styles.title}>למי מתאים ללמוד אצלי</h2>
          <div className={styles.line}></div>
          
          <ul className={styles.list}>
            {eligibleList.map((item, index) => (
              <li key={`eligible-${index}`} className={styles.listItem}>
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>למי פחות מתאים ללמוד אצלי</h2>
          <div className={styles.lineNegative}></div>
          
          <ul className={styles.list}>
            {nonEligibleList.map((item, index) => (
              <li key={`non-eligible-${index}`} className={styles.listItemNegative}>
                <div className={styles.iconWrapperNegative}>
                  {item.icon}
                </div>
                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <button 
          className={styles.ctaButton}
          onClick={handleCTAClick}
          aria-label="פנייה לטופס יצירת קשר"
        >
       
          <span className={styles.ctaText}>עינת, אני מתאימה! בואי נדבר!</span>
        </button>
      </div>
    </div>
  );
};

export default EinatEligibilitySection;