const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () =>
  connection()
    .then((db) => db.collection('tasks').find().toArray())
    .then((tasks) => tasks);

const create = async (task) =>
  connection().then((db) =>
    db.collection('tasks').insertOne({
      task,
      done: false,
    })
  );

const update = async (id, done) =>
  connection().then((db) =>
    db
      .collection('tasks')
      .updateOne({ _id: ObjectId(id) }, { $set: { done } })
  );

const remove = async (id) =>
  connection().then((db) =>
    db.collection('tasks').deleteOne({ _id: ObjectId(id) })
  );

module.exports = {
  getAll,
  create,
  update,
  remove,
};
