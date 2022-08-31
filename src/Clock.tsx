import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

const Clock = () => {
  const [time, setTime] = useState([]);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    axios.get('http://worldtimeapi.org/api/timezone/America/Mexico_City')
      .then(function (response) {
        setTime(response.data.datetime);
        console.log(response.data.datetime);
        
        setHour(time && time[11] + time[12]);
        setMin(time && time[14] + time[15]);
        setSec(time && time[17] + time[18]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [sec, time]);

  return (
    <div className="clock">
      <div
        className="hour_hand"
        style={{
          transform: `rotateZ(${hour * 30}deg)`,
        }}
      />
      <div
        className="min_hand"
        style={{
          transform: `rotateZ(${min * 6}deg)`,
        }}
      />
      <div
        className="sec_hand"
        style={{
          transform: `rotateZ(${sec * 6}deg)`,
        }}
      />
      <span className="twelve">12</span>
      <span className="one">1</span>
      <span className="two">2</span>
      <span className="three">3</span>
      <span className="four">4</span>
      <span className="five">5</span>
      <span className="six">6</span>
      <span className="seven">7</span>
      <span className="eight">8</span>
      <span className="nine">9</span>
      <span className="ten">10</span>
      <span className="eleven">11</span>
    </div>
  );
};

export default Clock;
