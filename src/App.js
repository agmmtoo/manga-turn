import "./index.css";
import useToken from "./components/hooks/token-hook";
import NoToken from "./components/NoToken";
import Menu from "./components/Menu";
import UserContextProvider from "./components/hooks/data-context";

const App = ({ children }) => {
  const [token, setToken] = useToken();

  if (!token) return <NoToken setToken={setToken} />
  return (
    <main>
      <Menu />
      <UserContextProvider>
        {children}
      </UserContextProvider>
    </main>
  );
}

export default App;
