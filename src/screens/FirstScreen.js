import styles from "./FirstScreen.module.css";
import { useState, useEffect } from 'react';
import einat from "../videos/עינת דהן סרטון פתיחה.mp4"
import einatLeft from "../images/עינת דהן תמונה שמאלית.png"
import einatright from "../images/עינת דהן תמונה ימנית.png"
import Loader from "../components/loader/Loader";

const FirstScreen = () => {
  // Sources - replace with your actual URLs
  const videoSrc = einat; // Portrait video for center
  const leftImageSrc = einatLeft; // Left image
  const rightImageSrc = einatright; // Right image
  
  // State to track if component is mounted
  const [mounted, setMounted] = useState(false);
  
  // State to track if video is loaded
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Effect to set mounted state after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle video load event
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  // Handle button clicks
  const handleWeddingClick = () => {
    // Scroll to wedding section
    document.getElementById('כלות')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleMakeupClick = () => {
    // Scroll to makeup section
    document.getElementById('קורסים')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      {/* Show loader while video is not loaded */}
      {!videoLoaded && <Loader />}
      
      {/* Background media container with video and images */}
      <div className={styles.imageContainer} style={{ display: videoLoaded ? 'flex' : 'none' }}>
        {/* Left Image */}
        <div className={styles.leftImage}>
          <img 
            src={rightImageSrc} 
            alt="עינת דהן שמאל" 
            className={styles.sideImage}
            onError={(e) => {
              console.log("Left image failed to load:", rightImageSrc);
              e.target.style.border = "2px solid red";
            }}
          />
        </div>
        
        {/* Center Video */}
        <div className={styles.centerImage}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className={styles.backgroundVideo}
            onLoadedData={handleVideoLoad}
            onCanPlay={handleVideoLoad}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        
        {/* Right Image */}
        <div className={styles.rightImage}>
          <img 
            src={leftImageSrc} 
            alt="עינת דהן ימין" 
            className={styles.sideImage}
            onError={(e) => {
              console.log("Right image failed to load:", leftImageSrc);
              e.target.style.border = "2px solid red";
            }}
          />
        </div>
      </div>
      
      {/* Content box (glass effect) - only show when video is loaded */}
      {videoLoaded && (
        <div className={styles.contentBox}>
          <h1 className={styles.title}>EINAT DAHAN</h1>
          <div className={styles.subTitle}>בית ספר לאיפור || איפור ושיער לכלות</div>
          <div className={styles.buttonContainer}>
            <button 
              className={styles.button} 
              onClick={handleMakeupClick}>
              אני רוצה ללמוד איפור
            </button>
            <button 
              className={styles.button} 
              onClick={handleWeddingClick}
            >
              אני מתחתנת בקרוב
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstScreen;