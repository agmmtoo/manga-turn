import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import useToken from "./components/hooks/token-hook";

function App() {
  const [token, setToken] = useToken();

  return (
    token ? <HomePage token={token} /> : <LoginForm setToken={setToken} />
  );
}

export default App;
