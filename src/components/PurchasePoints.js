import { useState } from "react";
import Fetch, { mtaxios } from "./hooks/Fetch";
import { useDataContext } from "./hooks/data-context";
import { pointPurchase } from "../api-endpoints";

const PurchasePoints = () => {

    const [error, setError] = useState();
    const [message, setMessage] = useState();
    const [data, setData] = useState();

    const { token } = useDataContext();

    const handleOnChange = (e) => {
        const file = e.target.files[0]
        // image size 800KB limit
        if (file) {
            if (file.size > (800 * 1024)) {
                setError("image size too big");
            } else {
                setError();
                const reader = new FileReader();
                reader.addEventListener("load", () => setData(reader.result))
                reader.readAsDataURL(file);
                setData(reader.result);
            }
        } else {
            setError("Image is needed to validate.");
        }
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        mtaxios.post(
            pointPurchase,
            { remark: e.target[0].value, receipt: data },
            { headers: { Authorization: `Bearer ${token}` } })
            .then(({ data }) => setMessage(data.message))
            .catch(({ response: { data: { message } } }) => setError(message))

    };

    return (
        <>
            <div className="my-5 px-5 mx-auto leading-relaxed">
                ဖော်ပြပါဖုန်းနံပါတ်များကို KBZ pay/Wave Pay မှတဆင့်ငွေလွှဲပြီး Screenshot(လိုအပ်) နဲ့အတူ ပေးပို့လိုက်ပါ။
                မှတ်ချက်ရေးလိုကလည်း ရေးနိုင်ပါတယ်။ ၁ ကျပ်ကို ၁ ပွိုင့်နှုန်းနဲ့ Admin မှ နှစ်ဆယ့်လေးနာရီအတွင်း အကြောင်းပြန်မှာပါ။
            </div>
            <div className="text-center font-semibold text-lg tracking-widest p-5">
                09422924858
            </div>
            <div className="text-center">{message}</div>
            {error ? <div className="error text-center">{error}</div> : ""}
            <form onSubmit={handleFormSubmit} className="my-12 mx-auto w-3/4 max-w-md flex flex-col items-center gap-y-5">
                <input type="text" name="remark" placeholder="မှတ်ချက်" className="input-mt w-full leading-normal" />
                <input type="file" name="receipt" accept="image/*" onChange={handleOnChange} className="input-mt w-full" required />
                {data && <img src={data} alt="" />}
                {!error && <button type="submit" className="form-btn w-full">Send</button>}
            </form>
        </>
    );
};

export default PurchasePoints;
