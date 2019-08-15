const express = require('express');
const router = express.Router();

/* GET contact page. */
router.get('/', (req, res) => {

  if (global.env_name.toLowerCase().indexOf('prod') !== 0){
    bannerhtml = '<section class="banner">'+global.env_name+'</section>'
  }

  res.render('contact', {
    title: 'Contact Us', 
    stylesheet: 'assets/css/main.css', 
    banner: bannerhtml  
  });

});

module.exports = router;