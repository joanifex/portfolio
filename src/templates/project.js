import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import { Layout, Wrapper, Header, Subline } from '../components'
import config from '../../config'

const Content = styled.article`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  border-radius: 1rem;
  padding: 2rem 4.5rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  p {
    font-size: 1.1rem;
    letter-spacing: -0.003em;
    line-height: 1.58;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1rem;
    }
  }

  .prism-code {
    padding: 0.75rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: 16px;
  }
`

const Title = styled.h1`
  margin-bottom: 1rem;
`

const ProjectContent = styled.div`
  margin-top: 4rem;
`

const Project = ({ data: { mdx: postNode } }) => {
  const post = postNode.frontmatter

  return (
    <Layout customSEO>
      <Wrapper>
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <Title>{post.title}</Title>
          <Subline>
            {post.techs.map((tech, i) => (
              <React.Fragment key={tech}>
                {!!i && ', '}
                {tech}
              </React.Fragment>
            ))}
          </Subline>
          <ProjectContent>
            <MDXRenderer>{postNode.code.body}</MDXRenderer>
          </ProjectContent>
        </Content>
      </Wrapper>
    </Layout>
  )
}
export default Project

Project.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
}

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      excerpt
      frontmatter {
        title
        link
        techs
      }
    }
  }
`
