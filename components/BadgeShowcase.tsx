import Image from "next/image";

interface Badge {
  name: string;
  issuer: string;
  imageUrl: string;
  earned: boolean;
  earnedDate?: string;
  xp: number;
}

const BADGES: Badge[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    imageUrl:
      "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    earned: true,
    earnedDate: "2023",
    xp: 1000,
  },
  {
    name: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    imageUrl:
      "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    earned: false,
    xp: 2000,
  },
];

export default function BadgeShowcase() {
  return (
    <div id="certs" className="section-box rounded-sm overflow-hidden">
      {/* Section header */}
      <div className="section-header px-4 py-2.5 flex items-center justify-between">
        <span className="text-[13px] font-bold" style={{ color: "#c6d4df" }}>
          Badges
        </span>
        <span className="text-[11px]" style={{ color: "#8f98a0" }}>
          {BADGES.filter((b) => b.earned).length} earned
        </span>
      </div>

      {/* Badge grid — large centered icons like Steam */}
      <div className="flex gap-0">
        {BADGES.map((badge) => (
          <div
            key={badge.name}
            className="flex-1 flex flex-col items-center gap-2 p-4 transition-colors hover:bg-white/[0.03]"
            style={{
              borderRight: "1px solid rgba(255,255,255,0.04)",
              opacity: badge.earned ? 1 : 0.55,
            }}
          >
            <div className="relative">
              <Image
                src={badge.imageUrl}
                alt={badge.name}
                width={90}
                height={90}
                className={badge.earned ? "" : "grayscale"}
              />
              {!badge.earned && (
                <div
                  className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded text-[8px] font-bold"
                  style={{
                    background: "rgba(244,200,66,0.15)",
                    border: "1px solid rgba(244,200,66,0.4)",
                    color: "#f4c842",
                  }}
                >
                  IN PROGRESS
                </div>
              )}
            </div>

            <div className="text-center">
              <div
                className="text-[10px] font-medium leading-snug"
                style={{ color: "#c6d4df" }}
              >
                {badge.name}
              </div>
              {badge.earned ? (
                <div
                  className="text-[10px] mt-1"
                  style={{ color: "#67c1f5" }}
                >
                  {badge.xp.toLocaleString()} XP
                </div>
              ) : (
                <div
                  className="text-[10px] mt-1"
                  style={{ color: "#8f98a0" }}
                >
                  {badge.xp.toLocaleString()} XP on completion
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
