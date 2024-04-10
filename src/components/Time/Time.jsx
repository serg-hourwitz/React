import React, { useState, useEffect } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Пустий масив залежностей означає, що ефект викликається лише після першого рендерингу компонента

  return (
    <div>
      <h2>It is {currentTime}.</h2>
    </div>
  );
};

export default Time;
