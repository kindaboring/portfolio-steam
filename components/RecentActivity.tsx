import { GitHubRepo, LANGUAGE_COLORS, timeAgo } from "@/lib/github";
import { SubstackArticle, formatDate } from "@/lib/substack";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function PenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.06 9l.94.94L5.92 19H5v-.92L14.06 9zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L18.06 9.94l-3.99-3.75H14.06z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

interface RecentActivityProps {
  repos: GitHubRepo[];
  articles: SubstackArticle[];
}

export default function RecentActivity({
  repos,
  articles,
}: RecentActivityProps) {
  return (
    <div className="space-y-2.5">
      {/* GitHub Repos */}
      <div id="projects" className="section-box rounded-sm overflow-hidden">
        <div className="section-header px-4 py-2.5 flex items-center justify-between">
          <div>
            <span className="text-[13px] font-bold" style={{ color: "#c6d4df" }}>
              Recent Activity
            </span>
          </div>
          <a
            href="https://github.com/kindaboring"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] hover:underline"
            style={{ color: "#67c1f5" }}
          >
            View all
          </a>
        </div>

        <div>
          {repos.length > 0 ? (
            repos.map((repo, i) => {
              const langColor = repo.language
                ? (LANGUAGE_COLORS[repo.language] ?? "#4a6b8a")
                : "#4a6b8a";

              return (
                <div
                  key={repo.id}
                  className="px-4 py-3 hover:bg-white/[0.03] transition-colors"
                  style={{
                    borderTop: i > 0 ? "1px solid rgba(0,0,0,0.3)" : "none",
                  }}
                >
                  <div className="flex gap-3">
                    {/* Game art panel — 184×69px like Steam */}
                    <div
                      className="shrink-0 rounded-sm overflow-hidden relative flex items-center justify-center"
                      style={{
                        width: "184px",
                        height: "69px",
                        background: `linear-gradient(135deg, ${langColor}22 0%, rgba(0,0,0,0.4) 100%)`,
                        border: `1px solid ${langColor}25`,
                      }}
                    >
                      <GitHubIcon
                        className="absolute inset-0 m-auto w-7 h-7 opacity-[0.12] text-white"
                      />
                      {repo.language && (
                        <span
                          className="relative text-[11px] font-bold uppercase tracking-wider"
                          style={{ color: langColor, opacity: 0.5 }}
                        >
                          {repo.language}
                        </span>
                      )}
                    </div>

                    {/* Stats — mirrors Steam's game info layout */}
                    <div className="flex-1 min-w-0">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-bold hover:text-white transition-colors hover:underline"
                        style={{ color: "#67c1f5" }}
                      >
                        {repo.name}
                      </a>
                      <div
                        className="text-[13px] mt-0.5"
                        style={{ color: "#c6d4df" }}
                      >
                        {repo.stargazers_count > 0
                          ? `${repo.stargazers_count} stars on record`
                          : "Public repository"}
                      </div>
                      <div
                        className="text-[11px] mt-0.5"
                        style={{ color: "#8f98a0" }}
                      >
                        Last updated: {timeAgo(repo.updated_at)}
                      </div>
                    </div>
                  </div>

                  {/* Topics row — like Steam's achievement tags */}
                  {((repo.topics && repo.topics.length > 0) ||
                    repo.description) && (
                    <div className="mt-2 ml-[196px]">
                      {repo.description && (
                        <p
                          className="text-[11px] leading-snug mb-1.5 line-clamp-1"
                          style={{ color: "#8f98a0" }}
                        >
                          {repo.description}
                        </p>
                      )}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {repo.topics.slice(0, 5).map((topic) => (
                            <span
                              key={topic}
                              className="px-1.5 py-0.5 rounded-sm text-[10px]"
                              style={{
                                background: "rgba(42,71,94,0.4)",
                                border: "1px solid rgba(102,193,245,0.1)",
                                color: "#8f98a0",
                              }}
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div
              className="p-6 text-center text-[13px]"
              style={{ color: "#8f98a0" }}
            >
              Could not load repositories
            </div>
          )}
        </div>
      </div>

      {/* Substack Articles */}
      <div id="writing" className="section-box rounded-sm overflow-hidden">
        <div className="section-header px-4 py-2.5 flex items-center justify-between">
          <span className="text-[13px] font-bold" style={{ color: "#c6d4df" }}>
            Recent Writing
          </span>
          <a
            href="https://kylecumm1ngs.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] hover:underline"
            style={{ color: "#67c1f5" }}
          >
            View on Substack
          </a>
        </div>

        <div>
          {articles.length > 0 ? (
            articles.map((article, i) => (
              <div
                key={i}
                className="px-4 py-3 hover:bg-white/[0.03] transition-colors"
                style={{
                  borderTop: i > 0 ? "1px solid rgba(0,0,0,0.3)" : "none",
                }}
              >
                <div className="flex gap-3">
                  {/* "Game art" panel for articles */}
                  <div
                    className="shrink-0 rounded-sm overflow-hidden relative flex items-center justify-center"
                    style={{
                      width: "184px",
                      height: "69px",
                      background:
                        "linear-gradient(135deg, rgba(255,103,25,0.15) 0%, rgba(0,0,0,0.4) 100%)",
                      border: "1px solid rgba(255,103,25,0.15)",
                    }}
                  >
                    <PenIcon className="absolute inset-0 m-auto w-7 h-7 opacity-[0.12] text-white" />
                    <span
                      className="relative text-[11px] font-bold uppercase tracking-wider"
                      style={{ color: "#FF6719", opacity: 0.5 }}
                    >
                      Substack
                    </span>
                  </div>

                  {/* Article info */}
                  <div className="flex-1 min-w-0">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-bold hover:text-white transition-colors hover:underline leading-snug block"
                      style={{ color: "#67c1f5" }}
                    >
                      {article.title}
                    </a>
                    <div
                      className="flex items-center gap-1 mt-0.5"
                      style={{ color: "#c6d4df", fontSize: "13px" }}
                    >
                      <StarIcon className="w-3 h-3" />
                      <span>Published on Substack</span>
                    </div>
                    <div
                      className="text-[11px] mt-0.5"
                      style={{ color: "#8f98a0" }}
                    >
                      {formatDate(article.pubDate)}
                    </div>
                  </div>
                </div>

                {article.description && (
                  <p
                    className="text-[11px] leading-snug mt-2 ml-[196px] line-clamp-2"
                    style={{ color: "#8f98a0" }}
                  >
                    {article.description}
                  </p>
                )}
              </div>
            ))
          ) : (
            <div
              className="p-6 text-center text-[13px]"
              style={{ color: "#8f98a0" }}
            >
              Could not load articles
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
