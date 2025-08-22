import React, { useState, useRef } from 'react';
import { 
  Sparkles, Heart, Eye, Brush, Palette, Scissors, Camera, 
  Award, Users, Clock, Calendar, Star, Plus, Minus, Zap,
  Target, Layers, Crown, BookOpen, TrendingUp, CheckCircle,
  Lightbulb, Focus, Trophy, Instagram, PenTool, Shield,
  UserCheck, Search, Activity, Wand2, Flower2, ArrowDown
} from 'lucide-react';
import styles from './Sillabus.module.css';
import RecommendsScreen from '../RecommendsScreen/RecommendsScreen';
import EinatEligibilitySection from '../whoFits/WhoFits';
import PrivacyPolicy from '../privacy/Privacy';

const MakeupSyllabus = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Form states
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Form refs
  const fullNameRef = useRef(null);
  const phoneRef = useRef(null);
  const reasonRef = useRef(null);

  // Server settings
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "einatd.academy@gmail.com";

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Scroll to form function
  const scrollToForm = () => {
    const formElement = document.getElementById('טופס');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // פונקציה שמונעת מהטופס להגיב על קליק בקישור
  const handlePrivacyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // בדיקה אם המשתמש אישר את תנאי השימוש ומדיניות הפרטיות
    if (!agreed) {
      alert("עליך לאשר את תנאי השימוש ומדיניות הפרטיות");
      return;
    }
    
    const name = fullNameRef.current.value;
    const phone = phoneRef.current.value;
    const reason = reasonRef.current.value;
    
    // Validate inputs
    let valid = true;
    const newErrors = { ...errors };

    // Validate full name
    if (!name.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
      valid = false;
    } else if (name.trim().length < 2) {
      newErrors.fullName = 'שם חייב להכיל לפחות 2 תווים';
      valid = false;
    }

    // Validate phone number (Israeli format)
    const phoneRegex = /^0(5\d|[23489])\d{7}$/;
    if (!phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
      valid = false;
    } else if (!phoneRegex.test(phone.trim())) {
      newErrors.phone = 'נא להזין מספר טלפון תקין';
      valid = false;
    }

    // Validate reason
    if (!reason || reason.trim() === '') {
      newErrors.reason = 'נא להזין סיבת פנייה';
      valid = false;
    } else if (reason.trim().length < 3) {
      newErrors.reason = 'סיבת הפנייה חייבת להכיל לפחות 3 תווים';
      valid = false;
    }

    setErrors(newErrors);
    
    if (!valid) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Server data object
    const serverData = {
      name: name,
      phone: phone,
      email: "", // Not required in this form but included in the API structure
      reason: reason,
      reciver: reciver
    };

    try {
      // Send to server
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          fullNameRef.current.value = "";
          phoneRef.current.value = "";
          reasonRef.current.value = "";
          setSubmitted(false);
          setAgreed(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסו שוב מאוחר יותר");
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  const sessions = [
    {
      number: 1,
      title: "יסודות האיפור המקצועי",
      content: [
        { text: "היכרות עם תחום איפור הכלות והביוטי", icon: <BookOpen className={styles.contentIcon} /> },
        { text: "סטריליזציה והיגיינה מקצועית", icon: <Shield className={styles.contentIcon} /> },
        { text: "מבנה הפנים והעור – ניתוח והבנה", icon: <Search className={styles.contentIcon} /> },
        { text: "התאמת מוצרים לסוגי עור שונים", icon: <Target className={styles.contentIcon} /> },
        { text: "תיקוני גוון, בסיס מושלם וסקין", icon: <Palette className={styles.contentIcon} /> },
        { text: "קונסילרים, פריימרים וקורקטורים- מתי ולמה", icon: <Brush className={styles.contentIcon} /> }
      ]
    },
    {
      number: 2,
      title: "מורפולוגיה ופיסול פנים",
      content: [
        { text: "פיסול פנים לפי סוגים שונים של מבנה הפנים", icon: <Target className={styles.contentIcon} /> },
        { text: "טכניקות להארות הצללות ופיסול פנים", icon: <Layers className={styles.contentIcon} /> },
        { text: "שימוש בחומרים רטובים ויבשים", icon: <Brush className={styles.contentIcon} /> },
        { text: "יצירת \"עור שני\" – מראה טבעי מול כיסוי מלא", icon: <Sparkles className={styles.contentIcon} /> }
      ]
    },
    {
      number: 3,
      title: "איפור עיניים – קלאסי ורך",
      content: [
        { text: "עקרונות הדגשה לעין בהירה וכהה", icon: <Eye className={styles.contentIcon} /> },
        { text: "טכניקות טשטוש מקצועיות", icon: <Brush className={styles.contentIcon} /> },
        { text: "שילוב צבעים נכון בהתאם לגוון עור ועיניים", icon: <Palette className={styles.contentIcon} /> }
      ]
    },
    {
      number: 4,
      title: "הדבקת ריסים",
      content: [
        { text: "הדגמה של הדבקת ריסים קלאסית בשיטה הייחודית שלנו", icon: <Scissors className={styles.contentIcon} /> },
        { text: "התאמת מבנה ריסים ללקוחה", icon: <Target className={styles.contentIcon} /> },
        { text: "התאמה למבנה העין ולסוג האיפור", icon: <Eye className={styles.contentIcon} /> }
      ]
    },
    {
      number: 5,
      title: "סוגי אייליינר",
      content: [
        { text: "אייליינר קלאסי, מעושן וחתולי", icon: <PenTool className={styles.contentIcon} /> },
        { text: "דגש על מהות האיילינר ותפקידו", icon: <Focus className={styles.contentIcon} /> },
        { text: "טכניקות יישום מדויקות", icon: <Target className={styles.contentIcon} /> }
      ]
    },
    {
      number: 6,
      title: "שפתיים מדויקות ועבודה עם צבעים",
      content: [
        { text: "תיחום, מילוי ועמידות", icon: <PenTool className={styles.contentIcon} /> },
        { text: "שילובים נכונים ליצירת לוק מושלם", icon: <Palette className={styles.contentIcon} /> },
        { text: "עבודה עם טקסטורות שונות", icon: <Brush className={styles.contentIcon} /> }
      ]
    },
    {
      number: 7,
      title: "גבות",
      content: [
        { text: "הדגשת גבות במראה הטבעי", icon: <TrendingUp className={styles.contentIcon} /> },
        { text: "התאמה למבנה הגבה והפנים של הלקוחה", icon: <Target className={styles.contentIcon} /> },
        { text: "טכניקות עיצוב וצביעה", icon: <Brush className={styles.contentIcon} /> }
      ]
    },
    {
      number: 8,
      title: "Smokey Eyes",
      content: [
        { text: "האיפור המעושן בסגנון עכשוי, בגרסה לכלות", icon: <Zap className={styles.contentIcon} /> },
        { text: "התאמת מראה שפתיים", icon: <Heart className={styles.contentIcon} /> },
        { text: "איזון בין דרמטיות לעדינות", icon: <Layers className={styles.contentIcon} /> }
      ]
    },
    {
      number: 9,
      title: "עור בוגר",
      content: [
        { text: "התאמת חומרים לעור בוגר", icon: <Target className={styles.contentIcon} /> },
        { text: "טכניקות המתאימות להרמה, רענון ועמידות", icon: <TrendingUp className={styles.contentIcon} /> },
        { text: "עבודה עם טקסטורות מתאימות", icon: <Brush className={styles.contentIcon} /> }
      ]
    },
    {
      number: 10,
      title: "כהות עור",
      content: [
        { text: "התאמת צבעים לעור כהה / שזוף", icon: <Palette className={styles.contentIcon} /> },
        { text: "טכניקות להארות, הצללות, כיסוי פיגמנטציה", icon: <Sparkles className={styles.contentIcon} /> },
        { text: "מראה רך ועדין המתאים לגוון", icon: <Heart className={styles.contentIcon} /> }
      ]
    },
    {
      number: 11,
      title: "כלות",
      content: [
        { text: "מראה כלה רומנטי זוהר טבעי", icon: <Crown className={styles.contentIcon} /> },
        { text: "סגנון עדין וגלואו ליום חתונה", icon: <Sparkles className={styles.contentIcon} /> },
        { text: "עבודה עם שימרים וגלואו", icon: <Star className={styles.contentIcon} /> },
        { text: "סידור והדבקת ריסים טבעית", icon: <Scissors className={styles.contentIcon} /> },
        { text: "הכנה ליום כלה – עבודה תחת לחץ", icon: <Clock className={styles.contentIcon} /> },
        { text: "טיפוח תדמית כמאפרת מובילה", icon: <Award className={styles.contentIcon} /> },
        { text: "התנהלות מול הכלה לפני יום החתונה", icon: <Users className={styles.contentIcon} /> },
        { text: "ליווי כלה ביום החתונה – טיפים מהשטח", icon: <Heart className={styles.contentIcon} /> }
      ]
    },
    {
      number: 12,
      title: "התמודדות מול לקוחה",
      content: [
        { text: "שיעור מבחן - בחירת איפור מותאם אישית ללקוחה", icon: <Trophy className={styles.contentIcon} /> },
        { text: "שימוש בטכניקות שנלמדו בכיתה", icon: <CheckCircle className={styles.contentIcon} /> },
        { text: "עמידה בזמנים", icon: <Clock className={styles.contentIcon} /> },
        { text: "הדרכת צילום נכון תוך כדי שימוש בציוד ותאורות", icon: <Camera className={styles.contentIcon} /> },
        { text: "פרסום ברשתות החברתיות כמאפרת מובילה", icon: <Instagram className={styles.contentIcon} /> },
        { text: "צילום מעשי של התלמידות", icon: <Camera className={styles.contentIcon} /> }
      ]
    },
    {
      number: 13,
      title: "בניית תיק עבודות מקצועי",
      content: [
        { text: "סטיילינג, שיער ואיפור מלא", icon: <Brush className={styles.contentIcon} /> },
        { text: "יצירת לוקים מגוונים לתיק אישי", icon: <Palette className={styles.contentIcon} /> },
        { text: "צילומים מקצועיים", icon: <Camera className={styles.contentIcon} /> }
      ]
    },
    {
      number: 14,
      title: "סיום קורס וקבלת תעודת הסמכה",
      content: [
        { text: "קבלת תעודת הסמכה - מאפרת כלות וערב מקצועית", icon: <Award className={styles.contentIcon} /> },
        { text: "התנהלות מול לקוחות ובניית עסק מצליח", icon: <Users className={styles.contentIcon} /> },
        { text: "תמחור חכם", icon: <TrendingUp className={styles.contentIcon} /> },
        { text: "התנהלות כעסק", icon: <Lightbulb className={styles.contentIcon} /> }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>
            קורס איפור כלות וערב מקצועי
          </h1>
          
          <h2 className={styles.subtitle}>
            הדרך להפוך למאפרת מובילה 
          </h2>
          
          <div className={styles.courseInfo}>
            <div className={styles.infoCard}>
              <Calendar className={styles.infoIcon} />
              <span className={styles.infoText}>14 מפגשים</span>
            </div>
            
            <div className={styles.infoCard}>
              <Clock className={styles.infoIcon} />
              <span className={styles.infoText}>4 שעות כל מפגש</span>
            </div>
            
            <div className={styles.infoCard}>
              <Users className={styles.infoIcon} />
              <span className={styles.infoText}>4 תלמידות בכיתה בלבד</span>
            </div>
          </div>
          
          <div className={styles.expandButtonContainer}>
            <button 
              className={styles.expandButton} 
              onClick={toggleExpanded}
              aria-label={isExpanded ? "הסתר מפגשים" : "הצג מפגשים"}
            >
              {isExpanded ? (
                <>
                  <Minus className={styles.expandIcon} />
                  <span>הסתר את תוכן המפגשים</span>
                </>
              ) : (
                <>
                  <Plus className={styles.expandIcon} />
                  <span>לחצי לצפייה בכל המפגשים</span>
                </>
              )}
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className={styles.sessionsContainer}>
            {sessions.map((session) => (
              <div 
                key={session.number} 
                className={`${styles.sessionCard} ${styles[`session${session.number.toString().padStart(2, '0')}`]}`}
              >
                <div className={styles.sessionHeader}>
                  <div className={styles.sessionNumber}>
                    {session.number.toString().padStart(2, '0')}
                  </div>
                  
                  <div className={styles.sessionTitleContainer}>
                    <h3 className={styles.sessionTitle}>
                      {session.title}
                    </h3>
                  </div>
                </div>
                
                <div className={styles.contentContainer}>
                  {session.content.map((item, index) => (
                    <div key={index} className={styles.contentItem}>
                      <div className={styles.contentIconWrapper}>
                        {item.icon}
                      </div>
                      <span className={styles.contentText}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* כפתור הרשמה אחרי המפגש האחרון */}
            <div className={styles.registrationButtonContainer}>
              <button 
                className={styles.registrationButton} 
                onClick={scrollToForm}
                aria-label="עבור לטופס הרשמה"
              >
                <span className={styles.registrationText}>עינת, קחי אותי להרשמה!</span>
                <div className={styles.registrationIconWrapper}>
                  <ArrowDown className={styles.registrationIcon} />
                </div>
              </button>
            </div>
          </div>
        )}
               <RecommendsScreen/>
                    <div className={styles.titleContainer}>
            <div className={styles.title}>וכדי שתהי בטוחה לגמרי..</div>
          </div>
               <EinatEligibilitySection/>
        {/* Form Section */}
        <div className={styles.formScreenContainer} id="טופס">
          <div className={styles.titleContainer}>
            <div className={styles.title}>כאן מתחילים</div>
          </div>
          
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="fullName">שם מלא</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                  placeholder="השם המלא שלך"
                  disabled={isSubmitting || submitted}
                  ref={fullNameRef}
                />
                {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="phone">מספר טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  placeholder="050-0000000"
                  disabled={isSubmitting || submitted}
                  ref={phoneRef}
                />
                {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="reason">סיבת הפנייה</label>
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  className={`${styles.input} ${errors.reason ? styles.inputError : ''}`}
                  placeholder="ספרי לי מה מעניין אותך לדעת..."
                  disabled={isSubmitting || submitted}
                  ref={reasonRef}
                />
                {errors.reason && <p className={styles.errorText}>{errors.reason}</p>}
              </div>

              {/* תיבת האישור למדיניות הפרטיות */}
              <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                marginTop: "20px",
                marginBottom: "20px"
              }}>
                <label style={{ 
                  direction: "rtl", 
                  fontFamily: "AssistantR", 
                  fontSize: "0.9rem", 
                  textAlign: "right", 
                  display: "flex", 
                  alignItems: "center", 
                  flexWrap: "wrap", 
                  gap: "5px" 
                }}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    style={{ marginLeft: "10px" }}
                  />
                  קראתי את
                  <span onClick={handlePrivacyClick}>
                    <PrivacyPolicy 
  ownerName="עינת דהן" 
  email="einatd.academy@gmail.com" 
  phone="+972 52-658-5166" 
  domain="https://einatdahan.co.il/" 
/>
                  </span>
                  ואני מאשר/ת
                </label>
              </div>
              
              <button 
                type="submit" 
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''} ${submitted ? styles.submitted : ''}`}
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'עינת, בואי נדבר!'}
              </button>
            </form>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default MakeupSyllabus;