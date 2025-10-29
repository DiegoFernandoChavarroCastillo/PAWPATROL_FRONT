import axios from "axios";
import { API_URL } from "./api";

export async function login(email: string, password: string) {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
}

export async function register(email: string, password: string) {
  const response = await axios.post(`${API_URL}/auth/register`, { email, password });
  return response.data;
}
