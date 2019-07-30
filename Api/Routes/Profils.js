var express= require('express');
var router = express.Router();
var Profil = require('../Modules/ProfilDb');
const mongoose=require('mongoose');

router.get('/',function(req,res,next){
    Profil.find()
    .exec()
    .then(function(allprofil){
        console.log(allprofil);
        res.status(200).json(allprofil);
    })

    .catch(function(err){
        console.log(err);
            res.status(404).json({
                errormessage:err
            });
            
        });   
});

router.post('/',function(req,res,next){
    const NewProfil =  new Profil({
        _id: new mongoose.Types.ObjectId(),
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname      
    });
    NewProfil.save().then({
        function(result) {
           
            console.log(result);
        }
    }).catch(function(err){
        console.log(err);
    });
    res.status(200).json({
        message:'New Profil Created',
        Profil: NewProfil
    });
    
});

router.get('/:profilId',function(req,res,next){
   const Id = req.params.profilId;
   Profil.findById(Id)
   .exec()
   .then(function(Ourprofil){
       res.status(200).json(Ourprofil);

   })
   .catch(function(err){
       res.status(404).json({
           error:err
       });
   });
   

});
router.delete('/:profilId',function(req,res,next){
    const Id = req.params.profilId;
    Profil.remove({_id:Id})
    .exec()
    .then(
        res.status(200).json({
            message:'Profil removed'
        }))
        .catch(function(err){
            res.status(404).json({
                messageError:err
        });
   
    });
});
 router.patch('/:profilId',function(req,res,next){
     const Id = req.params.profilId;
      Profil.findById(Id,function(err , ourprofil){
        if (!ourprofil) {
            res.status(404).send('data not found');
        }
        else
            ourprofil.Firstname=req.body.Firstname;
            ourprofil.Lasttname = req.body.Lastname;
            ourprofil.save().then(ourprofil=>{
               res.json('updated');
            })
      
            .catch(function(err){
              res.status(404).json({
                 messageError:err
         });
          });



 });
  });










module.exports=router;







// router.post('/Update/:profilId',function(req,res,next){
//     const Id = req.params.profilId;
//     var DataUpdated = {};
//     for( const ops of req.body){
//         DataUpdated[ops.propName]=ops.value;
//     }
//     Profil.update({_id:Id},{$set:DataUpdated}).exec()
//     .then(function(Updateddata){
//         res.status(200).json(Updateddata);
//     })
//     .catch(function(err){
//         res.status(404).json(err);
//     });


// });

