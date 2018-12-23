import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Introduction from '../views/Introduction/Introduction';
import Article from '../views/Article/ArticleContainer';
import EndPage from '../views/EndPage/EndPage';
import NotFound from '../views/NotFound/NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Introduction} />
            <Route path="/articles" component={Article} />
            <Route path="/someNextPage" component={EndPage} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;