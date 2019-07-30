var mongoose = require('mongoose');

const ProfilSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Firstname : String,
    Lastname : { type:String,required:true } 
});

module.exports=mongoose.model('Profil',ProfilSchema);
