import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import NewsDetailPage from '../components/NewsDetailPage';

class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderComponent />
                        <Switch>
                            <Route path="/" render={(routeProps) => (<HomePage {...routeProps} />)} exact={true} />
                            <Route path="/login" render={(routeProps) => (<LoginPage {...routeProps} />)} exact={true} />
                            <Route path="/register" render={(routeProps) => (<RegisterPage {...routeProps} />)} exact={true} />
                            <Route path="/newsdetail/:news_id" render={(routeProps) => (<NewsDetailPage {...routeProps} />)} exact={true} />
                        </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
