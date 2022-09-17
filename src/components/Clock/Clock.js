import React, { useEffect, useState } from "react";
import "./Clock.scss";
import Loader from "../Loader/Loader";

const Clock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [dayWeek, setDayWeek] = useState();
  const [dayMonth, setDayMonth] = useState();
  const [months, setMonths] = useState();
  const [years, setYears] = useState();
  const daysOfWeek = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  const monthsOfYear = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let weekDay = date.getUTCDay();
      let month = date.getMonth();
      let day = date.getDate();
      let year = date.getFullYear();
      setDayWeek(weekDay);
      setMinutes(minute);
      setHours(hour);
      setMonths(month);
      setDayMonth(day);
      setYears(year);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="clock-container">
      {!isLoading && (
        <div>
          <p id="hour">
            {hours > 9 ? hours : `0${hours}`}:
            {minutes > 9 ? minutes : `0${minutes}`}
          </p>
          <p id="date">
            {daysOfWeek[dayWeek]}, {dayMonth} de {monthsOfYear[months]} de{" "}
            {years}
          </p>
        </div>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default Clock;
