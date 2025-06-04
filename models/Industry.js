const mongoose = require('mongoose');

const usecaseSchema = new mongoose.Schema({
  title: String,
  description: String,
  img: String,
  problem: String,
  impact: String,
  solution: String,
  ITInfrastructure: String,
  AIDevelopment: String,
  DataManagement: String,
  DataSecurity: String,
  SustainabilityIT: String
}, { _id: false });

const industrySchema = new mongoose.Schema({
  industry: { type: String, required: true, unique: true },
  title: String,
  tagline: String,
  usecases: [usecaseSchema],
  feature: [String]
});

module.exports = mongoose.model('Industry', industrySchema);
