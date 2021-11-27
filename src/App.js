import "./index.css";

const App = ({ children }) =>
  <div className="text-center">
    <h1 className="font-semibold uppercase my-1"><a href="/">Manga Turn</a></h1>
    {children}
  </div>

export default App;
