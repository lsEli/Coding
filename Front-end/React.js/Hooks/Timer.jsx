// User Effect is a hook that allows you to perform side effects in function components
// Use State is a hook that allows you to have state variables in functional components
import React, { useEffect, useState } from 'react'; // import React, { Component } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0); // state = { seconds: 0 };

  useEffect(() => { // componentDidMount() {
    const timer = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => { // componentWillUnmount() {
      clearInterval(timer);
    };
  }, []);

  return <div>Seconds: {seconds}</div>;
}