import React, { useEffect, useState } from "react";
import styles from "../Auction/Timer.module.css";

export default function Timer({
  realSeconds
  // seconds,
  // setSeconds,
  // currentSession,
  // bidders,
  // setPriceOpen,
  // bidCount,
  // setCelebrity,
  // setNonCelebrity,
  // sellerCheck,
  // setTimerOpen,
  // setSellerCheck,
}) {
  const sendCount = () => {
    currentSession
      .signal({
        data: seconds,
        type: "timer",
      })
      .then(() => {
        console.log("timer send")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // useEffect(() => {
  //   if (seconds > 0) {
  //     sendCount();
  //   }
  // }, [seconds])
                                             
  // useEffect(() => {
  //   if (seconds > 0) {
  //     setTimerOpen(true);
  //     setSellerCheck(true);
  //     sendCount();
  //   }
  //   const countdown = setInterval(() => {
  //     if (seconds > 0) {
  //       setSeconds((prevSeconds) => {
  //         return prevSeconds - 1;
  //       });
  //     }
  //     // 0이 되면 카운트가 멈춤
  //     if (seconds === 0) {
  //       clearInterval(countdown);
  //       setTimerOpen(false);

  //       if (bidders === 0 && sellerCheck) {
  //         setNonCelebrity(true);
  //       }
  //       if (bidders === 1) {
  //         setCelebrity(true);
  //       }
  //       if (bidders >= 1) {
  //         setPriceOpen(true);
  //       }
  //       if (bidCount > 0) {
  //         setCelebrity(true);
  //       }
  //     }
  //   }, 1000);
  //   return () => clearInterval(countdown);
  // }, [seconds]);

  return (
    <div className={styles.timer}>
      <span className={styles.count}>{realSeconds}</span>
    </div>
  );
}
