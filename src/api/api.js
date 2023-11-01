import { axiosClient } from "./client";

export const api = {
	get: async (url, params = null) => {
		return await axiosClient.get(url, { params: params ?? null });
	}
}