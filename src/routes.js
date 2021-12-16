import { Route, Switch } from "react-router-dom";
import App from "./App";
import MangaList from "./components/MangaList";
import Error404 from "./components/Error404";
import MangaDetail from "./components/MangaDetail";
import ChapterDetail from "./components/ChapterDetail";

const AppRoutes = () => {
    return (
        <App>
            <Switch>
                <Route exact path="/">
                    <MangaList />
                </Route>
                {/* If MangaDetail is called as children, NO ROUTE PROPS FOR YOU */}
                <Route exact path="/manga/:mangaId" component={MangaDetail} />
                <Route exact path="/manga/:mangaId/chapter/:chapterId" component={ChapterDetail} />
                <Route component={Error404} />
            </Switch>
        </App>

    );
}

export default AppRoutes;