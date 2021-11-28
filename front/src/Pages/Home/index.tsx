import { useState, useEffect } from "react";
import "./styles.css";
import { ReactComponent as MenuIcon } from "../../Assets/Icons/menu_black_24dp.svg";
import { ReactComponent as PlayIcon } from "../../Assets/Icons/play_arrow_black_24dp.svg";
import { ReactComponent as SkipIcon } from "../../Assets/Icons/skip_next_black_24dp.svg";
import { ReactComponent as ResetIcon } from "../../Assets/Icons/refresh_black_24dp.svg";

const Home = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(4);
  const [startTimer, setStartTimer] = useState(false);
  const [pause, setPause] = useState(false);
  const [reset, setReset] = useState(false);
  const [step, setStep] = useState(0);

  const handleTime = () => {
    if (pause) {
      setPause(false);
      return;
    }
    setStartTimer(true);
    if (seconds === 0) {
      if (minutes === 0) {
        if(step === 7){
          setMinutes(0);
          setSeconds(4);
          setStep(0);
        }else{
          if (step % 2 === 0) {
            if (step !== 6) {
              setMinutes(0);
              setSeconds(2);
              setStep(step + 1);
            } else {
              setMinutes(0);
              setSeconds(15);
              setStep(step+1);
            }
          } else {
            setMinutes(0);
            setSeconds(4);
            setStep(step + 1); 
          }
        } 
        setPause(true);
        return;
      } else {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    } else {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    setPause(false);
    setStartTimer(false);
  };

  const resetTimer = () => {
    pauseTimer();
    setReset(true);
    setTimeout(() => {
      setMinutes(1);
      setSeconds(10);
      setReset(false);
    }, 1000);
  };

  useEffect(() => {
    if (startTimer) {
      handleTime();
    }
  }, [seconds]);

  const title = "POMODO'ORC";
  const shortBreak = "Pausa curta";
  const longBreak = "Pausa longa";

  return (
    <>
      <div className="container-global">
        <div className="container-btn">
          {/* <Sidebar /> */}
          <div className="btn-sidebar">
            <MenuIcon className="menu-icon" />
          </div>
        </div>
        <div className="container-texts" >
          <div className="pomodorc-text">
            
            {`${
              step %2===0? `${title}`: `${step !== 7 ? `${shortBreak}` : longBreak}`}`}
          </div>
          <div className="timer-text">{`${
            reset ? "00" : minutes < 10 ? `0${minutes}` : minutes
          } : ${reset ? "00" : seconds < 10 ? `0${seconds}` : seconds}`}</div>
          <div className="ctn-btn-icons">
            <button className="btn-reset">
              <ResetIcon className="reset-icon" onClick={resetTimer} />
            </button>
            <button
              className="btn-play"
              onClick={startTimer ? pauseTimer : handleTime}
            >
              <PlayIcon className="play-icon" />
            </button>
            <button className="btn-skip">
              <SkipIcon className="skip-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
