import { Component } from 'react';

import './page2Header.scss';

class Page2Header extends Component {
	render() {
		return (
			<div className="page2Header">
				<nav>
					<div className="logo">
					</div>
					<div>
						<button>Coffee house</button>
						<button>Our coffee</button>
						<button>For your pleasure</button>
					</div>
				</nav>
				<h1>Our Coffee</h1>
			</div>
		)
	}
}

export default Page2Header;


// import React from 'react';
//
// class Page2Header extends React.Component {
// 	render() {
// 		const products = [
// 			{ id: 1, name: "Solimo Coffee Beans 2 kg", price:  },
// 			{ id: 2, name: "Another Coffee", price: this.props.price.coffee2 },
// 			// Додайте більше продуктів за потребою
// 		];
//
// 		return (
// 			<div>
// 				{this.props.products.map(product => (
// 					<div className="" key={product.id}>
// 						<div className="block"></div>
// 						<div className="solimo-coffee box">
// 							<div className="solimo-coffee-img box-img"></div>
// 							<p className="coffee-name">{product.name}</p>
// 							<p className="coffee-country">{product.country}</p>
// 							<p className="price">{product.price}$</p>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		);
// 	}
// }

// export default Page2Header;