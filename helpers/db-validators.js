import Usuario from '../models/usuario.js'
import Empresa from '../models/empresa.js';

export const emailExiste = async ( email ) => {
    const existEmail =  await Usuario.findOne({ email: email })
    if(existEmail){
        throw new Error(`Email ${email} ya estpa registrado en la base de datos`);
    }
}

export const existeUsuarioPorId = async ( id ) => {
    const existUsuario =  await Usuario.findById( id )
    if( !existUsuario ){
        throw new Error(`Id ${id} No existe `);
    }
}
export const existeEmpresaPorId = async ( id ) => {
    const existeEmpresa =  await Empresa.findById( id )
    if( !existeEmpresa ){
        throw new Error(`Id ${id} No existe `);
    }
}
export const existeEmpresaPorNit = async ( nit ) => {
    const existeEmpresa =  await Empresa.findOne({nit: nit })
    if( existeEmpresa ){
        throw new Error(`Nit ${nit} ya se encuentra registrado `);
    }
}     
