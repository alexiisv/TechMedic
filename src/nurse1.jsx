import { useState, useEffect, use } from 'react';
import './App.css';
import beepGreen from './assets/sonidos/sonido3.mp3';
import beepBlue from './assets/sonidos/sonido4.mp3';
import beepYellow from './assets/sonidos/sonido5.mp3';
import { FaStopwatch, FaMars, FaVenus } from "react-icons/fa"; /* para iconos */


export function Card({ children, userName, initialIsFollowing, number }) {
  const [seconds, setSeconds] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  const [blinkColor, setBlinkColor] = useState('');
  const [intervalId, setIntervalId] = useState(null);
  const [icono, setIcono] = useState(null);
  const [imagen, setImage] = useState(null);
  const [colorMarco, setColorMarco] = useState("border-black")
  const [isRunning, setIsRunning] = useState(false);


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
      setIsRunning(false);
    } else {
      // Iniciar parpadeo con color seleccionado y reiniciar cronómetro
      setIsBlinking(true);
      setBlinkColor(color);
      setSeconds(0);
      clearInterval(intervalId);
      setIsRunning(true);

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

  let getTimerColor = (secs) => {
    if (secs < 3) return "text-green-500"; // Verde
    if (secs < 5) return "text-yellow-500"; // Amarillo
    if (secs < 90) return "text-blue-500"; // Azul
    return "text-red-500"; // Rojo
  };

  return (

    <article className={`card-container ${isBlinking ? `blinking ${blinkColor}` : ''} ${colorMarco}`}>
      {/* <div className="card-number">{number}</div> */}
      <div className="card-number-2">{number}</div>
      <div className={`image ${colorMarco === "border-black" ? "red" : ""}`}>
        {imagen && <img src={imagen} alt=""/>}
      </div>

    {/* <div className={`marco ${colorMarco === "border-black" ? "red" : ""}`}>
      {imagen && <img src={imagen} alt="Persona" className="w-full h-full object-cover rounded-lg" />}
    </div> */}
 


      <div className="card-content" >
        <div  className="card-title"> <strong>{children}</strong></div>
        <div className="card-timer">
          <FaStopwatch className={`card-timer ${getTimerColor(seconds)}`}/>
          {formatTime(seconds)}
          </div>
        <div className="card-status-bar">
          <div className="status-box active"></div>
          <div className="status-box"></div>
          <div className="status-box"></div>
          <div className="status-box"></div>
          <div className="status-box"></div>
          <div className="status-box active2"></div>
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


        <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => setImage("/images/hombre1.png")}
        >
          Mostrar Hombre
        </button>
        <button
          className="px-4 py-2 bg-pink-500 text-white rounded-lg"
          onClick={() => setImage("/images/mujer1.png")}
        >
          Mostrar Mujer
        </button>
      </div>
        </div>

    <button
        className="px-4 py-2 bg-gray-500 text-white rounded-lg mt-2"
        onClick={() =>
          setColorMarco(colorMarco === "border-black" ? "border-red-500" : "border-black")
        }
      >
        Cambiar Color del Marco
      </button>


      </div>
    </article>
  
  );
}
