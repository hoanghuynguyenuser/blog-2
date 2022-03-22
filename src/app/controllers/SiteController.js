const Course = require('../models/Course');
class SiteController {
    //[GET] /home
    home(req, res) {
        // res.render('home');
        // res.json({
        //     name: 'test'
        // });

        Course.find({}, function(err, courses) {
            if (!err) {res.json(courses)}
            else { res.status(400).json({error: 'ERROR'}) }
            
        });

    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

// Tạo ra một instance của NewsController và export ra ngoài
