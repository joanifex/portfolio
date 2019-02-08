import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { Layout, Wrapper, Button, Project, SectionTitle } from '../components';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
  }
`;

const Footer = styled.footer`
  display: grid;
  grid-column: 2;
  grid-gap: 1rem;
  grid-template-columns: min-content 1fr min-content min-content;
  padding: 3rem 2rem 6rem 2rem;
`;

const IndexPage = ({
  data: {
    allMdx: { edges: projectEdges },
  },
}) => (
  <Layout>
    <Wrapper>
      <Hero>
        <h1>Hi</h1>
        <p>I&apos;m Ian, a Front-End Engineer</p>
      </Hero>
      <Content>
        <SectionTitle>Recent Projects</SectionTitle>
        {projectEdges.map(project => (
          <Project
            excerpt={project.node.excerpt}
            link={project.node.frontmatter.link}
            title={project.node.frontmatter.title}
            techs={project.node.frontmatter.techs}
          />
        ))}
      </Content>
      <Footer>
        <a href="mailto:wright.ianb@gmail.com">wright.ianb@gmail.com</a>
        <div />
        <a href="https://github.com/wrightianb">github</a>
        <a href="https://www.linkedin.com/in/wrightianb">linkedin</a>
      </Footer>
    </Wrapper>
  </Layout>
);
export default IndexPage;
IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};
export const IndexQuery = graphql`
  query IndexQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            link
            techs
          }
          excerpt
        }
      }
    }
  }
`;
