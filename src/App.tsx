import { useState } from "react";
import { motion } from "framer-motion";

type Subscription = {
  id: number;
  app: string;
  icon: string; // URL or component for app icon
  amount: number;
  nextPaymentDate: string;
  totalPaid: number;
  cycle: string; // e.g. "monthly"
  dayOfMonth: number; // e.g. 30 for the 30th of each month
  borderColor: string; // Tailwind border color class
};

const subscriptionData: Subscription[] = [
  {
    id: 1,
    app: "Amazon",
    icon: "/icons/amazon.png",
    amount: 3.45,
    nextPaymentDate: "2024-10-30",
    totalPaid: 41.4,
    cycle: "monthly",
    dayOfMonth: 30,
    borderColor: "border-yellow-500",
  },
  {
    id: 2,
    app: "Netflix",
    icon: "/icons/netflix.png",
    amount: 9.99,
    nextPaymentDate: "2024-10-07",
    totalPaid: 120,
    cycle: "monthly",
    dayOfMonth: 7,
    borderColor: "border-red-500",
  },
  {
    id: 3,
    app: "Spotify",
    icon: "/icons/spotify.png",
    amount: 4.99,
    nextPaymentDate: "2024-10-14",
    totalPaid: 59.88,
    cycle: "monthly",
    dayOfMonth: 14,
    borderColor: "border-green-500",
  },
];


const Calendar = () => {
  const daysInMonth = new Array(30).fill(null).map((_, index) => index + 1);
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [hoveredSubscription, setHoveredSubscription] =
    useState<Subscription | null>(null);

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start md:justify-center px-4 py-10 bg-black text-white">
      <div className="relative mx-auto my-10 w-full max-w-lg">
        <div className="w-full flex-col flex gap-4">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-4xl mb-2 font-bold tracking-wider text-zinc-300">
              SS <span className="opacity-50">2024</span>
            </h2>
            <button className="flex flex-col items-end text-white">
              <span className="opacity-50 text-right">Monthly spend</span>
              <span className="text-xl font-semibold">€43.72</span>
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((week) => {
              return (
                <div
                  className="text-xs text-white text-center bg-[#323232] py-1 px-0/5 rounded-xl"
                  key={week}
                >
                  {week}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-7 gap-2">
            <div className="relative flex items-end justify-center py-1 bg-zinc-700/20" style={{height: "4rem", borderRadius: "16px"}}><div className="flex flex-col items-center justify-center"></div></div>
            <div className="relative flex items-end justify-center py-1 bg-zinc-700/20" style={{height: "4rem", borderRadius: "16px"}}><div className="flex flex-col items-center justify-center"></div></div>
            <div className="relative flex items-end justify-center py-1 bg-zinc-700/20" style={{height: "4rem", borderRadius: "16px"}}><div className="flex flex-col items-center justify-center"></div></div>
            {daysInMonth.map((day) => {
              const subscription = subscriptionData.find(
                (sub) => sub.dayOfMonth === day
              );

              return (
                <div
                  className="relative flex items-end justify-center py-1 bg-[#1e1e1e]"
                  style={{ height: "4rem", borderRadius: "16px" }}
                >
                  <div
                    key={day}
                    onMouseEnter={() =>
                      subscription && setHoveredSubscription(subscription)
                    }
                    onMouseLeave={() => setHoveredSubscription(null)}
                    className={`flex flex-col items-center justify-center ${
                      subscription ? "cursor-pointer" : ""
                    }`}
                  >
                    <span className="text-sm text-white">{day}</span>

                    {/* Show icon if there's a subscription on this day */}
                    {subscription && (
                      <img
                        src={subscription.icon}
                        alt={subscription.app}
                        className={`absolute inset-0 h-8 w-8 m-auto ${
                          hoveredSubscription?.dayOfMonth === day
                            ? "opacity-100"
                            : "opacity-80"
                        }`}
                      />
                    )}

                    {/* Apply border color on hover */}
                    {hoveredSubscription &&
                      hoveredSubscription.dayOfMonth === day && (
                        <div
                          className={`absolute inset-0 border-4 rounded-lg ${hoveredSubscription.borderColor} transition-all duration-300`}
                        ></div>
                      )}

                    {/* Show details only if hoveredSubscription matches the day */}
                    {hoveredSubscription &&
                      hoveredSubscription.dayOfMonth === day && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-gray-900 text-white p-2 rounded-md shadow-lg z-10"
                        >
                          <p className="font-bold">{hoveredSubscription.app}</p>
                          <p>€{hoveredSubscription.amount}</p>
                          <p>Next: {hoveredSubscription.nextPaymentDate}</p>
                          <p>Total: €{hoveredSubscription.totalPaid}</p>
                        </motion.div>
                      )}
                  </div>
                </div>
              );
            })}
            <div className="relative flex items-end justify-center py-1 bg-zinc-700/20" style={{height: "4rem", borderRadius: "16px"}}><div className="flex flex-col items-center justify-center"></div></div>
            <div className="relative flex items-end justify-center py-1 bg-zinc-700/20" style={{height: "4rem", borderRadius: "16px"}}><div className="flex flex-col items-center justify-center"></div></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calendar;
