export type Subscription = {
  id: number;
  app: string;
  icon: string; // URL or component for app icon
  amount: number;
  nextPaymentDate: string;
  totalPaid: number;
  totalSince: string;
  dayOfMonth: number; // e.g. 30 for the 30th of each month
  color: string;
  right: string;
  left: string;
};

export const subscriptionData: Subscription[] = [
  {
    id: 1,
    icon: "/linear.svg",
    app: "Linear",
    amount: 6.99,
    nextPaymentDate: "Every 02th",
    totalSince: "2022-01-08",
    totalPaid: 83.88,
    dayOfMonth: 2,
    color: "rgb(94, 106, 210)",
    right: 'auto',
    left: 'auto',
  },
  {
    id: 2,
    icon: "/netflix.svg",
    app: "Netflix",
    amount: 4.33,
    nextPaymentDate: "Every 07th",
    totalSince: "2021-01-01",
    totalPaid: 52,
    dayOfMonth: 7,
    color: "rgb(229, 9, 20)",
    right: 'auto',
    left: 'auto',
  },
  {
    id: 3,
    icon: "/supabase.svg",
    app: "Supabase",
    amount: 7.99,
    nextPaymentDate: "Every 11th",
    totalSince: "20''-01-01",
    totalPaid: 95.88,
    dayOfMonth: 11,
    color: "rgb(62, 207, 142)",
    right: '0',
    left: 'auto',
  },
  {
    id: 4,
    icon: "/jetbrains.svg",
    app: "Jetbrains",
    amount: 5.99,
    nextPaymentDate: "Every 12th",
    totalSince: "20''-05-03",
    totalPaid: 71.88,
    dayOfMonth: 12,
    color: "rgb(255, 255, 255)",
    right: 'auto',
    left: '0',
  },
  {
    id: 5,
    icon: "/spotify.svg",
    app: "Spotify",
    amount: 2.99,
    nextPaymentDate: "Every 15th",
    totalSince: "20''-01-01",
    totalPaid: 35.88,
    dayOfMonth: 15,
    color: "rgb(29, 185, 84)",
    right: 'auto',
    left: 'auto',
  },
  {
    id: 6,
    icon: "/linkedin.svg",
    app: "Linkedin",
    amount: 8.99,
    nextPaymentDate: "Every 24th",
    totalSince: "2022-11-01",
    totalPaid: 107.88,
    dayOfMonth: 24,
    color: "rgb(0, 119, 181)",
    right: '0',
    left: 'auto',
  },
  {
    id: 7,
    icon: "/make.svg",
    app: "Make",
    amount: 2.99,
    nextPaymentDate: "Every 27th",
    totalSince: "20''-01-01",
    totalPaid: 35.88,
    dayOfMonth: 27,
    color: "rgb(109, 12, 204)",
    right: 'auto',
    left: '0',
  },
  {
    id: 8,
    icon: "/amazon.svg",
    app: "Amazon",
    amount: 3.45,
    nextPaymentDate: "Every 30th",
    totalSince: "20''-01-01",
    totalPaid: 41.5,
    dayOfMonth: 30,
    color: "rgb(255, 153, 0)",
    right: '',
    left: 'auto',
  },
];
