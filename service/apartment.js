var request = require('request');
const DB=require('../dao');


var apartment = {
   allApartments: function(req, res) {
    DB.connect();
    DB.query("select * from apartment",function (error, response) {
        if(error)
        {
            res.send(error);
        }
        else{
            if(response.rowCount!=0)
            {
               res.send(response);
            }
            else{
                console.log('No data found');
            }
        }
       });

   },
   getApartment: function(req, res) {
    let apt_id=req.params.id;
    DB.connect();
    DB.query("select * from apartment where apartment_number=?",[apt_id],function (error, response) {
        if(error)
        {
            res.send(error);
        }
        else{
            if(response.rowCount!=0)
            {
               res.send(response);
            }
            else{
                console.log('No data found');
            }
        }
       });
   },
    //-------------------------------Search an Apartment-------------------------------------------------------------
    searchApartments: function(req, res) {
        let apt_status=req.body.apt_status;
        let apt_type=req.body.apt_type;
        let apt_floor=req.body.apt_floor;
        let apt_price=req.body.apt_price;
        let apt_size=req.body.apt_size;
        DB.connect();
    
        if(apt_type==='' && apt_status!=='' && apt_floor!==0){
        DB.query("select * from apartment where apartment_floor=? and apartment_status=? and apartment_size<=?",[apt_floor, apt_status, apt_size],function (error, response) {
            if(error)
            {
                res.send(error);
            }
            else{
                if(response.rowCount!=0)
                {
                   res.send(response);
                }
                else{
                    console.log('No data found');
                }
            }
           });
        }
        else if (apt_type==='' && apt_status==='' && apt_floor!==0) {
            DB.query("select * from apartment where apartment_floor=? and apartment_size<=?",[apt_floor, apt_size],function (error, response) {
                if(error)
                {
                    res.send(error);
                }
                else{
                    if(response.rowCount!=0)
                    {
                       res.send(response);
                    }
                    else{
                        console.log('No data found');
                    }
                }
               });
            }
            else if(apt_type==='' && apt_status!=='' && apt_floor===0){
                DB.query("select * from apartment where apartment_status=? and apartment_size<=?",[apt_status, apt_size],function (error, response) {
                    if(error)
                    {
                        res.send(error);
                    }
                    else{
                        if(response.rowCount!=0)
                        {
                           res.send(response);
                        }
                        else{
                            console.log('No data found');
                        }
                    }
                   });
            }
            else if(apt_type!=='' && apt_status==='' && apt_floor===0){
                DB.query("select * from apartment where apartment_type=? and apartment_size<=?",[apt_type, apt_size],function (error, response) {
                    if(error)
                    {
                        res.send(error);
                    }
                    else{
                        if(response.rowCount!=0)
                        {
                           res.send(response);
                        }
                        else{
                            console.log('No data found');
                        }
                    }
                   });
            }
            else if(apt_type!=='' && apt_status==='' && apt_floor!==0){
                DB.query("select * from apartment where apartment_floor=? and apartment_type=? and apartment_size<=?",[apt_floor, apt_type, apt_size],function (error, response) {
                    if(error)
                    {
                        res.send(error);
                    }
                    else{
                        if(response.rowCount!=0)
                        {
                           res.send(response);
                        }
                        else{
                            console.log('No data found');
                        }
                    }
                   });
            }
            else if(apt_type!=='' && apt_status!=='' && apt_floor===0){
                DB.query("select * from apartment where apartment_type=? and apartment_status=? and apartment_size<=?",[apt_type, apt_status, apt_size],function (error, response) {
                    if(error)
                    {
                        res.send(error);
                    }
                    else{
                        if(response.rowCount!=0)
                        {
                           res.send(response);
                        }
                        else{
                            console.log('No data found');
                        }
                    }
                   });
            }
            else if(apt_type!=='' && apt_status!=='' && apt_floor!==0){
                DB.query("select * from apartment where apartment_floor=? and apartment_status=? and apartment_type=? and apartment_size<=?",[apt_floor, apt_status, apt_type, apt_size],function (error, response) {
                    if(error)
                    {
                        res.send(error);
                    }
                    else{
                        if(response.rowCount!=0)
                        {
                           res.send(response);
                        }
                        else{
                            console.log('No data found');
                        }
                    }
                   });
            }
            else{
                DB.query("select * from apartment",function (error, response) {
                    if(error)
                    {
                        res.send(error);
                    }
                    else{
                        if(response.rowCount!=0)
                        {
                           res.send(response);
                        }
                        else{
                            console.log('No data found');
                        }
                    }
                   });
    
            }
       },
   deleteApartment: function(req, res) {
    let apt_id=req.params.id;
    DB.connect();
    DB.query("delete from apartment where apartment_number=?",[parseInt(apt_id)],function (error, response) {
        if(error)
        {
            res.send(error);
        }
        else{
               res.send(response);

        }
       });
   },
   addApartment: function(req, res) {
    let apt_desc=req.body.descrip;
    let apt_floor=req.body.floor;
    let apt_type=req.body.type;
    let apt_status=req.body.status;
    let apt_size=req.body.size;
    let apt_floor_plan=req.body.floorPlan;
    let photo_1=req.body.photo1;
    let photo_2=req.body.photo2;
    let photo_3=req.body.photo3;
    let photo_4=req.body.photo4;
    DB.connect();
    DB.query("insert into apartment(apartment_description, apartment_floor, apartment_type, apartment_status, apartment_size, apartment_floor_plan, photo_1, photo_2, photo_3, photo_4) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[apt_desc, apt_floor, apt_type, apt_status, apt_size, apt_floor_plan, photo_1, photo_2, photo_3, photo_4],function (error, response) {
        if(error)
        {
            res.send(error);
        }
        else{
               res.send(response);

        }
       });
   },
};

module.exports = apartment;