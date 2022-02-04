import axios from "axios";
import { useState, useEffect } from "react";

const About = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get("/json/discord-invite-link.json")
            .then(({ data }) => setData(data))
    }, []);

    if (data) return (
        <div>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={data.discord}
                className="my-7 hover:underline text-indigo-800 dark:text-indigo-400">
                Admin တို့ Discord Server
            </a> ကိုလာခဲ့ပါ။
            <iframe
                className="my-7 mx-auto w-9/12 h-96 md:w-2/3"
                title="MangaTurn Discord Server"
                src={`https://discord.com/widget?id=804212786586320937&theme=${(window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light"}`}
                // width="350"
                // height="500  "
                allowtransparency="true"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">

            </iframe>

        </div>
    );
    return null;

};

export default About;