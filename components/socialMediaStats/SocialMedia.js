import React from 'react';
import Image from 'next/image';
import upIcon from '../../public/icon-up.svg';
import downIcon from '../../public/icon-down.svg';

const SocialMedia = ({
  icon,
  username,
  currentFans,
  dailyChange,
  fansName,
  borderTop,
}) => {
  return (
    <article className={`${borderTop} rounded-md pt-1`}>
      <div className="h-full rounded-md bg-lightGrayishBlue p-4 text-center dark:bg-darkDesaturatedBlue">
        <div className="flex items-center justify-center gap-2">
          <Image src={icon} layout="fixed" />
          <p className="text-sm font-bold text-darkGraylistBlue dark:text-desaturatedBlue">
            {username}
          </p>
        </div>
        <h2 className="my-4 text-4xl font-bold text-veryDarkBlue dark:text-white">
          {currentFans}
        </h2>
        <p className="my-4 uppercase tracking-[3px] text-darkGraylistBlue dark:text-desaturatedBlue">
          {fansName}
        </p>
        <div className="flex items-center justify-center gap-1">
          <Image src={dailyChange >= 0 ? upIcon : downIcon} layout="fixed" />
          <p
            className={`relative -top-[2px] text-sm font-bold ${
              dailyChange >= 0 ? ' text-limeGreen ' : ' text-brightRed '
            }`}
          >
            {Math.abs(dailyChange)} Today
          </p>
        </div>
      </div>
    </article>
  );
};

export default SocialMedia;
