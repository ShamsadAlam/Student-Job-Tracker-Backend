import { Job } from "../models/Job.js";

const createJob = async (req, res) => {
  try {
    const { company, role, status, appliedDate, link } = req.body;
    const job = await Job.create({
      company,
      role,
      status,
      appliedDate,
      link,
    });

    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getJobs = async (req, res) => {
  try {
    const { status, date } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (date) filter.appliedDate = { $gte: new Date(date) };

    const jobs = await Job.find(filter).sort({ appliedDate: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { createJob, getJobs, updateStatus, deleteJob };
