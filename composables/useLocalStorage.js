import { ref, onMounted } from "vue";

const watchlist = ref([]);

export function useWatchlist() {
  onMounted(() => {
    const saved = localStorage.getItem("watchlist");
    watchlist.value = saved ? JSON.parse(saved) : [];
  });

  function add(data, type) {
    if (watchlist.value.find((m) => m.id === data.id)) {
      return;
    }
    const item = {
      id: data.id,
      title: data.title || "Unknown",
      name: data.name || "Unknown",
      poster: data.poster_path || null,
      overview: data.overview || "Unknown",
      vote_average: data.vote_average || "Unknown",
      genres: data.genres || [],
      savedAt: new Date().toLocaleDateString(),
      type,
    };
    watchlist.value.push(item);
    localStorage.setItem("watchlist", JSON.stringify(watchlist.value));
  }

  function remove(id) {
    watchlist.value = watchlist.value.filter((m) => m.id !== id);
    localStorage.setItem("watchlist", JSON.stringify(watchlist.value));
  }

  function isSaved(id) {
    return watchlist.value.find((m) => m.id === id);
  }

  return {
    watchlist,
    add,
    remove,
    isSaved,
  };
}
