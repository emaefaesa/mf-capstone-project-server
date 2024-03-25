const router = require('express').Router();
const {
  listAllCats,
  getOneCat,
  createOneCat,
  editOneCat,
  deleteOneCat,
} = require('../controllers/cat.controller');

router.get('/list', listAllCats);
router.get('/getOne/:cat_id', getOneCat);

router.post('/create', createOneCat);

router.put('/edit/:cat_id', editOneCat);

router.delete('/delete/:cat_id', deleteOneCat);

module.exports = router;
