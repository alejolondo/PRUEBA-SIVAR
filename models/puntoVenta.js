import { Schema, model } from "mongoose";


const PuntoVentaSchema = new Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true }
  });

  PuntoVentaSchema.methods.toJSON = function() {
    const { __v,  _id, ...punto } = this.toObject();
    punto.uid = _id;
    return punto

}

export default model('PuntoVenta', PuntoVentaSchema );