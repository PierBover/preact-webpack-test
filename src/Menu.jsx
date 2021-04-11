import {h} from 'preact';

export default function Menu (props) {

	function onClick (event) {
		event.preventDefault();
		props.navigate(event.target.pathname);
	}

	return (
		<nav class="navbar navbar-expand navbar-dark bg-primary fixed-top">
			<div class="container-fluid">
				<a class="navbar-brand" href="/" onClick={onClick}>Router Demo App</a>
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="/about" onClick={onClick}>About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/contact" onClick={onClick}>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}