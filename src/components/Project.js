import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Subline from './Subline'

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`
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
`

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Project = ({ excerpt, role, slug, title }) => {
  const firstChar = title.charAt(0)
  return (
    <Post>
      <Title>
        <Initiale>{firstChar}</Initiale>
        <Link to={slug}>{title}</Link>
      </Title>
      <Subline>{role}</Subline>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  )
}

export default Project

Project.propTypes = {
  excerpt: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
