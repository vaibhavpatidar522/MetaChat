export const apiFetch = async (path, method = "GET", values = null) => {
	const res = await fetch(
		`${ "http://localhost:3001/api"}/${path}`, {

			method,
			// headers: {
			// 	"Content-Type": "application/json",
			// 	// Authentication: `Bearer ${localStorage.getItem("accessToken")}`,
			// },
			body: values ? JSON.stringify(values) : null,
		}
	);

	// if (res.status === 403) {
	// 	const res = await fetch("http://localhost:3001/auth/refresh", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			refresh_token: localStorage.getItem("refreshToken"),
	// 		}),
	// 	});

	// 	const { access_token, refresh_token } = await res.json();
	// 	localStorage.setItem("accessToken", access_token);
	// 	localStorage.setItem("refreshToken", refresh_token);

	// 	return apiFetch(path, method, values);
	// }

	return res;
};
