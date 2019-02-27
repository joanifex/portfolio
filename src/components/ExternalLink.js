import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
  display: block;
  text-align: center;
`;

const ExternalLink = ({ children, href }) => (
  <Link href={href} target="_blank">
    {children}
  </Link>
);

ExternalLink.propTypes = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
};

export default ExternalLink;
