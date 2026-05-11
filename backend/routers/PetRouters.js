const PetRouters = require('express').Router()

const PetController = require('../controllers/PetController')

const verifyToken = require('../helpers/verify-token')
const{ imageUpload } = require('../helpers/image-upload')

router.post('/create',verifyToken,imageUpload.array('image'), PetController.create)
router.get('/',PetController.getAll)
router.get('/mypets',verifyToken, PetController.getAllUserPets)
router.get('/:id',verifyToken, PetController.getPetById)
router.patch('/schedule/:id',verifyToken,PetController.schedule)
router.patch('/CONCLUDE/:id',verifyToken,PetController.concludeAdoption)
router.patch('/edit/:id',verifyToken,imageUpload.array('image'), PetController.editPet)

module.exports = router