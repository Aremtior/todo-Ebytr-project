const Task = require('../models/Task');

const getAll = async (_req, res) => {
  const tasks = await Task.getAll();

  res.status(200).json(tasks);
};

const create = async (req, res) => {
  await Task.create(req.body.task);
  res.status(201).end();
};

const update = async (req, res) => {
  await Task.update(req.params.id, req.body.done);
  res.status(200).end();
};

const remove = async (req, res) => {
  await Task.remove(req.params.id);
  res.status(200).end();
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
