const Reserva = require('../models/Reserva');
const reservaController = {};

reservaController.store = async function (req, res, next) {
    let reserva = new Reserva();
    reserva.nombre_reservacion=req.body.nombre_reservacion;
    reserva.numero_personas=req.body.numero_personas;
    reserva.fecha=req.body.fecha;
    reserva.id_usuario=req.body.id_usuario;
    
    try {
        await reserva.save();
        return res.status(200).json({ "message": "Reserva realizada" });
    } catch (err) {
        return res.status(500).json({ err: err, message: "Por favor revise sus datos" });
    }

}
module.exports = reservaController;