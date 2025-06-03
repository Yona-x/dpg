import { writable } from "svelte/store";
import type { Post } from "../types/componentsTypes";
import { STORAGE_KEY } from "../consts";

export const isCache = writable(false);
export const postsStore = writable<Post[]>([]);

export function saveLocalStorage(posts: Post[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function loadLocalStorage() {
  const cached = localStorage.getItem(STORAGE_KEY);

  return cached ? JSON.parse(cached) : "";
}
