import logo from './logo.svg';
import './App.css';
import ProductsMaker from './pages/ProductsMaker';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Nav from './pages/Nav';
import Detail from './pages/Detail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/cart' component={Cart} />
					<Route path='/detail/:id' component={Detail} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
