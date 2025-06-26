import Card from "../components/Boxnew/BoxNew"
import Works from "../components/recommends/Works"
import styles from "./ForthScreen.module.css"
import ed from "../images/עינת דהן אייקון.png"
import VideoParallax from "../components/parralex/Parralex"
import Steps from "../components/steps/Steps"
const ForthScreen=()=>{

return <>
<div className={styles.title} id="כלות">אם את כאן - קודם כל מזל טוב!</div>
<div className={styles.description}>את עומדת להתחתן והבנת שהגיע הזמן לדאוג לאיפור ולשיער ליום הגדול שלך </div>
<div className={styles.title}>אז לפני שנרחיב על הכל..</div>
<Works text={false}/>
<div className={styles.title}>ועכשיו כשירד קצת הלחץ.. חשוב לי שתדעי</div>
<div className={styles.description}>כל כלה שלי מקבלת</div>

    <div className={styles.row}>
            <Card 
                 title="יחס פרימיום"
                imageSrc={ed} 
                description="אני מקבלת רק כלה אחת ביום - את מקבלת את כל תשומת הלב שלי ביום הכי חשוב שלך"
            />
            <Card 
                 title="איפור + שיער + ליווי"
                imageSrc={ed} 
                     description="את מקבלת ממני כל מה שצריך ביום הזה כולל הגעה, כולל הליווי עד לאולם ותוספות שיער"
            />
            <Card 
                title="איפור שמתאים ספציפית אליה" 
                imageSrc={ed} 
                 description="כל כלה שלי מקבלת איפור שמותאם לה אישית לאחר שיחת ייעוץ ותיאום ציפיות ממוקדת "
            />
        </div>
        <div className={styles.title}>וככה זה הולך לעבוד:</div>
        <Steps/>
        <VideoParallax/>
</>


}
export default ForthScreen