import { getGitHubRepos } from "@/lib/github";
import { getSubstackArticles } from "@/lib/substack";
import SteamNav from "@/components/SteamNav";
import ProfileHeader from "@/components/ProfileHeader";
import BadgeShowcase from "@/components/BadgeShowcase";
import RecentActivity from "@/components/RecentActivity";
import Socials from "@/components/Socials";

export const revalidate = 3600;

export default async function Home() {
  const [repos, articles] = await Promise.all([
    getGitHubRepos("kindaboring"),
    getSubstackArticles("https://kylecumm1ngs.substack.com"),
  ]);

  return (
    <main className="min-h-screen" style={{ background: "#1b2838" }}>
      <SteamNav />

      <div className="max-w-[960px] mx-auto px-4 pb-16">
        <ProfileHeader />

        <div className="flex flex-col md:flex-row gap-3 mt-4">
          {/* Left — activity feed */}
          <div className="flex-1 min-w-0 space-y-3">
            <RecentActivity repos={repos} articles={articles} />
          </div>

          {/* Right sidebar — stacks below on mobile */}
          <div className="w-full md:w-[300px] md:shrink-0 space-y-3">
            <BadgeShowcase />
            <Socials />
          </div>
        </div>
      </div>

      <footer
        className="border-t py-5"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-[960px] mx-auto px-4 flex items-center justify-center">
          <span className="text-[#8f98a0] text-xs">
            © 2026 Kyle Cummings. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
