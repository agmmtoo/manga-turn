import "./index.css";
import useToken from "./components/hooks/token-hook";
import LoginForm from "./components/LoginForm";
import Menu from "./components/Menu";
import UserContextProvider from "./components/hooks/data-context";

const App = ({ children }) => {
  const [token, setToken] = useToken();

  if (!token) return <LoginForm setToken={setToken} />
  return (
    <div className="text-center">
      <h1 className="font-semibold uppercase my-1"><a href="/">Manga Turn</a></h1>
      <Menu />
      <UserContextProvider>
        {children}
      </UserContextProvider>
    </div>
  );
}

export default App;
