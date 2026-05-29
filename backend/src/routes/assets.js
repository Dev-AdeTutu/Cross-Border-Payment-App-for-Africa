const router = require('express').Router();
const { getAssetMetadata, getAssetByParams } = require('../controllers/assetController');

router.get('/AFRI/info', getAssetMetadata);
router.get('/:code/:issuer', getAssetByParams);

module.exports = router;
