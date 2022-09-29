import React from 'react';
import { todaysData } from '../data';
import TodaysStats from './TodaysStats';

const TodaysOverview = () => {
  return (
    <div className="">
      <h2 className="mx-auto my-4 max-w-[300px] font-bold text-darkGraylistBlue dark:text-white sm:max-w-[650px] lg:max-w-[1300px]">
        Overview - Today
      </h2>
      <section className="grid grid-cols-[300px] justify-center gap-4 sm:mx-auto sm:max-w-[650px] sm:grid-cols-2 lg:max-w-[1300px] lg:grid-cols-4">
        {todaysData.map((data, index) => {
          return <TodaysStats key={data.value + index} {...data} />;
        })}
      </section>
    </div>
  );
};

export default TodaysOverview;
