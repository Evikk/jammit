const jamService = require('./jam.service')
const logger = require('../../services/logger.service')

async function getJams(req, res) {
    try {
        const filterBy = {
            title: req.query?.title || '',
            region: req.query?.region || '',
        }
        
        const jams = await jamService.query(filterBy)
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

async function updateJamIsGoing(req, res) {
    try {
        const jamGoingData = req.body
        logger.debug("jamid" + req.params.id);
        const jam = await jamService.getById(req.params.id);
        if (jamGoingData.isGoing) {
            jam.usersGoing.push(jamGoingData.user);
        } else {
            logger.debug(jamGoingData.user._id);
            jam.usersGoing = jam.usersGoing.filter( (user) => user._id != jamGoingData.user._id );
        }
    
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
    updateJam,
    updateJamIsGoing
}