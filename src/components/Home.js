import { useDataContext } from "./hooks/data-context"

const Home = () => {
    const { token } = useDataContext();
    return (
        <div>
            <header>Welcome</header>
            <small>{token}</small>
        </div>

    );
}

export default Home;