const { Router } = require ('express');

const LogEntry = (require('../models/entries'))
const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'log router'
  })
});

router.post('/',  async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const newEntry = await logEntry.save();
    res.json(newEntry);
  } catch (error) {
    next(error);
  }
 });

module.exports = router;
