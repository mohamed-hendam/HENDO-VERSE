import { defineStore } from "pinia";

export const genresStore = defineStore("genresStore", {
  state: () => ({
    moviesGenres: [],
    // cathedMovies: [],
    TvGenres: [],
    loading: false,
    error: null,
  }),

  actions: {
    async getMoviesGenres() {
      this.loading = true;
      this.error = null;

      try {
        const config = useRuntimeConfig();
        const { data, error } = await useFetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en-US",
          {
            headers: {
              Authorization: `Bearer ${config.public.tmdbToken}`,
            },
          }
        );

        if (error.value) throw error.value;

        this.moviesGenres = data.value.genres || [];
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },

    // async getMoveisFromGenres(genreId) {
    //   this.loading = true;
    //   this.error = null;
    //   try {
    //     const config = useRuntimeConfig();
    //     const { data, error } = await useFetch(
    //       `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en-US`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${config.public.tmdbToken}`,
    //         },
    //       }
    //     );
    //     if (error.value) throw error.value;
    //     this.cathedMovies  = data.value.results || [];
    //   } catch (err) {
    //     this.error = err;
    //   } finally {
    //     this.loading = false;
    //   }
    // },

    async getTvGenres() {
      this.loading = true;
      this.error = null;

      try {
        const config = useRuntimeConfig();
        const { data, error } = await useFetch(
          "https://api.themoviedb.org/3/genre/tv/list?language=en-US",
          {
            headers: {
              Authorization: `Bearer ${config.public.tmdbToken}`,
            },
          }
        );

        if (error.value) throw error.value;
        this.TvGenres = data.value.genres || [];
      } catch (err) {
        this.error = err.value;
      } finally {
        this.loading = false;
      }
    },
  },
});
