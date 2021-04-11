import {h, Component} from 'preact';

import Router from './Router.jsx';
import Menu from './Menu.jsx';

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			showSpinner: true,
			path: window.location.pathname
		};
	}

	componentDidMount() {
		console.log('mounted!');
		setTimeout(() => {
			this.setState({showSpinner: false});
		}, 1000);
	}

	navigate (path) {
		this.setState({path});
		window.history.pushState({}, '', path);
	}

	render () {
		if (this.state.showSpinner) {
			return (
				<div class="spinner-wrap">
					<div class="spinner-border text-primary" style="width: 5rem; height: 5rem;" role="status"></div>
				</div>
			);
		} else {
			return (
				<div>
					<Menu navigate={this.navigate.bind(this)}/>
					<div style="padding-top: 4rem;">
						<Router path={this.state.path}/>
					</div>
				</div>
			);
		}
	}
}