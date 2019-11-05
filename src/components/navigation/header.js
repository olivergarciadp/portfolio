import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Navigator from './navigator';

// ...

const Header = ({ siteTitle }) => (
	<header>
		<Navigator />
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
