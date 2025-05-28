export interface Day {
  date: number;
  day: string;
  isToday?: boolean;
  appointments: TimeSlot[];
}

export interface TimeSlot {
  time: string;
  isBooked: boolean;
  type?: 'primary' | 'secondary';
}

export const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

export const octCalendar: Day[] = [
  {
    date: 25,
    day: 'Mon',
    appointments: [
      { time: '10:00', isBooked: true, type: 'primary' },
      { time: '11:00', isBooked: true, type: 'primary' },
      { time: '12:00', isBooked: true, type: 'primary' },
    ],
  },
  {
    date: 26,
    day: 'Tues',
    appointments: [
      { time: '08:00', isBooked: true, type: 'primary' },
      { time: '09:00', isBooked: true, type: 'primary' },
      { time: '10:00', isBooked: true, type: 'secondary' },
    ],
  },
  {
    date: 27,
    day: 'Wed',
    appointments: [
      { time: '12:00', isBooked: true, type: 'primary' },
      { time: '13:00', isBooked: true, type: 'secondary' },
    ],
  },
  {
    date: 28,
    day: 'Thurs',
    isToday: true,
    appointments: [
      { time: '10:00', isBooked: true, type: 'primary' },
      { time: '11:00', isBooked: true, type: 'secondary' },
    ],
  },
  {
    date: 29,
    day: 'Fri',
    appointments: [
      { time: '14:00', isBooked: true, type: 'primary' },
      { time: '15:00', isBooked: true, type: 'primary' },
      { time: '16:00', isBooked: true, type: 'secondary' },
    ],
  },
  {
    date: 30,
    day: 'Sat',
    appointments: [
      { time: '09:00', isBooked: true, type: 'primary' },
      { time: '10:00', isBooked: true, type: 'secondary' },
      { time: '11:00', isBooked: true, type: 'primary' },
    ],
  },
  {
    date: 31,
    day: 'Sun',
    appointments: [
      { time: '12:00', isBooked: true, type: 'secondary' },
    ],
  },
];

export const activityData = {
  weekData: [
    { day: 'Mon', primary: 3, secondary: 1 },
    { day: 'Tues', primary: 1, secondary: 2 },
    { day: 'Wed', primary: 2, secondary: 1 },
    { day: 'Thurs', primary: 3, secondary: 2 },
    { day: 'Fri', primary: 2, secondary: 1 },
    { day: 'Sat', primary: 1, secondary: 3 },
    { day: 'Sun', primary: 2, secondary: 1 },
  ],
  totalAppointments: 3,
};