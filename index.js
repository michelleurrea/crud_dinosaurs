// Require in modules
const express = require('express');
const layout = require('express-ejs-layouts');

// Instantiate the express app
const app = express();

// Middleware and configs
app.set('view engine', 'ejs');

// Body parser middleware that puts the form data into req.body
app.use(express.urlencoded({extended: false}));

// Controller routes
app.use('/dinosaurs', require('./controllers/dinosaur'))
app.use('/cryptids', require('./controllers/cryptid'))

//Add in routes
app.get('/', (req, res) => {
	res.render('home');
})

app.get('/*', (req, res) => {
	res.render('404');
})

// Listen on a port
app.listen(3001, () => {
	console.log('Server is live @ port 3001');
})