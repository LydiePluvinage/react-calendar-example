import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './App.css';

function App() {
  const convertDateTimeToDDMMYYY = (dateToConvert) => {
    const dateConverted =
      ('0' + (dateToConvert.getUTCDate() + 1)).slice(-2) +
      '-' +
      ('0' + (dateToConvert.getUTCMonth() + 1)).slice(-2) +
      '-' +
      dateToConvert.getUTCFullYear();
    return dateConverted;
  };

  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString()
  );
  const [showCalendar, setShowCalendar] = useState(false);
  const [sessions, setSessions] = useState([
    '24-12-2021',
    '02-02-2022',
    '05-02-2022',
  ]);

  return (
    <div className="App">
      <div>
        <input
          value={selectedDate}
          onFocus={() => setShowCalendar(true)}
          readOnly
        />
        <Calendar
          className={showCalendar ? '' : 'hide'}
          onChange={(date) => {
            console.log(date.toLocaleDateString());
            console.log(sessions);
            setSelectedDate(moment(date).format('DD-MM-YYYY'));
            setShowCalendar(false);
            setSessions([...sessions, date.toLocaleDateString()]);
          }}
          tileClassName={({ date }) => {
            let b = '';
            if (sessions.find((x) => x === moment(date).format('DD-MM-YYYY'))) {
              b = 'highlight';
            }
            return b;
          }}
        />
      </div>
    </div>
  );
}

export default App;
