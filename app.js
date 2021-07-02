const express = require('express')
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });

const Review = mongoose.model('Review', {
  title: String,
  movieTitle: String,
  reviewer: String
});

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// app.get('/',(req,res) => {
//     res.send('Mega amice!')
// })

//Mock array of projects
let reviews =[
  { title: "Great Review", movieTitle: "Ice age 3", reviewer: "Andrei"},
  { title: "Review pasta medie", movieTitle: "Jurassic park 3", reviewer: "Alt Andrei"},
  { title: "Bad Review", movieTitle: "Titanic", reviewer: "Ceva femeie"}
]
///INDEX
app.get('/',(req,res) => {
  res.render('reviews-index',{reviews: reviews})
})


app.listen(3000, () => {
    console.log('App listening to port 3000')
})