import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Introduction from '../views/Introduction/IntroductionContainer';
import EndPage from '../views/EndPage/EndPageContainer';
import GlobalPart from '../views/GlobalPart/GlobalPartContainer';
import Article from '../views/Article/ArticleContainer';
import Transition from '../views/Transition/TransitionContainer';
import Map from '../views/Map/MapContainer';
import NotFound from '../views/NotFound/NotFound';

const Router = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/"
                render={(routeProps) => (<Introduction {...routeProps} dataFromApp={props} />)}
            />
            <Route path="/endpage"
                render={(routeProps) => (<EndPage {...routeProps} dataFromApp={props} />)}
            />
            <Route path="/globalpart"
                render={(routeProps) => (<GlobalPart {...routeProps} dataFromApp={props} />)}
            />
            <Route path="/articles"
                render={(routeProps) => (<Article {...routeProps} dataFromApp={props} />)}
            />
            <Route path="/transition"
                render={(routeProps) => (<Transition {...routeProps} dataFromApp={props} />)}
            />
            <Route path="/map"
                render={(routeProps) => (<Map {...routeProps} dataFromApp={props} />)}
            />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;