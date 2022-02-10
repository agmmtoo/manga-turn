import axios from "axios";
import { useState, useEffect } from "react";
import { HiCheckCircle, HiClock, HiMinusCircle } from "react-icons/hi";
import { FaFacebook, FaDiscord, FaGooglePlay } from "react-icons/fa";

const About = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get("https://discord.com/api/guilds/804212786586320937/widget.json")
            .then(({ data }) => setData(data))
    });

    if (data) return (
        <div className="flex p-5 flex-col justify-center max-w-2xl mx-auto">

            <div className="my-7 px-7 py-5 bg-indigo-400 font-sora rounded-lg">
                <h1 className="font-bold text-2xl">About us</h1>
                <p className="font-light text-sm leading-snug">
                    We build a small bridge connecting Manga translators and readers, under the name Manga Turn.
                    We aim to create a place where readers can support the translators for their work.
                    We DO NOT own any single piece, neither do translators.
                    We strongly encourage you to support the Manga industry by purchasing directly from official authorities.
                    If you find any likings in these work, please consider supporting the translator.
                </p>
            </div>

            <div className="flex flex-row justify-around">
                <a href="https://www.facebook.com/mangaturnmyanmar"><FaFacebook size={30} /></a>
                <a href={data.instant_invite}><FaDiscord size={30} /></a>
                <a href="https://play.google.com/store/apps/details?id=com.codetotalk.mangaturn"><FaGooglePlay size={30} /></a>
            </div>

            <div className="my-7 text-sm font-medium leading-relaxed">
                Admin တို့ Discord Server{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.instant_invite}
                    className="my-7 text-indigo-800 dark:text-indigo-400 hover:underline">
                    {data.name}
                </a> ကိုလာခဲ့ပါ။
                စကားတွေဖောင်ဖွဲ့နေအောင်ပြောတတ်တဲ့ admin တွေရှိပါတယ်။
                ဖြစ်နိုင်ရင် Translator adamin အားလုံးကို join စေချင်ပါတယ်။ အသိပေးချင်တာမျိုးတွေရှိတဲ့အခါ real-time ပြောရတာ အဆင်ပြေလို့ပါ။
            </div>
            <div className="my-7 flex flex-col max-h-60 overflow-y-scroll">
                {data.members.map(m => {
                    return (
                        <div key={m.id} className="w-full my-2 flex flex-row items-center gap-x-2">
                            <img src={m.avatar_url} alt={m.username} className="rounded-full w-10 h-10 object-cover" />
                            <div className="flex-grow">{m.username}</div>
                            <div>{discordStatus(m.status)}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
    return null;

};

export default About;

const discordStatus = status => {
    switch (status) {
        case "online":
            return <HiCheckCircle size={15} className="text-emerald-600" />
        case "idle":
            return <HiClock size={15} className="text-yellow-600" />
        case "dnd":
            return <HiMinusCircle size={15} className="text-red-600" />
        default:
            break;
    }
}