import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Introduction from '../views/Introduction/Introduction';
import Article from '../views/Article/ArticleContainer';
import EndPage from '../views/EndPage/EndPageContainer';
import NotFound from '../views/NotFound/NotFound';

const Router = (setIndex) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Introduction} />
            <Route path="/articles"
                render={(routeProps) => (<Article {...routeProps} setIndex={setIndex} />)}
            />
            <Route path="/homepage"
                render={(routeProps) => (<EndPage {...routeProps} setIndex={setIndex} />)}
            />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;