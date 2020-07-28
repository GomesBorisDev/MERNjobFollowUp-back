const express = require('express');
const router = express.Router();

const appsCtrl = require('../controllers/appsController');

router.get('/', appsCtrl.getAllApps);
router.post('/', appsCtrl.createApplication);
router.get('/:id', appsCtrl.getOneApplication);
router.put('/:id', appsCtrl.updateApplication);
router.delete('/:id', appsCtrl.deleteApplication);

module.exports = router;