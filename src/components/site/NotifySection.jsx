import { useState } from "react";
import { base44 } from "@/api/base44Client";

export default function NotifySection() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setState("loading");
    setErrorMsg("");

    try {
      // Check for duplicate
      const existing = await base44.entities.Subscriber.filter({ email: email.trim() });
      if (existing.length > 0) {
        setState("success"); // treat as success — already registered
        return;
      }
      await base44.entities.Subscriber.create({ email: email.trim() });
      setState("success");
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again.");
      setState("error");
    }
  };

  return (
    <section
      id="notify"
      className="border-b border-[#1E1E22] py-24 lg:py-32"
      aria-labelledby="notify-heading"
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <h2
              id="notify-heading"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]"
            >
              Stay Informed
            </h2>
          </div>

          <div className="lg:col-span-9">
            <p className="text-[clamp(1.1rem,2vw,1.5rem)] text-[#EDEDED] leading-[1.5] font-light max-w-2xl mb-3">
              Get notified when Fabric OS is ready.
            </p>
            <p className="text-sm text-[#88888C] leading-[1.6] max-w-xl mb-10">
              Leave your email address and we will reach out when the first
              release becomes available. No marketing, no newsletters — one
              message when we launch.
            </p>

            {state === "success" ? (
              <div className="inline-flex items-center gap-3 border border-[#38BDF8]/20 bg-[#38BDF8]/5 px-5 py-4 rounded-sm">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] shrink-0" aria-hidden="true" />
                <p className="text-sm text-[#38BDF8]">
                  You're on the list. We'll be in touch when we launch.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg"
                aria-label="Launch notification sign-up"
              >
                <label htmlFor="notify-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="notify-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={state === "loading"}
                  className="
                    flex-1 bg-[#0D0D0F] border border-[#2A2A2F] rounded-sm px-4 py-3
                    text-sm text-[#EDEDED] placeholder-[#3A3A42]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]
                    disabled:opacity-50 transition-colors duration-200
                  "
                />
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="
                    px-6 py-3 bg-[#EDEDED] text-[#0A0A0B]
                    text-sm font-semibold tracking-wide rounded-sm
                    hover:bg-white transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]
                    disabled:opacity-50 disabled:cursor-not-allowed
                    whitespace-nowrap
                  "
                  style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
                >
                  {state === "loading" ? "Saving…" : "Notify Me"}
                </button>
              </form>
            )}

            {state === "error" && (
              <p className="mt-3 text-xs text-red-400" role="alert">
                {errorMsg}
              </p>
            )}

            <p className="mt-4 text-xs text-[#2E2E36]">
              Your address will not be shared or used for any purpose other than
              this notification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}