import { useDataContext } from "./hooks/data-context"

const Home = () => {
    const { token } = useDataContext();
    return (
        <div>
            <header>Welcome</header>
        </div>

    );
}

export default Home;