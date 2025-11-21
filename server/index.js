const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { generateCourseFromJamUrl } = require('./mockJamProcessor');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let courses = [];

app.get('/api/courses', (req,res)=>{
  res.json(courses)
})

app.post('/api/generate', (req,res)=>{
  const { jamUrl } = req.body;
  if(!jamUrl) return res.status(400).json({error:'missing jamUrl'});
  try {
    const c = generateCourseFromJamUrl(jamUrl);
    if(c.topics) c.description += ' — Topics: ' + c.topics.join(' | ');
    courses.unshift(c);
    res.json(c);
  } catch(e) {
    res.status(500).json({error:'invalid url'});
  }
})

app.listen(3000, ()=>console.log('Server running on port 3000'));
