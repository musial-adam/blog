import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Markdown from 'react-markdown'

const ReadingItemsList = styled.ul`
  margin: 0;
`

const ReadingItem = styled.li`
  list-style: none;
  margin-bottom: 40px;
`

const ReadingItemLink = styled.a`
  display: inline-block;
  border-bottom: 1px solid transparent;
  text-decoration: none;
  color: ${({ theme }) => theme.accentLight};
  font-family: ${({ theme }) => theme.bodyFont};
  /* padding-bottom: 2px; */
  margin-bottom: 9px;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.accentLight};
  }
`

const ReadingItemDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 10px;
`

const ReadingItemDate = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.lightGrey2};
  font-family: ${({ theme }) => theme.headerFont};
  font-weight: 100;
  font-size: 14px;
`

const ReadingPage = ({
  data: {
    blog: { readingItems },
  },
}) => (
  <>
    <h1>Currently among my opened tabs</h1>
    <ReadingItemsList>
      {readingItems.map(item => (
        <ReadingItem key={item.url}>
          <ReadingItemLink
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </ReadingItemLink>
          <ReadingItemDescription>{item.description}</ReadingItemDescription>
          <ReadingItemDate>
            {new Date(item.dateAdded).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </ReadingItemDate>
        </ReadingItem>
      ))}
    </ReadingItemsList>
    {/* 
    <ReadingItem>
      <ReadingItemLink href="http://destroytoday.com/writings/burning-out-and-finding-stability/">
        Burning Out and Finding Stability
      </ReadingItemLink>
      <ReadingItemDescription>
        Jonnie Hallman shares the news that he’s joining Stripe with an open,
        honest account of his struggle with burnout and anxiety that preceded
        the decision.
      </ReadingItemDescription>
      <ReadingItemDate>06 Jun 2019</ReadingItemDate>
    </ReadingItem> */}
  </>
)

export default ReadingPage

export const readingPageQuery = graphql`
  query {
    blog {
      readingItems(orderBy: dateAdded_DESC) {
        title
        url
        description
        dateAdded
      }
    }
  }
`
