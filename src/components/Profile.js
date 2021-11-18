import useToken from "./hooks/token-hook";
const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [, putToken] = useToken();
    return (
        <div className="p-5 mx-auto max-w-md">
            <p className="font-semibold text-lg">{user.username}</p>
            <button className="inline-flex px-4 py-2" onClick={() => console.log('clear cache')}>
                Clear Cache
            </button>
            <button className="inline-flex px-4 py-2" onClick={() => { console.log('logout'); localStorage.clear(); }}>
                Logout
            </button>
            <a href="https://m.me/remindmetostudy" className="text-pink-600 font-bold">Help</a>
        </div>
    )
};

export default Profile;