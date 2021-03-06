const router = require('express').Router();
const farmers = require('../controllers/farmers');
const auth = require('../controllers/auth');
const users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.route('/farmers')
  .get(farmers.index)
  .post(farmers.create);

router.route('/farmers/:id')
  .get(farmers.show)
  .put(farmers.update)
  .delete(farmers.delete);

router.route('/farmers/:id/donations')
  .post(secureRoute, farmers.addDonation);

router.route('/farmers/:id/comments')
  .post(secureRoute, farmers.addComment);

router.route('/farmers/:id/comments/:commentId')
  .delete(farmers.deleteComment);


router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users/adopt')
  .put(secureRoute, users.adopt);

router.route('/users/:id')
  .get(users.show)
  .put(users.update);

router.route('/users')
  .get(users.index);

router.all('/*', (req, res) => res.notFound());


module.exports = router;
