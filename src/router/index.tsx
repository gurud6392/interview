import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));

const Routers = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</>
	)
}

export default Routers;