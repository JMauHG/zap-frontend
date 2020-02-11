import React from 'react'
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom'
import Nav from "../components/navbar/navbar"
import Home from '../components/home/home'
import Benefit from '../components/home/benefit'
import Addbenefit from '../components/home/addbenefit'
import Userlist from '../components/users/userlist'
import User from '../components/users/user'
import Events from '../components/event/events'
import Stadistics from '../components/event/stadistics'
import Login from '../components/login/login';
import Logout from '../components/login/logout';

const Main = withRouter(({ location }) => {
    return (
        <div>

            {
                location.pathname !== '/login' && location.pathname !== '/logout' && <Nav />
            }
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route exact path="/home" component={Home} />
                <Route path="/home/benefit" component={Benefit} />
                <Route path="/home/addbenefit" component={Addbenefit} />
                <Route exact path="/users" component={Userlist} />
                <Route path="/users/user" component={User} />
                <Route exact path="/events" component={Events} />
                <Route path="/events/stadistics" component={Stadistics} />
            </Switch>
        </div>
    )

})
const Routing = () => (
    <Router>
        <Main />
    </Router>
)

export default Routing;

