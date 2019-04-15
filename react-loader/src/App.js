import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			content: null,
			images: []
		}
		this.getPromise = this.getPromise.bind(this);
	}

	getPromise(url) {
		if (!url) {
			return Promise.reject();
		}

		const self = this;

		let promise = new Promise(function (resolve, reject) {
			let img = new Image(200, 300);
			img.src = url;

			img.onload = () => {
				setTimeout(() => {
					resolve(img);
					console.log(img)
				
					self.setState({
						loaded: true,
						content: "Loaded!",
						images: [...self.state.images, img]
					});
				}, 1500);
			}
			img.onerror = () => {
				setTimeout(() => {
					reject();
				}, 1500);
			}
		});

		return promise.then(function (img) {
			console.log('IMAGE LOADED');
			return img;
		})
	}

	handleClick = () => {
		let self = this;

		this.getPromise('https://cdn.filestackcontent.com/G33P8iuoRuinYep5O6dt').then(function(img) {
			console.log(self.state)
		}).catch(function (error) {
			self.setState({
				content: "Error Loading"
			});
			console.log('Error');
			// throw new Error(error);
		})

		if (!this.state.loaded) {
			this.setState({
				content: "Loading"
			});
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<button type="button" onClick={this.handleClick}>Load image</button>
					<div>{this.state.content}</div>
					<img src="loading.gif" width="50" height="50" alt="loading" style={{display: this.state.content === "Loading" ? 'block' : 'none' }}/>
					{/* <ul>{this.state.images.map(item => (
						<li key={item}>{item}</li>
					))}</ul> */}
				</header>
			</div>
		);
	}
}

export default App;
