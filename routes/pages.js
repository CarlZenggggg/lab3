console.log("exported the module");
const PagesController = require('../controllers/PagesController');

module.exports = router => {
    router.get('/', PagesController.home);

    router.get('/about', PagesController.about);

    router.get('/contact', PagesController.contact);
};