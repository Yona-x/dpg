<script lang="ts">
  import { postsStore } from "../stores/store";
</script>

<section class="post_list">
  {#each $postsStore as post (post.id)}
    <article class="post_card">
      <h2 class="post_title">{post.title}</h2>
      <p class="post_body">{post.body}</p>
    </article>
  {/each}
</section>

<style>
  .post_list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
  }

  .post_card {
    padding: 1.5rem;
    background-color: #e3f1ff;
    border-radius: 12px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .post_card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }

  .post_title {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    color: #2c3e50;
  }

  .post_body {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    .post_list {
      grid-template-columns: 1fr;
      padding: 1rem;
    }
  }
</style>
