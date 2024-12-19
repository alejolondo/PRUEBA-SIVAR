import bcryptjs from 'bcryptjs'
import Usuario from '../models/usuario.js'
import { generarJWT } from '../helpers/generar-jwt.js'

export const login = async (req, res ) =>{

    const {email, password} = req.body;

    try {
    
    const usuario = await Usuario.findOne({ email });
    
    if ( !usuario ){
        return res.status(400).json({
            mensaje: 'No se encontró ningún usuario con el email proporcionado'
        })
    } 

    
    if ( !usuario.status ){
        return res.status(400).json({
            mensaje: 'Usuario desahabilitado '
        })
    }

    
    const validPassword = bcryptjs.compareSync(password, usuario.password)
    if(!validPassword){
        return res.status(400).json({
            mensaje: 'Password incorrecta'
        })
    }
    
    const token = await generarJWT( usuario.id )


    res.status(200).json({
       usuario,
       token
    })
        
    } catch (error) {
        res.status(500).json({
            msg: 'Something was wrong, please contact the administrator'
        })
    }
    

}