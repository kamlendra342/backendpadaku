const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobId: { type: Number, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  job_link: String,
  seniority_level: String,
  employment_type: String,
  source: String,
  experience: String,
  company_url: String,
  companyImageUrl: String,
  postedDateTime: Date,
  min_exp: Number,
  max_exp: Number,
  country: String,
  companytype: String,
});

module.exports = mongoose.model('Job', jobSchema);