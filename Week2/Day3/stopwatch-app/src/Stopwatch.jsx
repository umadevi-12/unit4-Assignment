import React,{useEffect,useRef,useState} from "react";
import './App.css';

const Stopwatch = () =>{
    const [seconds , setSeconds] = useState(0);
    const [isRunning , setIsRunning] = useState(false);
    const [targetTime , setTargetTime] = useState(10);
    const intervalRef = useRef(null);
    const hasPlayedRef = useRef(false);
    const audio = useRef(new Audio('https://www.soundjay.com/button/beep-07.mp3'));
    useEffect(() =>{
        if(isRunning){
            intervalRef.current = setInterval(() =>{
                setSeconds((prev) => prev+1);
            },1000);
        }
        return () => clearInterval(intervalRef.current)
    },[isRunning]);

    useEffect (() =>{
        if(seconds >= targetTime &&  !hasPlayedRef.current){
            try{
                audio.current.play();
            }
            catch{
                console.log('Target timr reached')
            }
            hasPlayedRef.current = true;
        }
    },[seconds,targetTime])

const start = () =>{
    setIsRunning(false);
    clearInterval(intervalRef.current);
}
const stop = () =>{
    setIsRunning (false);
    clearInterval(intervalRef.current);
};

const reset = () =>{
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setSeconds(0);
    hasPlayedRef.current = false;
}
const handleTargetChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setTargetTime(isNaN(val) ? 10 : val);
  };

  return (
    <div className="stopwatch-container">
      <h1>⏱ React Stopwatch</h1>
      <p className="timer-display">{seconds}s</p>

      <div className="controls">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="input-group">
        <label>Target Time (seconds): </label>
        <input
          type="number"
          value={targetTime}
          onChange={handleTargetChange}
          min="1"
        />
      </div>
    </div>
  );
};

export default Stopwatch;