import styles from './BoxNew.module.css';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className={styles.card}>
      <img 
        src={imageSrc} 
        alt={title}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;