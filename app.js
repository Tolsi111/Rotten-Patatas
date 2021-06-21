const express = require('express')
const app = express();

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// app.get('/',(req,res) => {
//     res.send('Mega amice!')
// })
app.get('/', (req, res) => {
    res.render('home', { msg: 'Handlebars are Cool!' });
  })

app.listen(3000, () => {
    console.log('App listening to port 3000')
})