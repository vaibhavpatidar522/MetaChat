const userSignOut = () => {
	localStorage.removeItem("accessToken");
	localStorage.removeItem("refreshToken");
	localStorage.removeItem("userID");
	localStorage.setItem("isLogIn", false);
	window.location.reload();
};

export default userSignOut;
