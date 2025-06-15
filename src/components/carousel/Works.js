import React from 'react';
import styles from './Works.module.css';

const InfiniteCarousel = () => {
  // דוגמת תמונות - החלף בתמונות שלך
  const images = [
    'https://picsum.photos/400/600?random=1',
    'https://picsum.photos/400/600?random=2',
    'https://picsum.photos/400/600?random=3',
    'https://picsum.photos/400/600?random=4',
    'https://picsum.photos/400/600?random=5',
    'https://picsum.photos/400/600?random=6',
    'https://picsum.photos/400/600?random=7',
    'https://picsum.photos/400/600?random=8',
    'https://picsum.photos/400/600?random=9',
    'https://picsum.photos/400/600?random=10',
    'https://picsum.photos/400/600?random=11',
    'https://picsum.photos/400/600?random=12',
    'https://picsum.photos/400/600?random=13',
    'https://picsum.photos/400/600?random=14',
    'https://picsum.photos/400/600?random=15'
  ];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          {/* הרצועה הראשונה */}
          {images.map((image, index) => (
            <div key={`first-${index}`} className={styles.imageContainer}>
              <img 
                src={image} 
                alt={`Image ${index + 1}`} 
                className={styles.carouselImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.imageNumber}>{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
          {/* הרצועה השנייה (לאנימציה אינסופית) */}
          {images.map((image, index) => (
            <div key={`second-${index}`} className={styles.imageContainer}>
              <img 
                src={image} 
                alt={`Image ${index + 1}`} 
                className={styles.carouselImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.imageNumber}>{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* אינדיקטור התקדמות */}
      <div className={styles.progressIndicator}>
        <div className={styles.progressBar}></div>
      </div>
      
      {/* כותרת דקורטיבית */}
      <div className={styles.carouselTitle}>
        <h2>מגלריית התמונות שלי</h2>
        <div className={styles.titleUnderline}></div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;