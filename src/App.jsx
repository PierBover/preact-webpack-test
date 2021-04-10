import {h, Component} from 'preact';

import Menu from './Menu.jsx';

export default class App extends Component {

	constructor() {
		super();
		this.state = {showSpinner: true};
	}

	componentDidMount() {
		console.log('mounted!');
		setTimeout(() => {
			this.setState({showSpinner: false});
		}, 1000);
	}

	render () {
		const date = new Date();
		const message = typeof window === 'undefined' ? 'Server rendered at: ' + date : 'Hydrated at: ' + date;

		if (this.state.showSpinner) {
			return (
				<div class="spinner-wrap">
					<div class="spinner-border text-primary" style="width: 5rem; height: 5rem;" role="status"></div>
				</div>
			);
		} else {
			return (
				<div>
					<Menu/>
					<div style="padding-top: 4rem;">
						<h1>Home</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor diam cursus ligula tristique bibendum. Aliquam at erat quis tellus adipiscing tempus. Cras sed rutrum velit. Curabitur vel lacus eget erat tincidunt fringilla nec in ante. Pellentesque lacinia tellus nec neque tempus fermentum. Pellentesque ligula arcu, auctor at sagittis id, imperdiet eget tortor. Pellentesque imperdiet tempus risus non condimentum. Phasellus ut venenatis turpis. Fusce tincidunt nulla sit amet elit lacinia id consequat eros lacinia. Phasellus ut justo velit. Aenean dignissim, nunc vitae molestie blandit, mi diam vehicula ligula, nec vehicula velit sem eu urna. Suspendisse potenti.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor diam cursus ligula tristique bibendum. Aliquam at erat quis tellus adipiscing tempus. Cras sed rutrum velit. Curabitur vel lacus eget erat tincidunt fringilla nec in ante. Pellentesque lacinia tellus nec neque tempus fermentum. Pellentesque ligula arcu, auctor at sagittis id, imperdiet eget tortor. Pellentesque imperdiet tempus risus non condimentum. Phasellus ut venenatis turpis. Fusce tincidunt nulla sit amet elit lacinia id consequat eros lacinia. Phasellus ut justo velit. Aenean dignissim, nunc vitae molestie blandit, mi diam vehicula ligula, nec vehicula velit sem eu urna. Suspendisse potenti.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor diam cursus ligula tristique bibendum. Aliquam at erat quis tellus adipiscing tempus. Cras sed rutrum velit. Curabitur vel lacus eget erat tincidunt fringilla nec in ante. Pellentesque lacinia tellus nec neque tempus fermentum. Pellentesque ligula arcu, auctor at sagittis id, imperdiet eget tortor. Pellentesque imperdiet tempus risus non condimentum. Phasellus ut venenatis turpis. Fusce tincidunt nulla sit amet elit lacinia id consequat eros lacinia. Phasellus ut justo velit. Aenean dignissim, nunc vitae molestie blandit, mi diam vehicula ligula, nec vehicula velit sem eu urna. Suspendisse potenti.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor diam cursus ligula tristique bibendum. Aliquam at erat quis tellus adipiscing tempus. Cras sed rutrum velit. Curabitur vel lacus eget erat tincidunt fringilla nec in ante. Pellentesque lacinia tellus nec neque tempus fermentum. Pellentesque ligula arcu, auctor at sagittis id, imperdiet eget tortor. Pellentesque imperdiet tempus risus non condimentum. Phasellus ut venenatis turpis. Fusce tincidunt nulla sit amet elit lacinia id consequat eros lacinia. Phasellus ut justo velit. Aenean dignissim, nunc vitae molestie blandit, mi diam vehicula ligula, nec vehicula velit sem eu urna. Suspendisse potenti.</p>
					</div>
				</div>
			);
		}
	}
}