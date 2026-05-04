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

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
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

    return () => clearInterval(timer); // Limpieza al desmontar
  }, [targetDate]);

  return (
    <div className="main">
      <div className="countdown">
        <h1>Próximamente</h1>
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
    </div>
  );
}

export default Main;
