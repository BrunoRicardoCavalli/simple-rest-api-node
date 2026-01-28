const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoaController');

router.get('/', pessoaController.findAll);
router.post('/', pessoaController.create);
router.put('/:id', pessoaController.update);
router.delete('/:id', pessoaController.delete);

module.exports = router;
