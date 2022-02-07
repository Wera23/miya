import React, { useRef } from 'react';
import { Lottie, ReactLottieConfig } from '@crello/react-lottie';
import { AnimationItem } from 'lottie-web';

import { spinner } from '../../assets/animations';
import styles from './Animation.module.scss';

export const AnimationSpinner: React.FC<{ height?: string }> = () => {
  const animRef = useRef<AnimationItem>({} as AnimationItem);
  const defaultOptions: ReactLottieConfig = {
    animationData: spinner,
    loop: false,
    autoplay: false,
  };

  return (
    <div className={styles.animation}>
      <Lottie animationRef={animRef} config={defaultOptions} width={'100px'} />
    </div>
  );
};
