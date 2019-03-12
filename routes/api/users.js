const router = require('express').Router();
const User = require('../../models/User');
const Event = require('../../models/Event');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send(users);
  } catch(err) {
    return res.status(400).send(err);
  }
});

router.post('/create', async (req, res) => {
  const { name, age, skills, specialty } = req.body;
  const saveUser = new User({ name, age, skills, specialty });
  try {
    const user = await saveUser.save()
    return res.status(200).send(user);
  } catch(err) {
    return res.status(400).send(err);
  }
});

/**
 * Implement after passport auth to use req.user object
 */
// router.post('/signup-for-event/:id', async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id);
//     event.participants.push(req.user.id);
//     const returnEvent = await event.save();
//     return res.status(200).send(returnEvent);
//   } catch(err) {
//     return res.status(400).send(err);
//   }
// });

module.exports = router;