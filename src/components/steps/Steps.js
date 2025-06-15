import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { Player } from '@lordicon/react';
import styles from './Steps.module.css';
import magnet from "../../icons/wired-lineal-981-consultation-hover-conversation (1).json";
import price from "../../icons/wired-lineal-1587-cosmetic-brush-hover-pinch.json"
import bride from "../../icons/wired-lineal-3078-avatar-bride-hover-pinch.json"
import acne from "../../icons/wired-lineal-1599-powder-makeup-face-hover-pinch.json"

const Steps = () => {
  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);
  const playerRef3 = useRef(null);
  const playerRef4 = useRef(null);

  const stepsData = [
    {
      id: 1,
      icon: magnet,
      playerRef: playerRef1,
      title: "מפגש תיאום ציפיות",
      description: "אנחנו נפגשות מראש כדי להכיר אותך ולהבין מה תכננת ליום החתונה (אני בטוחה שיש לך כבר מיליון רעיונות) . ויחד מבינות מה הכי מתאים לך."
    },
    {
      id: 2,
      icon: price,
      playerRef: playerRef2,
      title: "בניית הלוק המושלם",
      description: "אנחנו בודקות איך האיפור והשיער משתלבים, ומדייקות עד שהכל נראה כמו שחלמת."
    },
    {
      id: 3,
      icon: bride,
      playerRef: playerRef3,
      title: "היום הגדול הגיע",
      description: "ביום החתונה אני מגיעה אלייך על הבוקר עם כל הציוד וכמובן עם אווירה ומתחילה לעבוד על האיפור והשיער שלך לפני שמגיעים הצלמים"
    },
    {
      id: 4,
      icon: acne,
      playerRef: playerRef4,
      title: "ליווי",
      description: "אני נשארת איתך ומלווה אותך, מוודאת שהכל יושב מושלם ושאת רגועה והכי יפה בעולם. זה היום שלך להיות הכלה הכי יפה."
    }
  ];

  useEffect(() => {
    // הפעלת כל האנימציות בהתחלה
    playerRef1?.current?.playFromBeginning();
    playerRef2?.current?.playFromBeginning();
    playerRef3?.current?.playFromBeginning();
    playerRef4?.current?.playFromBeginning();

    ScrollReveal().reveal(`.${styles.stepTitle}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
    
    ScrollReveal().reveal(`.${styles.stepDescription}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
    
    ScrollReveal().reveal(`.${styles.iconContainer}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
  }, []);

  const handleComplete = (ref) => {
    setTimeout(() => {
      ref?.current?.playFromBeginning();
    }, 1000);
  };

  return (
    <div className={styles.stepsContainer}>
      {stepsData.map((step, index) => (
        <div key={step.id} className={styles.stepWrapper}>
          <div className={`${styles.stepItem} step-${step.id}`}>
            <div className={styles.iconContainer}>
              <Player 
                icon={step.icon} 
                ref={step.playerRef} 
                size="100%" 
                onComplete={() => handleComplete(step.playerRef)}
              />
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
          
          {index < stepsData.length - 1 && (
            <div className={styles.connector}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Steps;