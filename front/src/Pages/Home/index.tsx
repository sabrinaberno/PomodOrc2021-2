import { useState, useEffect } from "react";
import "./styles.css";
import { ReactComponent as MenuIcon } from "../../Assets/Icons/menu_black_24dp.svg";
import { ReactComponent as PlayIcon } from "../../Assets/Icons/play_arrow_black_24dp.svg";
import { ReactComponent as SkipIcon } from "../../Assets/Icons/skip_next_black_24dp.svg";
import { ReactComponent as ResetIcon } from "../../Assets/Icons/refresh_black_24dp.svg";
import { ReactComponent as PauseIcon } from "../../Assets/Icons/pause_black_24dp (1).svg";
import { ReactComponent as CloseIcon } from "../../Assets/Icons/close_black_24dp.svg";

import Sidebar from "../../Components/Sidebar";

const Home = () => {
  
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(4);
  const [startTimer, setStartTimer] = useState(false);
  const [pause, setPause] = useState(false);
  const [reset, setReset] = useState(false);
  const [step, setStep] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  // const [skip, setSkip] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar)
    console.log(sidebar)
  }

  const handleTime = () => {
    if (pause) {
      setPause(false);
      return;
    }
    setStartTimer(true);
    if (seconds === 0) {
      if (minutes === 0) {
        pauseTimer();
        if (step === 7) {
          setMinutes(0);
          setSeconds(4);
          setStep(0);
        } else {
          if (step % 2 === 0) {
            if (step !== 6) {
              setMinutes(0);
              setSeconds(2);
              setStep(step + 1);
            } else {
              setMinutes(0);
              setSeconds(15);
              setStep(step + 1);
            }
          } else {
            setMinutes(0);
            setSeconds(4);
            setStep(step + 1);
          }
        }
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
    if (step === 7) {
      setTimeout(() => {
        setMinutes(0);
        setSeconds(15);
        setReset(false);
      }, 1000);
    } else {
      if (step % 2 === 0) {
        if (step !== 6) {
          setTimeout(() => {
            setMinutes(0);
            setSeconds(4);
            setReset(false);
          }, 1000);
        } else {
          setTimeout(() => {
            setMinutes(0);
            setSeconds(4);
            setReset(false);
          }, 1000);
        }
      } else {
        setTimeout(() => {
          setMinutes(0);
          setSeconds(2);
          setReset(false);
        }, 1000);
      }
    }
  };

  const skipTimer = () => {
    if(startTimer) {
      setPause(true);
      setTimeout(() => {
        setMinutes(0);
        setSeconds(0);
      }, 1000);
    }else{
      setPause(false);
      setStartTimer(true);
      setTimeout(() => {
        setMinutes(0);
        setSeconds(0);
      }, 1000);
    }  
  } 

  useEffect(() => {
    if (startTimer) {
      handleTime();
    }
  }, [seconds]);

  const title = "POMOD'ORC";
  const shortBreak = "Pausa curta";
  const longBreak = "Pausa longa";
  
  return (
    <>
      <div className="container-global">
        <div className={sidebar ? 'sidebarOpen' : 'sidebarClosed' }>
           <Sidebar />
        </div>
        <div className="container-btn">
          <div className="btn-sidebar" onClick={showSidebar}>
            {
              sidebar ? <CloseIcon className="close-icon" /> :
              <MenuIcon className="menu-icon" />
            }
            <input type="checkbox" id="check"/>
          </div>
        </div>
        <div className={sidebar ? 'container-texts-open' : 'container-texts-closed'}>
          <div className="pomodorc-text">
            {`${
              step % 2 === 0
                ? `${title}`
                : `${step !== 7 ? `${shortBreak}` : `${longBreak}`}`
            }`}
          </div>
          <div className="timer-text">{`${
            reset ? "00" : minutes < 10 ? `0${minutes}` : minutes
          } : ${reset ? "00" : seconds < 10 ? `0${seconds}` : seconds}`}</div>
          <div className="ctn-btn-icons">
            <div className="btn-reset">
              <ResetIcon className="reset-icon" onClick={resetTimer} />
            </div>
            <div className="btn-play-pause"
              onClick={startTimer ? pauseTimer : handleTime}
            >
              {
                startTimer ? 
                <PauseIcon className='pause-icon' /> :
                <PlayIcon className="play-icon" />
              }
              
            </div>
            <div className="btn-skip">
              <SkipIcon className="skip-icon" onClick={skipTimer}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
