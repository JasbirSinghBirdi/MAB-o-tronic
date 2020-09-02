'use strict';

const controller = require('./controller');

module.exports = function(app) {
    app.route('/allapartments')
       .get(controller.getApartments);
    app.route('/apartmentDetails/:id')
       .get(controller.getApartment);
    app.route('/deleteApartment/:id')
       .delete(controller.deleteApartment);
    app.route('/addApartment')
        .post(controller.addApartment);
};