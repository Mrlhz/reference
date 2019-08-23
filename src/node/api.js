const { subjects } = require('./data/movie.json')

console.log(subjects.length);

const port = 3000


const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', async (ctx) => {
  ctx.body = {
    router: {
      top: 'http://127.0.0.1:3000/v1/movie/top250',
      search: 'http://127.0.0.1:3000/v1/movie/search?q='
    }
  }
})


router.get('/v1/movie/top250', async (ctx) => {
  const query = ctx.request.query
  let { start=0, count=20} = query

  let movies = []

  movies = subjects.slice(start, start + count)

  ctx.body = {
    top: 'http://127.0.0.1/top250',
    count,
    start,
    msg: 'success',
    movies
  }
})

// /movie/search?q=肖申克的救赎&start=0&count=10
router.get('/v1/movie/search', async (ctx) => {
  const query = ctx.request.query
  let { start=0, count=20, q, tag } = query

  let movies = []

  if(!q) movies = subjects.slice(start, count)
  if(q) {
    movies = subjects.filter((item) => {
      return item.title.indexOf(q) !== -1
    })
  }
  ctx.body = {
    top: 'http://127.0.0.1/top250',
    count,
    start,
    msg: 'success',
    movies
  }
})


app.use(router.routes())
app.listen(port)
console.log('\033[42;30m DONE \033[0m Listening at\033[40;32m http://localhost:'+ port + '\033[0m ' + new Date().toLocaleString())
