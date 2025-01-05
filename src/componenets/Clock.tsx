import * as React from 'react';
import {useState, useEffect} from 'react';
import {Card, Text} from 'react-native-paper';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setTimeout(() => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);

      console.log('time', time);
    }, 1000);

    return () => clearInterval(interval);
  });

  let date: Date = new Date();
  // date.setDate(13);
  // date.setMonth(13);
  // date.setFullYear(2013);
  // date.setHours(13);
  // date.setMinutes(13);
  // date.setSeconds(13);
  // console.log('Year = ' + date.getFullYear());
  // console.log('Date = ' + date.getDate());
  // console.log('Month = ' + date.getMonth());
  // console.log('Day = ' + date.getDay());
  // console.log('Hours = ' + date.getHours());
  // console.log('Minutes = ' + date.getMinutes());
  // console.log('Seconds = ' + date.getSeconds());

  return (
    <Card>
      <Card.Content>
        <Text variant="titleLarge">Clock</Text>
        <Text variant="headlineLarge">{currentTime}</Text>
      </Card.Content>
    </Card>
  );
};

export default Clock;
