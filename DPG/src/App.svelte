<script lang="ts">
  import { onMount } from "svelte";
  import { fetchPosts } from "./lib/api";
  import PostList from "./components/PostList.svelte";
  import {
    postsStore,
    isCache,
    saveLocalStorage,
    loadLocalStorage,
  } from "./stores/store";
  import Spinner from "./components/ui/Spinner.svelte";
  import type { Post } from "./types/componentsTypes";

  let errorMessage: string = "";
  let isLoad: boolean = false;

  onMount(async () => {
    isLoad = true;

    const posts: Post[] = await fetchPosts();

    if (posts) {
      postsStore.set(posts);

      saveLocalStorage(posts);
    } else {
      const cached = loadLocalStorage();

      if (cached) {
        postsStore.set(cached);
        isCache.set(true);

        errorMessage = "Данные загружены из кеша";
      } else {
        errorMessage = "Нет данных для отображения";
      }
    }
    console.log(errorMessage);

    isLoad = false;
  });
</script>

{#if isLoad}
  <div class="spinner_wrapper">
    <Spinner styles="width: 30px; height: 30px;" />
    <span>Загрузка постов...</span>
  </div>
{:else if errorMessage}
  <p class="error_message">{errorMessage}</p>
{:else}
  <PostList />
{/if}

<style>
  .spinner_wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 2rem;
    font-size: 1.2rem;
    color: #141414;
  }

  .error_message {
    color: red;
    text-align: center;
    margin-top: 100px;
    font-size: 1.2rem;
  }
</style>
