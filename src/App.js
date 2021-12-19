import "./index.css";
import useToken from "./components/hooks/token-hook";
import LoginForm from "./components/LoginForm";
import Menu from "./components/Menu";
import UserContextProvider from "./components/hooks/data-context";

const App = ({ children }) => {
  const [token, setToken] = useToken();

  if (!token) return <LoginForm setToken={setToken} />
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
