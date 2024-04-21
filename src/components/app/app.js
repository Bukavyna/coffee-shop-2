import { Component } from 'react';

import Page1Header from './page1/page1Header/page1Header';
import Page1Main from './page1/page1Main/page1Main';
import Page1Main2 from './page1/page1Main2/page1Main2';
import Page1Footer from './page1/page1Footer/page1Footer';

import Page2Header from './page2/page2Header/page2Header';
import CoffeeProduct from './page2/page2ProductCards/page2ProductCards';

import './app.css';



class App extends Component {

	render() {
		return (
			<div className="app">
				<div className="page1">
					<Page1Header/>
					<Page1Main/>
					<Page1Main2/>
					<Page1Footer/>
				</div>

				<div className="page2">
					<Page2Header/>
					<CoffeeProduct/>
				</div>

				<div className="page3">

				</div>

				<div className="page4">

				</div>
			</div>
		)
	}
}

export default App;