import React from 'react';
// styles
import styles from './Tile.module.css';
// components
import { Subtitle } from '../Subtitle/Subtitle';
import { Paragraph } from '../Paragraph/Paragraph';

export const Tile: React.FC = () => {
  return (
    <div className={styles.tile}>
      <div className={styles.front}>
        <img
          src={'https://www.planetware.com/photos-large/SEY/best-islands-maldives.jpg'}
          alt={'demo image'}
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles.back}>
        <Subtitle text={'Demo text'} />
        <Paragraph
          text={
            'Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida.'
          }
        />
      </div>
    </div>
  );
};
