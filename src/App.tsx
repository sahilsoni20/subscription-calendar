import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Subscription, subscriptionData } from "./subscription";

const Calendar = () => {
  const daysInMonth = new Array(30)
    .fill(null)
    .map((_, index) => (index + 1).toString().padStart(2, "0"));
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [hoveredSubscription, setHoveredSubscription] =
    useState<Subscription | null>(null);

  return (
    <main className="overflow-visible w-full min-h-screen flex flex-col items-center justify-start md:justify-center px-4 py-10 bg-black text-white">
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
            <div
              className="relative flex items-end justify-center py-1 bg-zinc-700/20"
              style={{ height: "4rem", borderRadius: "16px" }}
            >
              <div className="flex flex-col items-center justify-center"></div>
            </div>
            <div
              className="relative flex items-end justify-center py-1 bg-zinc-700/20"
              style={{ height: "4rem", borderRadius: "16px" }}
            >
              <div className="flex flex-col items-center justify-center"></div>
            </div>
            <div
              className="relative flex items-end justify-center py-1 bg-zinc-700/20"
              style={{ height: "4rem", borderRadius: "16px" }}
            >
              <div className="flex flex-col items-center justify-center"></div>
            </div>
            {daysInMonth.map((day) => {
              const subscription = subscriptionData.find(
                (sub) => sub.dayOfMonth === Number(day)
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
                    {subscription && (
                      <img
                        src={subscription.icon}
                        alt={subscription.app}
                        className={`w-6 h-6 mb-1 hidden sm:block ${
                          hoveredSubscription?.dayOfMonth === Number(day)
                            ? "opacity-100"
                            : "opacity-80"
                        }`}
                      />
                    )}

                    <span className="text-sm text-white">{day}</span>

                    {subscription && (
                      <div
                        className="absolute top-2 right-2 size-2 rounded-full custom-cursor-on-hover"
                        style={{ background: subscription.color }}
                      ></div>
                    )}

                    {/* Show details only if hoveredSubscription matches the day */}
                    {hoveredSubscription &&
                      hoveredSubscription.dayOfMonth === Number(day) && (
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.2, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 1, scale: 0.2, y: 10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute bottom-full w-[250px]"
                            style={{
                              left: `${hoveredSubscription.left}`,
                              right: `${hoveredSubscription.right}`,
                              opacity: "1",
                              willChange: "auto",
                              transform: "none",
                            }}
                          >
                            <div
                              className="w-full mb-1 p-3 text-white bg-zinc-900 font-medium rounded-2xl border-2 border-zinc-700"
                              style={{ borderColor: hoveredSubscription.color }}
                            >
                              <div className="w-full flex items-center justify-between mt-1.5 mb-2">
                                <div className="flex items-center gap-1">
                                  <img
                                    src={hoveredSubscription.icon}
                                    alt={hoveredSubscription.app}
                                    className="w-[20px]"
                                  />
                                  <span className="text-lg">
                                    {hoveredSubscription.app}
                                  </span>
                                </div>
                                <span className="font-semibold text-lg">
                                  €{hoveredSubscription.amount}
                                </span>
                              </div>

                              <div className="w-full flex items-center justify-between mt-1.5 mb-2">
                                <span className="text-sm">
                                  {hoveredSubscription.nextPaymentDate}
                                </span>
                                <span className="text-xs opacity-60">
                                  Next payment
                                </span>
                              </div>

                              <div className="w-full flex items-center justify-between">
                                <span className="text-xs">
                                  Total since {hoveredSubscription.totalSince}
                                </span>
                                <span className="text-md font-semibold">
                                  €{hoveredSubscription.totalPaid}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      )}
                  </div>
                </div>
              );
            })}
            <div
              className="relative flex items-end justify-center py-1 bg-zinc-700/20"
              style={{ height: "4rem", borderRadius: "16px" }}
            >
              <div className="flex flex-col items-center justify-center"></div>
            </div>
            <div
              className="relative flex items-end justify-center py-1 bg-zinc-700/20"
              style={{ height: "4rem", borderRadius: "16px" }}
            >
              <div className="flex flex-col items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calendar;
