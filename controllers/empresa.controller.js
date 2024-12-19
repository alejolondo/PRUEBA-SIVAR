import Empresa from "../models/empresa.js";


export const getEmpresas = async ( req, res ) => {
    try {
        const empresas = await Empresa.find().populate('puntosVenta.puntoVentaId');
        res.status(200).json(empresas);
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          mensaje: 'Hubo un error al obtener los datos de las empresas'
        });
      }
    
};

export const getEmpresaById = async (req, res) => {
    try {
        
      const id = req.params.id
      const empresa = await Empresa.findById(id).populate('puntosVenta.puntoVentaId');

      if (!empresa) {
        return res.status(404).json({ mensaje: 'Empresa no encontrada' });
      }

      res.status(200).json(empresa);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          mensaje: 'Hubo un error al obtener los datos de la empresa'
        });
    }
  };

  export const postEmpresa = async ( req, res ) => {
    try {
        const { nombre, nit } = req.body;

        const empresa = new Empresa({ nombre, nit });

        await empresa.save();
        res.status(201).json({ 
            mensaje: 'Empresa creada exitosamente',
             empresa 
            });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
          mensaje: 'Hubo un error al almacenar los datos de la empresa'
        }); 
    }
  }

  export const updateEmpresa = async (req, res) => {
    try {
      const { nombre, nit } = req.body;
      const empresa = await Empresa.findByIdAndUpdate(req.params.id,
        { nombre, nit },
        { new: true }
      );

      if (!empresa) {
        return res.status(404).json({ mensaje: 'Empresa no encontrada' });
      }
      res.status(200).json({ mensaje: 'Empresa actualizada exitosamente', empresa });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          mensaje: 'Hubo un error al actualizar los datos de la empresa'
        }); 
    }
  };


  export const deleteEmpresa = async ( req, res) => {
     try {
            const { id } = req.params;
        
            const empresa = await Empresa.findByIdAndUpdate(id, { status: false } );
      
            return res.status(200).json( {mensaje: 'Empresa deshabilitada exitosamente'} );
        } catch (error) {
            console.error(error);
            return res.status(500).json({
              mensaje: 'Hubo un error deshabilitar la empresa'
            });
        }
  }

