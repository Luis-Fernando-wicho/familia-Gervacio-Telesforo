import { useState, useEffect } from "react";
import "./Main.css";

function Main() {
  const targetDate = new Date("2026-05-29T14:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Estado para saber si el tiempo terminó
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="main">
      {isExpired ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      ) : (
        <div className="countdown">
          <h1>COMING SOON</h1>
          <div className="countdown-container">
            <div className="time-box">
              <span>{timeLeft.days}</span>
              <p>Días</p>
            </div>
            <div className="time-box">
              <span>{timeLeft.hours}</span>
              <p>Horas</p>
            </div>
            <div className="time-box">
              <span>{timeLeft.minutes}</span>
              <p>Minutos</p>
            </div>
            <div className="time-box">
              <span>{timeLeft.seconds}</span>
              <p>Segundos</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
