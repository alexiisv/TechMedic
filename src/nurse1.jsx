import { useState, useEffect } from 'react';
import './App.css';
import beepGreen from './assets/sonidos/sonido3.mp3';
import beepBlue from './assets/sonidos/sonido4.mp3';
import beepYellow from './assets/sonidos/sonido5.mp3';

export function Card({ children, userName, initialIsFollowing, number }) {
  const [seconds, setSeconds] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  const [blinkColor, setBlinkColor] = useState('');
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const formatTime = (secs) => {
    const hours = String(Math.floor(secs / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const seconds = String(secs % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleBlink = (color, soundFile, playOnce = false) => {
    if (isBlinking && blinkColor === color) {
      // Detener parpadeo y cronómetro
      setIsBlinking(false);
      clearInterval(intervalId);
      setIntervalId(null);
      setSeconds(0);
      setBlinkColor('');
    } else {
      // Iniciar parpadeo con color seleccionado y reiniciar cronómetro
      setIsBlinking(true);
      setBlinkColor(color);
      setSeconds(0);
      clearInterval(intervalId);

      if (playOnce) {
        new Audio(soundFile).play(); // Sonido solo una vez para verde y amarillo
      }

      // Iniciar cronómetro en todos los casos
      const id = setInterval(() => {
        setSeconds(prev => prev + 1);
        if (!playOnce) {
          new Audio(soundFile).play(); // Sonido constante para azul
        }
      }, 1000);
      setIntervalId(id);
    }
  };

  return (
    <article className={`card-container ${isBlinking ? `blinking ${blinkColor}` : ''}`}>
      <div className="card-number">{number}</div>
      <div className="card-content">
        <strong className="card-title">{children}</strong>
        <div className="card-timer">{formatTime(seconds)}</div>
        <div className="card-status-bar">
          <div className="status-box active"></div>
          <div className="status-box"></div>
          <div className="status-box"></div>
          <div className="status-box"></div>
          <div className="status-box"></div>
        </div>
        <div className="buttons-container">
          <button onClick={() => handleBlink('green', beepGreen, true)} className={`blink-button green ${blinkColor === 'green' ? 'active' : ''}`}>
            {isBlinking && blinkColor === 'green' ? 'Detener' : 'Parpadear Verde'}
          </button>
          <button onClick={() => handleBlink('blue', beepBlue, false)} className={`blink-button blue ${blinkColor === 'blue' ? 'active' : ''}`}>
            {isBlinking && blinkColor === 'blue' ? 'Detener' : 'Parpadear Azul'}
          </button>
          <button onClick={() => handleBlink('yellow', beepYellow, true)} className={`blink-button yellow ${blinkColor === 'yellow' ? 'active' : ''}`}>
            {isBlinking && blinkColor === 'yellow' ? 'Detener' : 'Parpadear Amarillo'}
          </button>
        </div>
      </div>
    </article>
  );
}
