const fs = require('fs');
const router = require('express').Router();

router.get('/', (req, res) => {
	// Get data from file
	const cryptids = fs.readFileSync(__dirname + '/../cryptids.json');
	// Parse the JSON object from that data
	const cryptidData = JSON.parse(cryptids);
	// console.log(dinoData);
	res.render('cryptids/index', {
		myCryptids: cryptidData
	})
})

router.post('/', (req, res) => {
	console.log(req.body);
	const cryptids = fs.readFileSync(__dirname + '/../cryptids.json');
	var cryptidData = JSON.parse(cryptids);

	// Add to the dinosaurs array
	cryptidData.push(req.body);
	// Save the dinosaurs to the dinosaurs.json file
	fs.writeFileSync(__dirname + '/../cryptids.json', JSON.stringify(cryptidData));

	res.redirect('/cryptids');
})

router.get('/new', (req, res) => {
	res.render('cryptids/new');
})

router.get('/:idx', (req, res) => {
	const cryptids = fs.readFileSync(__dirname + '/../cryptids.json');
	var cryptidData = JSON.parse(cryptids);
	// get the idx value from the url parameters
	var cryptidIndex = parseInt(req.params.idx);
	res.render('cryptids/shows', {
		myCryptid: cryptidData[cryptidIndex]
	})
})

module.exports = router;