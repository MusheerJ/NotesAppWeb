const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./router/routes');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log(`listening on port no ${port}`)
});

app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');



//adding routes
app.use('/', routes);