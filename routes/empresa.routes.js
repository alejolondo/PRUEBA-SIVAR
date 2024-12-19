import {Router} from 'express';
import { check } from 'express-validator';
import { existeEmpresaPorNit, existeEmpresaPorId } from '../helpers/db-validators.js';
import * as empresaController from '../controllers/empresa.controller.js'
import { validarJWT } from '../middlewares/validar-jwt.js'
import { validarCampos } from '../middlewares/validar-campos.js';

const router = Router()

router.get('/', [validarJWT], empresaController.getEmpresas )
router.get('/:id',[validarJWT], empresaController.getEmpresaById  )

router.post('/',  [
    validarJWT,
    check('nombre', 'El nombre es un campo requerido').not().isEmpty(),
    check('nit').custom( existeEmpresaPorNit ),
    validarCampos
    ], 
    empresaController.postEmpresa);

router.put('/:id', [
    validarJWT,
    check('id', 'Id is not a Mongo Id Valid').isMongoId(),
    check('id').custom(  existeEmpresaPorId ),
    validarCampos
    ], 
    empresaController.updateEmpresa);

router.delete('/:id', [
    validarJWT,
    check('id', 'Id is not a Mongo Id Valid').isMongoId(),
    check('id').custom(  existeEmpresaPorId ),
    validarCampos
    ],
    empresaController.deleteEmpresa)




export default router;