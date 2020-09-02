'use strict';

var properties = require('../package.json')
var apartment = require('../service/apartment');

var controllers = {
   getApartments: function(req, res) {
    apartment.allApartments(req, res, function(err, apartments) {
        if (err)
            res.send(err);
        res.json(apartments);
    });
   },
   getApartment: function(req, res) {
    apartment.getApartment(req, res, function(err, apartment) {
        if (err)
            res.send(err);
        res.json(apartment);
    });
       },
    deleteApartment: function(req, res) {
        apartment.deleteApartment(req, res, function(err, apartment) {
            if (err)
                res.send(err);
            res.json(apartment);
        });
           },
    addApartment: function(req, res) {
            apartment.addApartment(req, res, function(err, apartment) {
                if (err)
                    res.send(err);
                res.json(apartment);
            });
               },
};

module.exports = controllers;