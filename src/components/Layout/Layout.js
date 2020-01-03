import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';

const layout = (props) => (
	<Auxiliary>
		<div>ToolBar, Sidedrawer, Backdrop</div>

		<main>{props.childrenprops}</main>
	</Auxiliary>
);

export default layout;
