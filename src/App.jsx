import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PostComposer from "./components/PostComposer";
import PostList from "./components/PostList";

export default function App() {
  const [posts, setPosts] = useState(() => {
    const sample = [
      {
        id: "p1",
        title: "Di antara senja dan lampu kota",
        category: "Puisi",
        content:
          "Di sela lalu lintas, kutitipkan rindu pada angin.\nKau lewat sebagai bayang, tapi wangi hujan memeluk namamu.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
      },
      {
        id: "a1",
        title: "Membaca kota sebagai puisi",
        category: "Artikel",
        content:
          "Kota bisa dibaca seperti larik-larik: trotoar sebagai tanda baca, gedung sebagai metafora. Dalam tulisan ini aku menelusuri bagaimana arsitektur menata ritme harian kita.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
      },
      {
        id: "c1",
        title: "Catatan tengah malam",
        category: "Catatan",
        content:
          "Jam dua, kopi kedua. Ada ide yang mengetuk tapi memilih duduk di ambang. Kubiarkan saja; besok mungkin ia pulang.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
      },
    ];
    return sample;
  });

  const [filter, setFilter] = useState("Semua");

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [posts]);

  function handlePublish(post) {
    setPosts((prev) => [post, ...prev]);
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(30rem_30rem_at_20%_10%,rgba(253,230,138,0.18),transparent),radial-gradient(35rem_35rem_at_80%_-10%,rgba(196,181,253,0.18),transparent)] dark:bg-[radial-gradient(30rem_30rem_at_20%_10%,rgba(253,230,138,0.08),transparent),radial-gradient(35rem_35rem_at_80%_-10%,rgba(196,181,253,0.08),transparent)] text-neutral-900 dark:text-neutral-50">
      <Navbar />
      <main>
        <Hero />
        <PostComposer onPublish={handlePublish} />
        <PostList posts={sortedPosts} filter={filter} onFilter={setFilter} />
      </main>
      <footer id="tentang" className="mt-16 border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-neutral-600 dark:text-neutral-300">
          Dibuat dengan rasa ingin bercerita. Hak cipta milik penulis. 
        </div>
      </footer>
    </div>
  );
}
