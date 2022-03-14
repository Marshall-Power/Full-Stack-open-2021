import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('Renders title and author but not url and likes', () => {
  const blog = {
    title: 'A Complete Guide to Flexbox',
    author: 'Chris Coyier',
    url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    likes: 24
  }

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'A Complete Guide to Flexbox by Chris Coyier'
  )

  expect(component.container).not.toHaveTextContent(
    'https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 24'
  )
})
