import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
<<<<<<< HEAD
import Blogs from './Blogs'

test('Renders title,author, likes but not url', () => {
    const blog = {
        title: 'A Complete Guide to Flexbox',
        author: 'Chris Coyier',
        url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
        likes: 24
    }

    const component = render(
        <Blogs blog={blog} />
    )

    expect(component.container).toHaveTextContent(
        'A Complete Guide to Flexbox by Chris Coyier'
    )

    expect(component.container).not.toHaveTextContent(
        'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
    )

    expect(component.container).toHaveTextContent(
        '24'
    )
=======
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
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8
})
