export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const headers = {
    Authorization: `Bearer ${config.public.tmdbToken}`,
  };

  const fetchData = (i, cat) =>
    $fetch(`https://api.themoviedb.org/3/${i}/${cat}?language=en-US&page=1`, {
      headers,
    });

  const [
    moviesPopular,
    moviesTopRated,
    moviesNowPlaying,
    moviesUpComing,
    showsPopular,
    showsOnAir,
    showsTopRated,
    showsAiringToday,
  ] = await Promise.all([
    fetchData("movie", "popular"),
    fetchData("movie", "top_rated"),
    fetchData("movie", "now_playing"),
    fetchData("movie", "upcoming"),
    fetchData("tv", "popular"),
    fetchData("tv", "on_the_air"),
    fetchData("tv", "top_rated"),
    fetchData("tv", "airing_today"),
  ]);

  return {
    moviesPopular,
    moviesTopRated,
    moviesNowPlaying,
    moviesUpComing,
    showsPopular,
    showsOnAir,
    showsTopRated,
    showsAiringToday,
  };
});
