import SmallBox from "../components/SmallBox/SmallBox"
import styles from "./SecondScreen.module.css"
import coins from "../icons/wired-lineal-298-coins-loop-spin (1).json"
import book from "../icons/wired-lineal-112-book-hover-flutter.json"
import Card from "../components/Boxnew/BoxNew"
import love from "../icons/wired-lineal-1587-cosmetic-brush-hover-pinch.json"
import calender from "../icons/wired-lineal-28-calendar-hover-pinch (1).json"

const SecondScreen=()=>{


return <>
    <div className={styles.title} id="קורסים">לא הגעת לכאן סתם</div>
        <div className={styles.description}>את כאן כי תמיד אהבת להתאפר ואפילו לאפר את החברות והמשפחה  <strong>ולאחרונה התחלת לחשוב על להפוך את התשוקה שלך לקריירה</strong></div>

    <div className={styles.title}>אחרי 25 שנות נסיון אני אומרת לך בפה מלא</div>
     <div className={styles.description}>את יכולה להצליח בתחום <strong>ובענק! </strong> ובתוך זמן קצר להתחיל</div>
    <div className={styles.smallrow}>
<SmallBox text="להכניס סכומים שפעם רק חלמת עליהם" icon={coins}/>
<SmallBox text="למלא את היומן שלך בעבודות" icon={book}/>
    </div>
    <div className={styles.smallrow}>
<SmallBox text="להיות הבוס של עצמך ולהתנהל כעצמאית" icon={calender}/>
<SmallBox text="לעשות כל יום את מה שאת באמת אוהבת" icon={love}/>
    </div>



  <div className={styles.title}>אז לפני שאראה לך את הדרך לשם..</div>


</>


}
export default SecondScreen