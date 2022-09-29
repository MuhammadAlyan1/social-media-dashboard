import React from 'react';
import Image from 'next/image';
import upIcon from '../../public/icon-up.svg';
import downIcon from '../../public/icon-down.svg';

const TodaysStats = ({ icon, title, value, dailyChange }) => {
  return (
    <section className="rounded-md bg-lightGrayishBlue p-6 dark:bg-darkDesaturatedBlue">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-darkGraylistBlue dark:text-desaturatedBlue">
          {title}
        </h3>
        <Image src={icon} layout="fixed" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-3xl font-bold dark:text-white">{value}</p>
        <div className="flex items-center justify-center gap-1">
          <Image src={dailyChange >= 0 ? upIcon : downIcon} layout="fixed" />
          <p
            className={`relative -top-[2px] text-sm font-bold ${
              dailyChange >= 0 ? ' text-limeGreen ' : ' text-brightRed '
            }`}
          >
            {Math.abs(dailyChange)}% Today
          </p>
        </div>
      </div>
    </section>
  );
};

export default TodaysStats;
