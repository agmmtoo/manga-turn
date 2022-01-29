import { ImQuestion } from "react-icons/im";
import { Redirect } from "react-router-dom";

const Error404 = () => <Redirect to="/where-you-goin" />

export default Error404;

export const WhereYouGoin = () => {
    return (
        <div className="w-full h-72 flex justify-center items-center">
            <div>
                <ImQuestion size={75} className="animate-bounce mx-auto " />
                <div className="font-mm my-5 text-center font-bold text-xl animate-pulse leading-loose tracking-wide"><span className="text-indigo-800 dark:text-indigo-400">ဘယ်</span> ကိုများပါလိမ့်နော်</div>
            </div>
        </div>
    );
}