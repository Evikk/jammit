const jamService = require('./jam.service')
const logger = require('../../services/logger.service')

async function getJams(req, res) {
    try {
        const filterBy = {
            name: req.query?.name || '',
            type: req.query?.region || '',
        }
        const sortBy = {
            sort: req.query?.sort || ''
        }
        console.log(filterBy, sortBy);
        const jams = await jamService.query(filterBy, sortBy)
        res.send(jams)
    } catch (err) {
        logger.error('Failed to get jams', err)
        res.status(500).send({ err: 'Failed to get jams' })
    }
}

async function getJam(req, res) {
    try {
        const jam = await jamService.getById(req.params.id)
        res.send(jam)
    } catch (err) {
        logger.error('Failed to get jam', err)
        res.status(500).send({ err: 'Failed to get jam' })
    }
}

async function deleteJam(req, res) {
    try {
        await jamService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete jam', err)
        res.status(500).send({ err: 'Failed to delete jam' })
    }
}

async function addJam(req, res) {
    try {
        const jam = req.body
        const savedJam = await jamService.add(jam)
        res.send(savedJam)
    } catch (err) {
        logger.error('Failed to update jam', err)
        res.status(500).send({ err: 'Failed to update jam' })
    }
}

async function updateJam(req, res) {
    try {
        const jam = req.body
        const savedJam = await jamService.update(jam)
        res.send(savedJam)
    } catch (err) {
        logger.error('Failed to update jam', err)
        res.status(500).send({ err: 'Failed to update jam' })
    }
}

module.exports = {
    getJam,
    getJams,
    deleteJam,
    addJam,
    updateJam
}