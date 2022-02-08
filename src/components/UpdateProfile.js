import { useState, useEffect } from "react";
import { mtaxios } from "./hooks/Fetch";
import { useDataContext } from "./hooks/data-context";
import { profile as profileAPI, updateProfile } from "../api-endpoints";

const UpdateProfile = () => {
    const [name, setName] = useState();
    const [profile, setProfile] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState();

    const { token } = useDataContext();

    useEffect(() => {
        mtaxios(profileAPI)
            .then(({ data: { username, profileUrl } }) => {
                setName(username);
                // setProfile(profileUrl);
            })
    }, []);

    const handleNameChange = ({ target: { value } }) => setName(value);

    const handleOnChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setError();
            const reader = new FileReader();
            reader.addEventListener("load", () => setProfile(reader.result))
            reader.readAsDataURL(file);
            // setData(reader.result);
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        setMessage();
        setError();
        mtaxios.put(
            updateProfile,
            { username: e.target[0].value, profile },
            { headers: { Authorization: `Bearer ${token}` } })
            .then(({ data }) => setMessage(data.message))
            .catch(({ response: { data: { message } } }) => setError(message))

    };

    return (
        <>
            {message && <div className="text-center">{message}</div>}
            {error && <div className="error text-center">{error}</div>}
            <form onSubmit={handleFormSubmit} className="my-7 mx-auto w-3/4 max-w-md flex flex-col items-center gap-y-5">
                {profile && <img src={profile} alt="" className="mx-auto rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-md" />}
                <input type="text" placeholder="username" value={name} onChange={handleNameChange} className="input-mt w-full leading-normal" />
                <input type="file" accept="image/*" onChange={handleOnChange} className="input-mt w-full" />
                <button type="submit">Save</button>
            </form>
        </>
    );
};

export default UpdateProfile;