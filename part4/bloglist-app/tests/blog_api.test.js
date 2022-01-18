const mongoose = require('mongoose')

const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [
    {
        "title":"A Complete Guide to Flexbox",
        "author":"Chris Coyier",
        "url":"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        "likes":'24'
    },
    {
        "title":"Defensive CSS",
        "author":"Ahmad Shadeed",
        "url":"https://ishadeed.com/article/defensive-css/#flexbox-wrapping",
        "likes":'12'
    }
]



beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()
  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()
})


test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('correct amount of blogs is returned', async () => {
    await api
        .get('/api/blogs')
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const contents = response.body.map(r => r.content)

    expect(contents).toHaveLength(2)
})

test('a valid blog can be added', async () => {

    const newBlog = {
        title: 'User-centric performance metrics',
        author: 'Philip Walton',
        url: 'https://web.dev/user-centric-performance-metrics/',
        likes: '2'
    }

    console.log(initialBlogs.length + 1)
    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const titles = response.body.map(r => r.title)

    expect(response.body).toHaveLength(initialBlogs.length + 1)
    expect(titles).toContain(
        'User-centric performance metrics'
    )
})

afterAll(() => {
  mongoose.connection.close()
})