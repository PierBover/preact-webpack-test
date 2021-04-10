import {h} from 'preact';

export default function Menu () {
	return (
		<nav class="navbar navbar-expand navbar-dark bg-primary fixed-top">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">Router Demo App</a>
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="/about">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/nested">Nested</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/hello/Pepito">Hello <small>(path params)</small></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/private">Private route</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/something">Error</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/login">Login</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}