function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-950 px-2.5 py-1 text-xs">
      {children}
    </span>
  );
}

export default function PostList({ posts, filter, onFilter }) {
  const tabs = ["Semua", "Puisi", "Artikel", "Catatan"];
  const filtered = posts.filter((p) => (filter === "Semua" ? true : p.category === filter));

  return (
    <section id="karya" className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Koleksi Karya</h2>
        <div className="flex items-center gap-2 text-sm">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => onFilter?.(t)}
              className={`rounded-full px-3 py-1 border transition ${
                filter === t
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-transparent"
                  : "border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <article
            key={post.id}
            className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-5 sm:p-6 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <Badge>{post.category}</Badge>
              <span className="text-xs text-neutral-500">{formatDate(post.createdAt)}</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:underline underline-offset-4">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-4 whitespace-pre-line">
              {post.content}
            </p>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-neutral-500">Belum ada karya pada kategori ini.</p>
      )}
    </section>
  );
}
