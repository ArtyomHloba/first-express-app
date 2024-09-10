const { v4: uuidv4 } = require('uuid')

const tasks = [
  {
    id: '1',
    title: 'Зробити домашку'
  },
  {
    id: uuidv4(),
    title: 'Поїсти'
  },
  {
    id: uuidv4(),
    title: 'Прогулка з собакою'
  },
  {
    id: uuidv4(),
    title: 'Поспати'
  }
]

module.exports.createTasks = (req, res) => {
  const { body } = req
  tasks.push({ ...body, id: uuidv4() })

  res.status(201).send(tasks[tasks.length - 1])
}

module.exports.getTasks = (req, res) => {
  res.status(200).send(tasks)
}

module.exports.getTaskById = (req, res) => {
  const { id } = req.params

  const foundTask = tasks.find(t => t.id === id)

  if (!foundTask) {
    return res.status(404).send('Task not found')
  }

  res.status(200).send(foundTask)
}

module.exports.updateTaskById = (req, res) => {
  const {
    body,
    params: { id }
  } = req

  const foundTaskIndex = tasks.findIndex(t => t.id === id)

  if (foundTaskIndex === -1) {
    return res.status(404).send('Task not found')
  }

  tasks[foundTaskIndex] = { ...tasks[foundTaskIndex], ...body }
  res.status(200).send(tasks[foundTaskIndex])
}

module.exports.deleteTaskById = (req, res) => {
  const { id } = req.params

  const foundTaskIndex = tasks.findIndex(t => t.id === id)

  if (foundTaskIndex === -1) {
    return res.status(404).send('Task not found')
  }

  tasks.splice(foundTaskIndex, 1)
  res.status(204).end()
}
