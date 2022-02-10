import { useState, useEffect } from "react";
import { mtaxios } from "./hooks/Fetch";

const FAQ = () => {
    const [faqs, setFaqs] = useState();
    const [open, setOpen] = useState();

    useEffect(() => {
        mtaxios({
            baseURL: "./",
            url: "/json/faq.json"
        })
            .then(setFaqs)
            .catch(console.log)
    }, []);

    const handleOpen = id => {
        open === id
            ? setOpen()
            : setOpen(id)
    };

    if (!faqs) return null;

    return (
        <div className="my-7 px-5 font-sora">
            <h1 className="text-2xl font-extrabold py-7 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-400">Frequently Asked Questions</h1>
            {faqs.data.map(faq => {
                return (
                    <div key={faq.id} onClick={() => handleOpen(faq.id)} className="py-4 leading-relaxed">
                        <h2 className="font-medium hover:text-transparent bg-clip-text bg-gradient-to-r hover:from-pink-400 hover:to-indigo-400">- {faq.q}</h2>
                        {(faq.id === open)
                            ? <div className="font-normal py-2 border-b">: {faq.a}</div>
                            : null}
                    </div>
                );
            })}
        </div>
    );
};

export default FAQ;
