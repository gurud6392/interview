import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Interview from '../pages/interview';
import InterviewList from '../pages/interview/InterviewList';

const Home = lazy(() => import('../pages/home'));

const Routers = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/interview' component={Interview} />
				<Route exact path='/interview/:type/:id' component={InterviewList} />
			</Switch>
		</>
	)
}

export default Routers;