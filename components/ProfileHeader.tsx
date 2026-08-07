import Image from "next/image";

function YearsOfServiceBadge({ years }: { years: number }) {
  return (
    <div
      className="flex items-center gap-2.5 px-3 py-2 rounded-sm"
      style={{
        background: "linear-gradient(135deg, rgba(42,71,94,0.55) 0%, rgba(13,40,71,0.35) 100%)",
        border: "1px solid rgba(102,193,245,0.15)",
      }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
        style={{
          background: "rgba(0,0,0,0.35)",
          border: "1px solid rgba(102,193,245,0.3)",
        }}
      >
        <span
          className="font-black leading-none"
          style={{ color: "#67c1f5", fontSize: "14px" }}
        >
          {years}
        </span>
      </div>

      <div>
        <div className="text-[11px] font-semibold" style={{ color: "#c6d4df" }}>
          Years of Service
        </div>
        <div className="text-[10px] mt-0.5" style={{ color: "#8f98a0" }}>
          Cloud &amp; Infrastructure
        </div>
      </div>
    </div>
  );
}

export default function ProfileHeader() {
  return (
    <div>
      {/* Background Art Banner */}
      <div className="relative overflow-hidden h-[160px] md:h-[160px]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0a1f35 0%, #1a3a5c 35%, #0d2847 65%, #071525 100%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(102,192,244,0.05) 0, rgba(102,192,244,0.05) 1px, transparent 1px, transparent 60px),
              repeating-linear-gradient(90deg, rgba(102,192,244,0.05) 0, rgba(102,192,244,0.05) 1px, transparent 1px, transparent 60px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div
          className="absolute top-6 right-40 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(102,192,244,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -top-10 left-1/3 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(87,203,222,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "140px",
            background: "linear-gradient(to bottom, transparent, #1b2838)",
          }}
        />
      </div>

      {/* Profile block – overlaps banner */}
      <div className="-mt-[80px] md:-mt-[130px] relative">

        {/* Mobile: stack vertically centered. Desktop: side by side */}
        <div className="flex flex-col items-center md:flex-row md:items-end gap-4">

          {/* Avatar */}
          <div className="shrink-0 z-10">
            <div
              className="overflow-hidden rounded-sm w-[120px] h-[120px] md:w-[184px] md:h-[184px]"
              style={{
                border: "2px solid rgba(0,0,0,0.6)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.6)",
              }}
            >
              <Image
                src="/avatar.jpg"
                alt="Kyle Cummings"
                width={184}
                height={184}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Info + Level */}
          <div className="z-10 flex-1 min-w-0 pb-1 flex flex-col md:flex-row md:items-end md:justify-between gap-4 w-full">

            {/* Name, status, bio, title */}
            <div className="min-w-0 text-center md:text-left">
              <h1
                className="font-bold leading-tight text-[24px] md:text-[32px]"
                style={{ color: "#c7d5e0" }}
              >
                Kyle Cummings
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-4 mt-1">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#57cbde", boxShadow: "0 0 5px #57cbde" }}
                  />
                  <span style={{ color: "#57cbde", fontSize: "13px" }}>Online</span>
                </div>
                <div
                  className="flex items-center gap-1.5"
                  style={{ color: "#8f98a0", fontSize: "13px" }}
                >
                  <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  New York, NY
                </div>
              </div>

              <p
                className="mt-3 leading-relaxed"
                style={{ color: "#c7d5e0", fontSize: "13px" }}
              >
                senior cloud infrastructure engineer with 9+ years building and
                automating cloud systems across AWS, Azure, and GCP.
              </p>

              <div className="mt-3 flex justify-center md:justify-start">
                <span
                  className="px-2 py-1 rounded-sm text-[11px] font-medium"
                  style={{
                    background: "rgba(42,71,94,0.6)",
                    border: "1px solid rgba(102,193,245,0.2)",
                    color: "#67c1f5",
                  }}
                >
                  Senior Cloud Infrastructure Engineer
                </span>
              </div>
            </div>

            {/* Level + Years of Service */}
            <div className="shrink-0 flex flex-row md:flex-col items-center md:items-end justify-center gap-3">
              {/* Years of Service badge */}
              <YearsOfServiceBadge years={9} />

              {/* Level / XP */}
              <div
                className="flex items-center gap-3 px-3 py-2 rounded-sm"
                style={{
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid rgba(102,193,245,0.15)",
                }}
              >
                <div>
                  <div
                    className="font-black leading-none"
                    style={{ color: "white", fontSize: "26px" }}
                  >
                    9
                  </div>
                  <div
                    className="text-[9px] uppercase tracking-widest mt-0.5"
                    style={{ color: "#8f98a0" }}
                  >
                    Engineer Level
                  </div>
                </div>
                <div style={{ width: "110px" }}>
                  <div
                    className="h-1 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <div
                      className="h-full"
                      style={{
                        width: "92%",
                        background: "linear-gradient(90deg, #4fa94d, #57cbde)",
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-0.5">
                    <span style={{ color: "#8f98a0", fontSize: "9px" }}>9,200 XP</span>
                    <span style={{ color: "#8f98a0", fontSize: "9px" }}>10,000 XP</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
