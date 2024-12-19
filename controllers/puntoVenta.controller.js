import PuntoVenta from "../models/puntoVenta.js";
import Empresa from "../models/empresa.js";


export const getPuntoVenta = async ( req, res ) => {
    try {
        const puntosVenta = await PuntoVenta.find();

        res.status(200).json(puntosVenta);
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          mensaje: 'Hubo un error al obtener los datos de los puntos de venta'
        });
      }
    
};

export const getPuntoVentaById = async (req, res) => {
    try {
        
      const id = req.params.id
      const puntoVenta = await PuntoVenta.findById(id);

      if (!puntoVenta) {
        return res.status(404).json({ mensaje: 'Punto de venta no encontrado' });
      }

      res.status(200).json(puntoVenta);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          mensaje: 'Hubo un error al obtener los datos del punto de venta'
        });
    }
  };

  export const postPuntoVenta = async ( req, res ) => {
    try {
        const { nombre, direccion, empresaId } = req.body;

    
        const empresa = await Empresa.findById(empresaId);
        if (!empresa){
            return res.status(404).json({ mensaje: 'Empresa no encontrada' });
        } 


        const puntoVenta = new PuntoVenta({ nombre, direccion });
        await puntoVenta.save();

        
        empresa.puntosVenta.push({ puntoVentaId: puntoVenta._id });
        await empresa.save();

        res.status(201).json({ mensaje: 'Punto de venta creado exitosamente', puntoVenta });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          mensaje: 'Hubo un error al almacenar los datos del punto de venta'
        }); 
    }
  }

  export const updatePuntoVenta = async (req, res) => {
    try {
        const { nombre, direccion } = req.body;
        const id = req.params.id
        const puntoVenta = await PuntoVenta.findByIdAndUpdate(id,
          { nombre, direccion },
          { new: true }
        );
        if (!puntoVenta) {
            return res.status(404).json({ mensaje: 'Punto de venta no encontrado' });
        }
        res.status(200).json({ message: 'Punto de venta actualizado exitosamente', puntoVenta });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          mensaje: 'Hubo un error al actualizar los datos de la empresa'
        }); 
    }
  };


  export const deletePuntoVenta = async ( req, res) => {
    try {
        const puntoVenta = await PuntoVenta.findByIdAndDelete(req.params.id);
        if (!puntoVenta)  {
            return res.status(404).json({ mensaje: 'Punto de venta no encontrado' });
        } 
    
        
        await Empresa.updateMany(
          { 'puntosVenta.puntoVentaId': puntoVenta._id },
          { $pull: { puntosVenta: { puntoVentaId: puntoVenta._id } } }
        );
    
        res.status(200).json({ mensaje: 'Punto de venta eliminado exitosamente' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
              mensaje: 'Hubo un error deshabilitar la empresa'
            });
        }
  }
