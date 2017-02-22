import React from 'react';

const Nav = props =>
  (
    <nav>
    	<button onClick={() => props.onLinkClick('home')}>Home</button>
    	<button onClick={() => props.onLinkClick('about')}>About</button>
    </nav>
  );

export default Nav;