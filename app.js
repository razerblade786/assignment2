const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

const user = {
    firstName: 'Suhaib',
    lastName: 'Siddiqui',
}
const title = 'INFR3120'
let section = ' '
app.use('/static', express.static('public'))
app.get('/', (req, res) => {
    res.render('index', {
        title: title,
        section: 'HOME'
    })
})
app.get('/aboutme', (req, res) => {
  res.render('./partials/aboutme', {
      title: title,
      section: 'ABOUT ME'
  })
})
app.get('/contact', (req, res) => {
    res.render('./partials/contact', {
        title: title,
        section: 'CONTACT'
    })
  })
  app.get('/projects', (req, res) => {
    res.render('./partials/projects', {
        title: title,
        section: 'PROJECT'
    })
  })
app.listen(port, () => {
console.log(`App listening at port ${port}`)

})