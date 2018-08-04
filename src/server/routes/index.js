const { getComments, postComment } = require('../controllers')
const { Router } = require('express')

const router = Router()
router.get('/', getComments);
router.post('/addcomment', postComment);

module.exports = router;
