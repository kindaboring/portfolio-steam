
export default function SteamNav() {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: "linear-gradient(to bottom, #121212 0%, #1b1b1b 100%)",
        borderBottom: "1px solid rgba(0,0,0,0.6)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.5)",
      }}
    >
      {/* Main nav row */}
      <div className="max-w-[1000px] mx-auto px-4 h-[54px] flex items-center gap-6">
        <div
          className="w-8 h-8 shrink-0 rounded-full overflow-hidden"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
            boxShadow: "0 0 12px rgba(255,255,255,0.25)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.ico" alt="logo" className="w-full h-full object-cover" />
        </div>

        <div className="flex items-center gap-0.5 flex-1">
          {[
            { label: "PROJECTS", href: "#projects" },
            { label: "WRITING", href: "#writing" },
            { label: "CERTS", href: "#certs" },
            { label: "CONTACT", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2 md:px-3 py-1 text-[12px] md:text-[13px] font-medium transition-colors hover:text-white"
              style={{ color: "#c6d4df" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div
          className="hidden md:block text-[13px] font-medium"
          style={{ color: "#c6d4df" }}
        >
          Kyle Cummings
        </div>
        <div
          className="w-7 h-7 rounded-sm overflow-hidden border"
          style={{ borderColor: "rgba(255,255,255,0.2)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar.jpg"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}
