import Head from 'next/head';
import { useEffect, useState } from 'react';
import SocialMediaStats from '../components/socialMediaStats';
import TodaysOverview from '../components/todaysOverview';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Social Media Dashboard</title>
      </Head>
      <div className={` mx-auto max-w-[1300px] pt-[5%] `}>
        <SocialMediaStats
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <TodaysOverview />
      </div>
    </>
  );
}
