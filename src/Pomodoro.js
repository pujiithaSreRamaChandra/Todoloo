import { useState } from "react";

    const Pomodoro = () => {

        //welcome- text transition
        const pomodoroWelcome = () => {
        var element = document.getElementsByClassName(".clockStartBtn");
        element.style.display = 'none';
        }

        var [instruction, setInstruction] = useState('Click start to Begin!'); 


    return (
        <div className="pomodoro-timer"> 
        <div className="pomodoro">
            
            <div className="pomodoro-before-text">
              <h1>Pomodoro Timer</h1>
              <p className="pomodoro-instruction">{ instruction }</p>
            </div>
            
            <div className="clock">
                <div className="hour-one"><h1 className="clock-box">0</h1></div>
                <div className="hour-two "><h1 className="clock-box">0</h1></div>
                <div className="clock-space"><h1 className="clock-box">:</h1></div>
                <div className="minute-one "><h1 className="clock-box">0</h1></div>
                <div className="minute-two "><h1 className="clock-box">0</h1></div>
                <div className="clock-space "><h1 className="clock-box">:</h1></div>
                <div className="second-one "><h1 className="clock-box">0</h1></div>
                <div className="second-two "><h1 className="clock-box">0</h1></div>
            </div>

            <div className="clock-after-text">
              <button className="clockStartBtn">START</button>
              <p className="pomodoro-text">The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.</p>
            </div>
        </div>
        </div>
     );
}
 
export default Pomodoro;