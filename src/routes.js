import { Route, Switch } from "react-router-dom";
import App from "./App";
import MangaList from "./components/MangaList";
import Error404 from "./components/Error404";
import MangaDetail from "./components/MangaDetail";
import ChapterDetail from "./components/ChapterDetail";
import Home from "./components/Home";
import UploaderDetail from "./components/UploaderDetail";

const AppRoutes = () => {
    return (
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/mangas" component={MangaList} />
                <Route exact path="/manga/:mangaId" component={MangaDetail} />
                <Route exact path="/manga/:mangaId/chapter/:chapterId" component={ChapterDetail} />

                <Route exact path="/uploader/:uploaderId" component={UploaderDetail} />

                <Route component={Error404} />
            </Switch>
        </App>

    );
}

export default AppRoutes;