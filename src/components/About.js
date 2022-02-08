import axios from "axios";
import { useState, useEffect } from "react";

const About = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get("https://discord.com/api/guilds/804212786586320937/widget.json")
            .then(({ data }) => setData(data))
    }, []);

    if (data) return (
        <div className="flex flex-col justify-center">
            <div className="p-5">
                Admin တို့ Discord Server{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.instant_invite}
                    className="my-7 hover:underline text-indigo-800 dark:text-indigo-400">
                    {data.name}
                </a> ကိုလာခဲ့ပါ။ အခုတောင် Online {data.presence_count} ယောက်ရှိတယ်နော်။
                အခုချိန်လောက်ဆို အက်ဒမင်တွေရော မန်ဘာတွေရော စကားတွေဖောင်ဖွဲ့နေအောင် ပြောနေကြလောက်ပြီ။
                ဖြစ်နိုင်ရင် Translator adamin အားလုံးကို join စေချင်ပါတယ်။ အသိပေးချင်တာမျိုးတွေရှိတဲ့အခါ real-time ပြောရတာ အဆင်ပြေလို့ပါ။
            </div>
            <div className="flex flex-col max-h-48 border-4 overflow-y-scroll">
                {data.members.map(m => {
                    return (
                        <div key={m.id} className="flex flex-row">
                            <img src={m.avatar_url} alt={m.username} className="rounded-full w-10 h-10 object-cover" />
                            <div>{m.username}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
    return null;

};

export default About;