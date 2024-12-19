import {Router} from 'express';
import { check } from 'express-validator';
import * as puntoVentaController from '../controllers/puntoVenta.controller.js'
import { validarJWT } from '../middlewares/validar-jwt.js'
import { validarCampos } from '../middlewares/validar-campos.js';

const router = Router()

router.get('/', [validarJWT], puntoVentaController.getPuntoVenta )
router.get('/:id',[validarJWT], puntoVentaController.getPuntoVentaById  )

router.post('/',  [
    validarJWT,
    check('nombre', 'El nombre es un campo requerido').not().isEmpty(),
    check('direccion', 'la direccion es un campo requerido').not().isEmpty(),
    validarCampos
    ], 
    puntoVentaController.postPuntoVenta);

router.put('/:id', [
    validarJWT,
    check('id', 'Id is not a Mongo Id Valid').isMongoId(),
    validarCampos
    ], 
   puntoVentaController.updatePuntoVenta);

router.delete('/:id', [
    validarJWT,
    check('id', 'Id is not a Mongo Id Valid').isMongoId(),
    validarCampos
    ],
    puntoVentaController.deletePuntoVenta)




export default router;