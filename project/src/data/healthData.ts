export interface HealthStatus {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'danger';
  date: string;
  progress: number;
  position?: {
    top: string;
    left: string;
  };
}

export const healthStatus: HealthStatus[] = [
  {
    id: 'heart',
    name: 'Healthy Heart',
    status: 'healthy',
    date: '26 Oct 2021',
    progress: 90,
    position: {
      top: '32%',
      left: '50%',
    },
  },
  {
    id: 'lungs',
    name: 'Lungs',
    status: 'danger',
    date: '26 Oct 2021',
    progress: 70,
  },
  {
    id: 'teeth',
    name: 'Teeth',
    status: 'healthy',
    date: '26 Oct 2021',
    progress: 85,
  },
  {
    id: 'bone',
    name: 'Bone',
    status: 'warning',
    date: '26 Oct 2021',
    progress: 65,
  },
];

export const anatomyIndicators = [
  {
    id: 'heart',
    name: 'Healthy Heart',
    status: 'healthy',
    top: '32%',
    left: '50%',
  },
  {
    id: 'leg',
    name: 'Healthy Leg',
    status: 'healthy',
    top: '80%',
    left: '42%',
  },
];