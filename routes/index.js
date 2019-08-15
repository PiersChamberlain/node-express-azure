const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {

  if (global.env_name.toLowerCase().indexOf('prod') !== 0){
    bannerhtml = '<section class="banner">'+global.env_name+'</section>'
  }

  res.render('index', {
    title: 'Welcome to Contoso!', 
    banner: bannerhtml  
  });
});

module.exports = router;