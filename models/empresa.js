import { Schema, model } from "mongoose";

const EmpresaSchema = new Schema({
    nombre: { type: String, required: true },
    nit: { type: String, required: true, unique: true },
    status: { type: Boolean, default: true },
    puntosVenta: [
      {
        puntoVentaId: { type: Schema.Types.ObjectId, ref: 'PuntoVenta', required: true }
      }
    ]
  });

  EmpresaSchema.methods.toJSON = function() {
    const { __v , _id, ...empresa } = this.toObject();
    empresa.uid = _id;
    return empresa

}

  export default  model('Empresa', EmpresaSchema );