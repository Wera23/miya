import styles from './Photo.module.scss';

interface CirclePhotoTypes {
  image: string;
}

const CirclePhoto: React.FC<CirclePhotoTypes> = ({ image }) => {
  return (
    <div
      className={styles.circlePhoto}
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
};

export default CirclePhoto;
