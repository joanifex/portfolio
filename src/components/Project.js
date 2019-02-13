import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Subline from './Subline';

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Project = ({ excerpt, link, title, techs }) => {
  return (
    <Post>
      <Title>
        <a href={link}>{title}</a>
      </Title>
      <Subline>
        {techs.map((tech, i) => (
          <React.Fragment key={tech}>
            {!!i && ', '}
            {tech}
          </React.Fragment>
        ))}
      </Subline>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  );
};

export default Project;

Project.propTypes = {
  excerpt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
};