const mongoose =require("mongoose");
const bcrypt=require("bcrypt-nodejs")
const {Schema}=mongoose;

const reservaSchema = new Schema({
    id_usuario: String,
    nombre_reservacion:String,
    numero_personas:String,
    fecha:String
});
module.exports = mongoose.model('reserva',reservaSchema);