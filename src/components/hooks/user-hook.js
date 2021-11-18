const useUser = () => {
    const pullUser = () => JSON.parse(localStorage.getItem("user"));
    const putUser = user => {
        localStorage.setItem("user", JSON.stringify(user));
    };
    const user = pullUser();
    return [user, putUser];
}

export default useUser;