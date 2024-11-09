import { api } from "./serviceConfig"

export const login = async (creds) => {
    const res = await api.post("/api/auth/v1/login", creds)
    return res
}