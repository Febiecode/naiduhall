import React, { useState, useEffect } from 'react';

interface Event {
  date: string;
  text: string;
}

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventText, setEventText] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());

  // Load events from localStorage on component mount
  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  // Save events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  const handleAddEvent = () => {
    if (eventText && selectedDate) {
      setEvents([...events, { date: selectedDate, text: eventText }]);
      setEventText('');
    }
  };

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const getShortDayName = (dayIndex: number) => {
    return dayNames[dayIndex];
  };

  const isDayWithEvent = (day: number) => {
    return events.some((event) => {
      const [eventYear, eventMonth, eventDay] = event.date.split('-').map(Number);
      return eventYear === year && eventMonth === month + 1 && eventDay === day;
    });
  };

  const filteredEvents = events.filter((event) => {
    const [eventYear, eventMonth] = event.date.split('-').map(Number);
    return eventYear === year && eventMonth === month + 1;
  });

  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const headers = dayNames.map((dayName) => (
    <div key={dayName} className="flex items-center justify-center p-2 bg-gray-200 border">
      {dayName}
    </div>
  ));

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-3xl font-semibold mb-4">
        {new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}
      </h1>
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Enter event text"
          value={eventText}
          onChange={(e) => setEventText(e.target.value)}
        />
      </div>
      <div className="flex justify-between mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddEvent}>
          Add Event
        </button>
        <div>
          <button className="mr-2" onClick={prevMonth}>
            Prev
          </button>
          <button onClick={nextMonth}>Next</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {headers}
        {Array.from({ length: firstDayOfMonth }, (_, i) => (
          <div key={`empty-${i}`} className="p-4"></div>
        ))}
        {Array.from({ length: daysInMonth(month, year) }, (_, i) => i + 1).map((day) => {
          const hasEvent = isDayWithEvent(day);
          return (
            <div
              key={day}
              className={`flex items-center justify-center p-4 cursor-pointer border ${
                selectedDate === `${year}-${month + 1}-${day}` ? 'bg-blue-200' : ''
              } ${hasEvent ? 'relative' : ''}`}
              onClick={() => handleDateClick(`${year}-${month + 1}-${day}`)}
            >
              {day}
              {hasEvent && <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>}
            </div>
          );
        })}
      </div>
      <div className="mt-4 h-40 overflow-y-auto">
        <h2 className="text-lg font-semibold">Events</h2>
        <ul>
          {filteredEvents.map((event, index) => (
            <li key={index}>
              {event.date}: {event.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
