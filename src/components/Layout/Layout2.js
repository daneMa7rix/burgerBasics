import React from 'react';
import Auxiliary2 from '../hoc/Auxiliary2';

const layout = (props) => (
	<Auxiliary2>
		<div>Toolbar, Sidedrawer</div>
		<main>{props.children}</main>
	</Auxiliary2>
);

export default layout;
