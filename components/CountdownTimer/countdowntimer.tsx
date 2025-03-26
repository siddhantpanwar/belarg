"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export default function CountdownTimer({ targetDate, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        // Timer has expired
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    // Calculate immediately
    calculateTimeLeft();
    
    // Set up interval to update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  // Format numbers to always have two digits
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 text-center w-full max-w-md mx-auto ${className}`}>
      <div className="bg-[var(--accent)]/10 px-2 sm:px-4 md:px-6 py-2 sm:py-3 rounded shadow-sm hover:shadow transition-all">
        <h2 className="block text-xl sm:text-2xl md:text-3xl font-bold text-[#D4A017]">{formatNumber(timeLeft.days)}</h2>
        <p className="text-[10px] sm:text-xs uppercase tracking-wider">Days</p>
      </div>
      <div className="bg-[var(--accent)]/10 px-2 sm:px-4 md:px-6 py-2 sm:py-3 rounded shadow-sm hover:shadow transition-all">
        <h2 className="block text-xl sm:text-2xl md:text-3xl font-bold text-[#D4A017]">{formatNumber(timeLeft.hours)}</h2>
        <p className="text-[10px] sm:text-xs uppercase tracking-wider">Hours</p>
      </div>
      <div className="bg-[var(--accent)]/10 px-2 sm:px-4 md:px-6 py-2 sm:py-3 rounded shadow-sm hover:shadow transition-all">
        <h2 className="block text-xl sm:text-2xl md:text-3xl font-bold text-[#D4A017]">{formatNumber(timeLeft.minutes)}</h2>
        <p className="text-[10px] sm:text-xs uppercase tracking-wider">Minutes</p>
      </div>
      <div className="bg-[var(--accent)]/10 px-2 sm:px-4 md:px-6 py-2 sm:py-3 rounded shadow-sm hover:shadow transition-all">
        <h2 className="block text-xl sm:text-2xl md:text-3xl font-bold text-[#D4A017]">{formatNumber(timeLeft.seconds)}</h2>
        <p className="text-[10px] sm:text-xs uppercase tracking-wider">Seconds</p>
      </div>
    </div>
  );
}