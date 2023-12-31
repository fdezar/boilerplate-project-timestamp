// setup
var express = require('express');
var app = express();

// FCC Test
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); 

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const isInvalidDate = (date) => date.toUTCString() === "Invalid Date";

app.get("/api/:date", (req, res) => {
  let date = new Date(req.params.date);

  if(isInvalidDate(date)) {
    date = new Date(+req.params.date); 
  }

  if(isInvalidDate(date)) {
    res.json({
      error: "Invalid Date"
    });
    return;
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

app.get("/api", (req, res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString()
  });
});
  

// port 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// http://expressjs.com/en/starter/static-files.html
// http://expressjs.com/en/starter/basic-routing.html