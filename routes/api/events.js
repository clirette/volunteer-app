const router = require('express').Router();
const Event = require('../../models/Event');

router.get('/', (req, res) => {
  Event.find()
  .populate('participants')
  .exec((err, events) => {
    if (err) throw err; 
    return res.status(200).send(events)
  });
});

router.post('/create', async (req, res) => {
  const { name, description, participants } = req.body;
  const saveEvent = new Event({ name, description, participants });
  try {
    const events = await saveEvent.save();
    return res.status(200).send(events);
  } catch(err) {
    return res.status(400).send(err);
  }
});

module.exports = router;