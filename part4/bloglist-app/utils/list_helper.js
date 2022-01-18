const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
  }

const dummy = (blogs) => {
    return 1
}

const totalLikes = blogs => {
    const reducer = (sum, item) => {
        return sum + item.likes
    }

    const likes = blogs.reduce(reducer, 0)
    
    return blogs.length === 0
        ? 0
        : likes
}

const favoriteBlog = blogs => {
    
    const mostLikes = blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog);
    
    return mostLikes
}
  
module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    usersInDb
}