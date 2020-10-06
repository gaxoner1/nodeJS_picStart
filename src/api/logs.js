const { Router } = require ('express');

const router = Router();

router.get('/', (res, req) => {
  res.json({
    message: 'log router'
  })
});

module.exports = router;
