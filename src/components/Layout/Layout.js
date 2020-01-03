import React from 'react';
import classes from './Layout.css';

import Auxiliary from '../hoc/Auxiliary';

// const layout = (props) => (
// 	<Auxiliary>
// 		<div>ToolBar, Sidedrawer, Backdrop</div>

// 		<main>{props.children}</main>
// 	</Auxiliary>
// );

// const layout2 = (props) => (
// 	<Auxiliary>
// 		<div>Toolbar, Sidedrawrer, Backdrop</div>
// 		<main>{props.children}</main>
// 	</Auxiliary>
// );

// const layout3 = (props) => (
// 	<Auxiliary>
// 		<div>Toolbar, sidedrawer, backdrop</div>
// 		<main>{props.children}</main>
// 	</Auxiliary>
// );

// const layout5 = (props) => (
// 	<Auxiliary>
// 		<div>toolbar, sidebar, backdrop</div>
// 		<main>{props.children}</main>
// 	</Auxiliary>
// );

const layout = (props) => (
	<Auxiliary>
		<div>Toolbar, Sidedrawer, Backdrop</div>
		<main className={classes.Content}>{props.children}</main>
	</Auxiliary>
);
export default layout;
