import { Component } from 'react';

import './page2ProductCards.scss';

// const products = [
// 	{id: 1, name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", photo: "../../../images/image2/p4peac.png" },
// 	{id: 2, name: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "6.99$", photo: "../../../images/image1/62de.jpg" },
// 	{id: 3, name: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99$", photo: "../../../images/image1/62de.jpg" },
// 	{id: 4, name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", photo: "../../../images/image1/62de.jpg" },
// 	{id: 5, name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", photo: "../../../images/image1/62de.jpg" },
// 	{id: 6, name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", photo: "../../../images/image1/62de.jpg" }
// ];

// class CoffeeProduct extends Component {
// 	render() {
// 		return (
// 			<div>
// 				{products.map(product => (
//  					<div className="coffee-product" key={product.id}>
//  						<div className="block"></div>
// 							<div className="solimo-coffee box">
//  							<div className="solimo-coffee-img box-img">
// 							  <img src={product.photo} alt={product.name} />
// 						  </div>
// 							<p className="coffee-name">{product.name}</p>
//  							<p className="coffee-country">{product.country}</p>
//  							<p className="price">{product.price}$</p>
//  						</div>
//  					</div>
//  				))}
//  			</div>
// 		);
// 	}
// }

class CoffeeProduct extends Component {
	render() {
		return(
			<>
				<div className="buttons-block">
					<div className="">

					</div>
					<div className="buttons">

					</div>
				</div>
				<div className="coffee-product-cards">
					<div className="container-card">
						<div className="block-card"></div>
						<div className="aromistico-coffee box">
							<div className="aromistico-coffee-img box-img"></div>
							<p className="coffee-name">AROMISTICO Coffee 1 kg</p>
							<p className="coffee-country">Brazil</p>
							<p className="price">10.73$</p>
						</div>
					</div>
					<div className="container-card">
						<div className="block-card"></div>
						<div className="aromistico-coffee box">
							<div className="aromistico-coffee-img box-img"></div>
							<p className="coffee-name">AROMISTICO Coffee 1 kg</p>
							<p className="coffee-country">Brazil</p>
							<p className="price">10.73$</p>
						</div>
					</div>
					<div className="container-card">
						<div className="block-card"></div>
						<div className="aromistico-coffee box">
							<div className="aromistico-coffee-img box-img"></div>
							<p className="coffee-name">AROMISTICO Coffee 1 kg</p>
							<p className="coffee-country">Brazil</p>
							<p className="price">10.73$</p>
						</div>
					</div>
					<div className="container-card">
						<div className="block-card"></div>
						<div className="aromistico-coffee box">
							<div className="aromistico-coffee-img box-img"></div>
							<p className="coffee-name">AROMISTICO Coffee 1 kg</p>
							<p className="coffee-country">Brazil</p>
							<p className="price">10.73$</p>
						</div>
					</div>
					<div className="container-card">
						<div className="block-card"></div>
						<div className="aromistico-coffee-coffee box">
							<div className="aromistico-coffee-img box-img"></div>
							<p className="coffee-name">AROMISTICO Coffee 1 kg</p>
							<p className="coffee-country">Brazil</p>
							<p className="price">10.73$</p>
						</div>
					</div>
					<div className="container-card">
						<div className="block-card"></div>
						<div className="aromistico-coffee box">
							<div className="aromistico-coffee-img box-img"></div>
							<p className="coffee-name">AROMISTICO Coffee 1 kg</p>
							<p className="coffee-country">Brazil</p>
							<p className="price">10.73$</p>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default CoffeeProduct;