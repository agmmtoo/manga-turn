import Fetch from "./hooks/Fetch";
import renderMangaList from "./renderMangaList";
import { allManga } from "../api-endpoints";
import { ImSearch } from "react-icons/im";
import { useState } from "react";

export default function MangaList() {
    // I chose 1000 for fetch size, 
    // it may increase network load
    // const uri = `${baseUrl}${apiUrl}${allManga}?size=1000`
    const uri = `${allManga}?size=1000`;
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = event => {
        event.preventDefault();
        setSearchTerm(event.target[0].value);
    };

    return (
        <>
            <Search
                handleSubmit={handleSearch} />
            <Fetch
                uri={uri}
                renderSuccess={renderMangaList}
                renderLoading={MangaListLoading()}
                useCache={true}
                giftFromParent={{ searchTerm }}
            />
        </>
    );
};

const Search = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="my-7 mx-auto flex flex-row justify-center">
                <input
                    type="text"
                    placeholder="manga title/translator name"
                    className="py-2 px-4 text-sm text-center w-3/4 max-w-sm rounded focus-shadow-outline leading-tight appearance-none border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-700 focus:outline-none focus:border-indigo-800 dark:focus:border-indigo-400"
                />
                <button type="submit"><ImSearch className="mx-2 hover:text-indigo-500" size={30} /></button>
            </div>
        </form>);
};

export const MangaListLoading = () => {
    const items = new Array(8);
    return (
        <div className="my-6 grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4">
            {[...items].map((n, i) => <div key={i} className="my-6 w-40 h-72 skeleton"></div>)}
        </div>
    );
};