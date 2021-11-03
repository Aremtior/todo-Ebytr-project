const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskController = require('./controllers/taskController');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', taskController.getAll);
app.post('/', taskController.create);
app.put('/:id', taskController.update);
app.delete('/:id', taskController.remove);

app.listen(PORT, () => {
  console.log(`servidor ouvindo na porta ${PORT}`);
});
