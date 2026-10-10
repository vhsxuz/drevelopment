"use client";

import Image from "next/image";
import { useReducer, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheck, FiDownload, FiImage, FiRotateCcw } from "react-icons/fi";
import { spring } from "@/lib/motion";
import Pressable from "@/components/motion/Pressable";
import { initialState, reducer, tally, toCSV, SEED_PHOTOS } from "./rsvpState";

/**
 * The phone and the dashboard side by side. Tapping RSVP inside the phone
 * updates the dashboard in the same frame - that single interaction is the
 * whole pitch for the events line.
 */
export default function DemoStage({ t }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [screen, setScreen] = useState("invite"); // invite | form | done
  const [tab, setTab] = useState("guests");
  const [form, setForm] = useState({ name: "", attending: true, meal: 0 });
  const [announce, setAnnounce] = useState("");

  const d = t.demo;
  const counts = tally(state.guests);

  const submit = (event) => {
    event.preventDefault();
    const name = form.name.trim() || d.phone.nameLabel;
    dispatch({ type: "rsvp", name, attending: form.attending, meal: form.attending ? form.meal : null });
    setScreen("done");
    setAnnounce(form.attending ? d.phone.confirmed : d.phone.declined);
  };

  const downloadCSV = () => {
    const csv = toCSV(state.guests, d.phone.meals);
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "rsvp.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-10">
      {/* ---------------------------------------------------------------- */}
      {/* The guest's phone                                                 */}
      {/* ---------------------------------------------------------------- */}
      <div className="mx-auto w-full max-w-[320px]">
        <div className="material-thick material-edge overflow-hidden rounded-[40px] p-3 shadow-lg">
          <div className="relative aspect-[9/17] overflow-hidden rounded-[30px] bg-canvas">
            <AnimatePresence mode="wait" initial={false}>
              {screen === "invite" && (
                <motion.div
                  key="invite"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={spring.move}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-7 text-center"
                >
                  <p className="t-label text-accent">{d.phone.date}</p>
                  <p className="t-title text-[30px] leading-[1.1]">{d.phone.names}</p>
                  <p className="t-caption text-ink-2">{d.phone.venue}</p>
                  <p className="t-caption mt-2 text-pretty text-ink-3">{d.phone.story}</p>
                  <Pressable
                    onPress={() => setScreen("form")}
                    hitSlop={false}
                    className="mt-4 h-11 rounded-full bg-accent px-6 text-[15px] font-semibold text-accent-ink"
                  >
                    {d.phone.rsvpButton}
                  </Pressable>
                </motion.div>
              )}

              {screen === "form" && (
                <motion.form
                  key="form"
                  onSubmit={submit}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={spring.move}
                  className="absolute inset-0 flex flex-col gap-3 overflow-y-auto p-6"
                >
                  <p className="t-subhead">{d.phone.formTitle}</p>

                  <label className="flex flex-col gap-1.5">
                    <span className="t-caption text-ink-2">{d.phone.nameLabel}</span>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="h-11 rounded-md border border-line/12 bg-sunken px-3 text-[15px] outline-none focus:border-accent/60"
                    />
                  </label>

                  <fieldset className="flex flex-col gap-1.5">
                    <legend className="t-caption mb-1.5 text-ink-2">
                      {d.phone.attendingLabel}
                    </legend>
                    <div className="flex gap-1 rounded-[12px] bg-sunken p-1">
                      {[true, false].map((value) => (
                        <button
                          key={String(value)}
                          type="button"
                          onClick={() => setForm({ ...form, attending: value })}
                          className={`relative flex-1 rounded-[9px] px-2 py-2 text-[13px] font-medium ${
                            form.attending === value ? "text-ink" : "text-ink-3"
                          }`}
                        >
                          {form.attending === value && (
                            <motion.span
                              layoutId="demo-attend"
                              transition={spring.snappy}
                              className="absolute inset-0 rounded-[9px] bg-surface shadow-sm"
                            />
                          )}
                          <span className="relative z-10">
                            {value ? d.phone.yes : d.phone.no}
                          </span>
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  {form.attending && (
                    <label className="flex flex-col gap-1.5">
                      <span className="t-caption text-ink-2">{d.phone.mealLabel}</span>
                      <select
                        value={form.meal}
                        onChange={(e) => setForm({ ...form, meal: Number(e.target.value) })}
                        className="h-11 rounded-md border border-line/12 bg-sunken px-3 text-[15px] outline-none focus:border-accent/60"
                      >
                        {d.phone.meals.map((meal, i) => (
                          <option key={meal} value={i}>
                            {meal}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}

                  <button
                    type="submit"
                    className="mt-auto h-11 shrink-0 rounded-full bg-accent text-[15px] font-semibold text-accent-ink"
                  >
                    {d.phone.submit}
                  </button>
                </motion.form>
              )}

              {screen === "done" && (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={spring.move}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-7 text-center"
                >
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={spring.flick}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/12 text-accent"
                  >
                    <FiCheck className="text-2xl" />
                  </motion.span>
                  <p className="t-subhead">
                    {form.attending ? d.phone.confirmed : d.phone.declined}
                  </p>
                  <Pressable
                    onPress={() => {
                      setScreen("invite");
                      setForm({ name: "", attending: true, meal: 0 });
                    }}
                    hitSlop={false}
                    className="t-caption h-9 rounded-full border border-line/20 px-4 text-ink-2"
                  >
                    {d.phone.back}
                  </Pressable>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* The couple's dashboard                                            */}
      {/* ---------------------------------------------------------------- */}
      <div className="card flex flex-col gap-5 p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="t-subhead">{d.dashboard.title}</h3>
          <div className="flex gap-1 rounded-[12px] bg-sunken p-1">
            {["guests", "wall"].map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`relative rounded-[9px] px-3 py-1.5 text-[13px] font-medium ${
                  tab === key ? "text-ink" : "text-ink-3"
                }`}
              >
                {tab === key && (
                  <motion.span
                    layoutId="demo-tab"
                    transition={spring.snappy}
                    className="absolute inset-0 rounded-[9px] bg-surface shadow-sm"
                  />
                )}
                <span className="relative z-10">{d.dashboard.tabs[key]}</span>
              </button>
            ))}
          </div>
        </div>

        {tab === "guests" ? (
          <>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: d.dashboard.attending, value: counts.attending, accent: true },
                { label: d.dashboard.declined, value: counts.declined },
                { label: d.dashboard.pending, value: counts.pending },
              ].map((stat) => (
                <div key={stat.label} className="rounded-md bg-sunken p-4">
                  <motion.p
                    key={stat.value}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={spring.snappy}
                    className={`t-mono text-[26px] font-bold leading-none ${
                      stat.accent ? "text-accent" : ""
                    }`}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="t-caption mt-1 text-ink-3">{stat.label}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="t-label mb-2 text-ink-3">{d.dashboard.mealSplit}</p>
              <div className="flex gap-2">
                {counts.meals.map((count, i) => (
                  <div key={d.phone.meals[i]} className="flex-1">
                    <div className="h-2 overflow-hidden rounded-full bg-sunken">
                      <motion.div
                        className="h-full rounded-full bg-accent"
                        animate={{
                          width: `${counts.attending ? (count / counts.attending) * 100 : 0}%`,
                        }}
                        transition={spring.move}
                      />
                    </div>
                    <p className="t-caption mt-1.5 text-ink-3">
                      {d.phone.meals[i]} · {count}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ul className="max-h-[210px] divide-y divide-line/10 overflow-y-auto overscroll-contain rounded-md border border-line/10">
              <AnimatePresence initial={false}>
                {state.guests.map((guest) => (
                  <motion.li
                    key={guest.id}
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={spring.move}
                    className={`flex items-center justify-between gap-3 px-4 py-2.5 ${
                      guest.isYou ? "bg-accent/8" : ""
                    }`}
                  >
                    <span className="t-caption truncate">{guest.name}</span>
                    <span
                      className={`t-caption shrink-0 ${
                        guest.attending === true
                          ? "text-accent"
                          : guest.attending === false
                          ? "text-ink-3"
                          : "text-ink-3"
                      }`}
                    >
                      {guest.attending === null
                        ? "—"
                        : guest.attending
                        ? d.phone.meals[guest.meal]
                        : d.dashboard.declined}
                    </span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            <AnimatePresence initial={false}>
              {state.photos.map((src, i) => (
                <motion.div
                  key={`${src}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={spring.flick}
                  className="relative aspect-square overflow-hidden rounded-md bg-sunken"
                >
                  <Image src={src} alt="" fill sizes="120px" className="object-cover" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2 border-t border-line/10 pt-4">
          <Pressable
            onPress={downloadCSV}
            hitSlop={false}
            className="t-caption flex h-9 items-center gap-2 rounded-full border border-line/20 px-4 text-ink-2"
          >
            <FiDownload /> {d.dashboard.export}
          </Pressable>
          <Pressable
            onPress={() =>
              dispatch({ type: "photo", src: SEED_PHOTOS[state.photos.length % SEED_PHOTOS.length] })
            }
            hitSlop={false}
            className="t-caption flex h-9 items-center gap-2 rounded-full border border-line/20 px-4 text-ink-2"
          >
            <FiImage /> {d.dashboard.simulate}
          </Pressable>
          <Pressable
            onPress={() => {
              dispatch({ type: "reset" });
              setScreen("invite");
              setTab("guests");
            }}
            hitSlop={false}
            className="t-caption flex h-9 items-center gap-2 rounded-full px-4 text-ink-3"
          >
            <FiRotateCcw /> {d.dashboard.reset}
          </Pressable>
        </div>
      </div>

      {/* Wedding guest lists skew old; the confirmation has to be announced. */}
      <p aria-live="polite" className="sr-only">
        {announce}
      </p>
    </div>
  );
}
