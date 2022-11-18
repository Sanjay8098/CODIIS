import express from 'express'

import {getFiles,obj} from '../controllers/controller.js'


const router=express.Router()

router.post('/uploadVideo',obj)
router.post('/getvideo')


export default router