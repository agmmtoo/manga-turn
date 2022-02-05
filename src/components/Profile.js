import Fetch from "./hooks/Fetch";
import { profile } from "../api-endpoints";
import { useDataContext } from "./hooks/data-context";
import { useHistory, Link } from "react-router-dom";

const Profile = () => {
    const { setToken, setRToken } = useDataContext();
    const history = useHistory();

    const logout = () => {
        console.log('logout');
        setToken("");
        setRToken("");
        localStorage.removeItem("token");
        localStorage.removeItem("rtoken");
        history.push("/");
        window.location.reload();
    };

    return (
        <>
            <Fetch
                uri={`${profile}`}
                renderSuccess={renderProfile}
                giftFromParent={{ logout }}
                renderLoading={ProfileLoading()}
            />
        </>
    );
};

export default Profile;

const renderProfile = ({
    id,
    username,
    role,
    type = "",
    payment = "",
    profileUrl = "",
    point,
    createdDateInMilliSeconds,
    updatedDateInMilliSeconds,
}, t, fr, giftFromParent) => {
    const { logout } = giftFromParent;
    return (
        <div className="my-7 flex flex-col md:flex-row justify-center md:items-center">
            {profileUrl && <img
                src={profileUrl}
                alt={username}
                className="mx-auto rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-md"
            />}
            <div className="w-full md:w-3/5">
                <div className="my-7 text-center text-lg tracking-wider">
                    <Link to="profile/update-profile">{username}</Link></div>
                <div className="my-7 text-center text-7xl font-medium">
                    <Link to="/profile/purchase-points">
                        {point} <span className="font-normal text-xl">Pts</span>
                    </Link>
                </div>
                <div className="my-7 w-full flex flex-col items-center">
                    <button
                        className="w-3/4 md:w-2/4 text-center py-4 md:py-3 border border-gray-500"
                        onDoubleClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProfileLoading = () => {
    return (
        <div className="my-7 flex flex-col md:flex-row justify-center md:items-center">
            <div className="mx-auto rounded-full w-48 h-48 md:w-64 md:h-64 skeleton" />
            <div className="w-full md:w-3/5">
                <div className="my-7 w-20 h-7 skeleton" />
                <div className="my-7 skeleton w-24 h-16 skeleton" />
            </div>
        </div>
    );
}
