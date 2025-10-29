export const API_URL = "https://pawpatrol-back-preprod-bvhubpaxgda3frfy.brazilsouth-01.azurewebsites.net";

export async function login(email: string, password: string) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) throw new Error("Invalid credentials");
  return response.json();
}
