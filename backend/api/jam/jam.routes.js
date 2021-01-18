const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const { getJams, getJam, updateJam, addJam, deleteJam } = require('./jam.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getJams)
router.get('/:id', getJam)
router.put('/:id', updateJam)
router.post('/', addJam)
router.delete('/:id', deleteJam)

// router.put('/:id',  requireAuth, update)
// router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

module.exports = router