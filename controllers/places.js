const router = require('express').Router()

// router.get('/', (req, res) => {
//     res.render('GET /places')
// })
// GET /places

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/hr.jpeg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/hr2.jpeg'
      }];

    res.render('places/index', { places });
});

module.exports = router;
