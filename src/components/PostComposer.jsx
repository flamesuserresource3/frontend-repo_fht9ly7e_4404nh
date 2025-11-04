import { useState } from "react";

const categories = [
  { value: "Puisi", label: "Puisi" },
  { value: "Artikel", label: "Artikel" },
  { value: "Catatan", label: "Catatan" },
];

export default function PostComposer({ onPublish }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Puisi");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    const newPost = {
      id: crypto.randomUUID(),
      title: title.trim(),
      category,
      content: content.trim(),
      createdAt: new Date().toISOString(),
    };
    onPublish?.(newPost);
    setTitle("");
    setCategory("Puisi");
    setContent("");
  }

  return (
    <section id="tulis" className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Unggah Karya</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          Tulis puisi, artikel, atau catatan. Simpanan bersifat lokal pada sesi ini.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Judul</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 outline-none focus:ring-2 ring-neutral-900/20 dark:ring-white/20"
              placeholder="Judul karya..."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium">Kategori</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2"
              >
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Isi</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                className="mt-2 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-950 px-3 py-2 resize-y"
                placeholder="Tulis puisimu, esai, atau catatan..."
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium shadow hover:opacity-90"
            >
              Terbitkan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
