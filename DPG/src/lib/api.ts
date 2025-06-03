import axios from "axios";
import type { Post } from "../types/componentsTypes";
import { API_URL } from "../consts";

export async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await axios.get<Post[]>(API_URL);

    return response.data;
  } catch (error) {
    return [];
  }
}
