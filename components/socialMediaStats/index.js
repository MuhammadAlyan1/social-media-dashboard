import React from 'react';
import { SocialMediaFansData } from '../data';
import SocialMedia from './SocialMedia';

const SocialMediaStats = ({ isDarkMode, setIsDarkMode }) => {
  const totalFans = SocialMediaFansData.reduce((acc, curr) => {
    return acc + curr.currentFans;
  }, 0);

  const toggleDarkMode = (isDarkMode, setIsDarkMode) => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <main>
      <div className="mx-auto max-w-[300px] sm:max-w-[650px] lg:max-w-[1300px] ">
        <h1 className="text-2xl text-veryDarkBlue dark:text-white">
          Social Media Dashboard
        </h1>
        <p className="mb-4 border-b border-b-slate-300 pb-4 font-bold text-darkGraylistBlue dark:text-desaturatedBlue lg:border-b-0">
          Total Followers: {totalFans}
        </p>

        <label
          for="default-toggle"
          className="relative mb-4 inline-flex cursor-pointer items-center"
        >
          <input
            type="checkbox"
            id="default-toggle"
            className="peer sr-only"
            checked={isDarkMode}
            onChange={() => toggleDarkMode(isDarkMode, setIsDarkMode)}
          />
          <div className="peer h-6 w-11 rounded-full bg-slate-700 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-green-600 dark:peer-focus:ring-blue-800"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Dark Mode
          </span>
        </label>
      </div>
      <section className="grid grid-cols-[300px] justify-center gap-4 sm:mx-auto sm:max-w-[650px] sm:grid-cols-2 lg:max-w-[1300px] lg:grid-cols-4">
        {SocialMediaFansData.map((data, index) => {
          return <SocialMedia key={data.username + index} {...data} />;
        })}
      </section>
    </main>
  );
};

export default SocialMediaStats;
