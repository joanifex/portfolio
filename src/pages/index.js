import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { Layout, Article, Wrapper, Button, SectionTitle } from '../components';

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
  grid-template-columns: 1fr min-content min-content;
  padding: 3rem 2rem 6rem 2rem;
`;

const FooterLink = styled.a`
  justify-self: ${props => props.justifySelf};
`;

const IndexPage = ({
  data: {
    allMdx: { edges: postEdges },
  },
}) => (
  <Layout>
    <Wrapper>
      <Hero>
        <h1>👋</h1>
        <p>I&apos;m Ian, a Front-End Engineer 💻</p>
        {/*
        <Link to="/contact">
          <Button big>📝{` `}Contact</Button>
        </Link>
        */}
      </Hero>
      <Content>
        <SectionTitle>Recent Projects</SectionTitle>
        {/*
        {postEdges.map(post => (
          <Article
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            categories={post.node.frontmatter.categories}
            key={post.node.fields.slug}
          />
        ))}
      */}
      </Content>
      <Footer>
        <FooterLink href="mailto:wright.ianb@gmail.com">
          wright.ianb@gmail.com
        </FooterLink>
        <FooterLink href="https://github.com/wrightianb">github</FooterLink>
        <FooterLink href="https://www.linkedin.com/in/wrightianb">
          linkedin
        </FooterLink>
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
          rawBody
        }
      }
    }
  }
`;
