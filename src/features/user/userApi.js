import { api } from "../../api";

export const fetchUser = () => {
	return api.get('account');
}