const express = require('express');
const router = express.Router();
const Controller= require("./../Controller/Controller");

router.get('/journal',Controller.getJournal);
router.post('/contact',Controller.postMassage);

module.exports = router;