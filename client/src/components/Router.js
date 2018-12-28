import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Introduction from '../views/Introduction/Introduction';
import Article from '../views/Article/ArticleContainer';
import EndPage from '../views/EndPage/EndPageContainer';
import NotFound from '../views/NotFound/NotFound';

const Router = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/"
                render={(routeProps) => (<Introduction {...routeProps} dataFromApp={props} />)}
            />
            <Route path="/articles"
                render={(routeProps) => (<Article {...routeProps} dataFromApp={props} />)}
            />
            <Route path="/endpage"
                render={(routeProps) => (<EndPage {...routeProps} dataFromApp={props} />)}
            />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;