
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const Job = require('./JobsSchema.js');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use('/uploads', express.static('uploads'));

console.log(process.env.MONGODB_URI,"🫡")

const MONGODB_URI = `${process.env.MONGODB_URI}`;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Get jobs with pagination and filters
app.get('/api/jobs', async (req, res) => {
  try {
    const { location, page = 1, limit } = req.query;
    const query = {};
    
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }
    
    const jobs = await Job.find(query)
      .sort({ postedDateTime: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .select('-__v -applications');
      
    const total = await Job.countDocuments(query);
    
    res.json({
      jobs,
      total,
      currentPage: Number(page),
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Import JSON data
app.post('/api/import', async (req, res) => {
  try {
        const jobs = req.body;
        const formattedJobs = jobs.map(job => ({
        jobId: typeof(job['Job ID (Numeric)'])==='string' ? Number(job['Job ID (Numeric)']) : job['Job ID (Numeric)']['$numberLong'] ,
        ...job,
            company_url: typeof job.company_url === 'string' ? job.company_url : String(job.company_url || ''),
            companyImageUrl: typeof job.companyImageUrl === 'string' ? job.companyImageUrl : String(job.companyImageUrl || ''),
        postedDateTime: new Date(job.postedDateTime.$date)
        }));
    
        await Job.deleteMany({});
        await Job.insertMany(formattedJobs);
    
    res.json({ message: 'Data imported successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));