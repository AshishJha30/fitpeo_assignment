export interface Appointment {
  id: string;
  title: string;
  doctor: string;
  time: string;
  date?: string;
  day?: string;
  type: 'dentist' | 'physiotherapy' | 'checkup' | 'ophthalmologist' | 'cardiologist' | 'neurologist';
  icon?: string;
}

export const calendarAppointments: Appointment[] = [
  {
    id: 'app1',
    title: 'Dentist',
    doctor: 'Dr. Cameron Williamson',
    time: '09:00-11:00',
    date: '26 Oct 2021',
    type: 'dentist',
  },
  {
    id: 'app2',
    title: 'Physiotherapy Appointment',
    doctor: 'Dr. Kevin Djones',
    time: '11:00-12:00',
    date: '28 Oct 2021',
    type: 'physiotherapy',
  },
];

export const upcomingAppointments: Appointment[] = [
  {
    id: 'up1',
    title: 'Health checkup complete',
    time: '11:00 AM',
    day: 'Thursday',
    type: 'checkup',
  },
  {
    id: 'up2',
    title: 'Ophthalmologist',
    time: '14:00 PM',
    day: 'Thursday',
    type: 'ophthalmologist',
  },
  {
    id: 'up3',
    title: 'Cardiologist',
    time: '12:00 AM',
    day: 'Saturday',
    type: 'cardiologist',
  },
  {
    id: 'up4',
    title: 'Neurologist',
    time: '16:00 PM',
    day: 'Saturday',
    type: 'neurologist',
  },
];