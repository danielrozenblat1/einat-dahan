import React, { useRef } from 'react';
import styles from './Parrlalex.module.css';
import einat from "../../videos/עינת דהן כלות 1.mp4"
import einat2 from "../../videos/עינת דהן כלות 2.mp4"
import Button from '../button/Button';

const SimpleVideoGallery = () => {
  const videoRefs = [useRef(null), useRef(null)];

  const videos = [
    {
      id: 1,
      videoSrc: einat
    },
    {
      id: 2,
      videoSrc: einat2
    }
  ];

  return (
    <div className={styles.container}>
      {/* כותרת */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
וזו התוצאה 
        </h1>
      </div>

      {/* קונטיינר הווידאואים */}
      <div className={styles.videosContainer}>
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={styles.videoWrapper}
          >
            <video
              ref={videoRefs[index]}
              className={styles.videoElement}
              muted
              loop
              playsInline
              autoPlay
            >
              <source src={video.videoSrc} type="video/mp4" />
              הדפדפן שלך לא תומך בתגית וידאו.
            </video>
          </div>
        ))}
      </div>
      <Button text="עינת בואי נשריין תאריך!"/>
    </div>
  );
};

export default SimpleVideoGallery;