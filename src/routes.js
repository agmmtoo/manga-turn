import { Route, Switch } from "react-router";
import App from "./App";
import HomePage from "./components/HomePage";
import Error404 from "./components/Error404";
import LoginForm from "./components/LoginForm";
import MangaDetailLink from "./components/MangaDetailLink";

import useToken from "./components/hooks/token-hook";
import ChapterDetail from "./components/ChapterDetail";

const AppRoutes = () => {
    const [token, setToken] = useToken();

    if (!token) return <LoginForm setToken={setToken} />

    return (
        <App>
            <Switch>
                <Route exact path="/">
                    <HomePage token={token} />
                </Route>
                {/* If MangaDetail is called as children, NO ROUTE PROPS FOR YOU */}
                <Route exact path="/manga/:mangaId" component={MangaDetailLink} />
                <Route exact path="/manga/:mangaId/chapter/:chapterId" component={ChapterDetail} />
                <Route component={Error404} />
            </Switch>
        </App>
    );
}

export default AppRoutes;