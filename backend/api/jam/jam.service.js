const dbService = require('../../services/db.service')
// const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    getJamByName,
    remove,
    update,
    add
}

async function query(filterBy = {}, sortBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const sort = {}
    const sortParam = sortBy.sort
    if (sortBy.sort) sort[sortParam] = 1
    console.log(sort, criteria);
    try {
        const collection = await dbService.getCollection('jam')
        var jams = await collection.find(criteria).sort(sort).toArray()
        // var jams = await collection.find().toArray()
        console.log('jams',jams);
        return jams
    } catch (err) {
        logger.error('cannot find jams', err)
        throw err
    }
}

async function getById(jamId) {
    try {
        const collection = await dbService.getCollection('jam')
        const jam = await collection.findOne({ '_id': ObjectId(jamId) })
        return jam
    } catch (err) {
        logger.error(`while finding jam ${jamId}`, err)
        throw err
    }
}
async function getJamByName(jamName) {
    try {
        const collection = await dbService.getCollection('jam')
        const jam = await collection.findOne({ jamName })
        return jam
    } catch (err) {
        logger.error(`while finding jam ${jamName}`, err)
        throw err
    }
}

async function remove(jamId) {
    try {
        const collection = await dbService.getCollection('jam')
        await collection.deleteOne({ '_id': ObjectId(jamId) })
    } catch (err) {
        logger.error(`cannot remove jam ${jamId}`, err)
        throw err
    }
}

async function update(jam) {
    try {
        // peek only updatable fields!
        const jamToSave = {
            _id: ObjectId(jam._id),
            name: jam.name,
            type: jam.type,
            price: jam.price,
            inStock: jam.inStock
        }
        const collection = await dbService.getCollection('jam')
        await collection.updateOne({ '_id': jamToSave._id }, { $set: jamToSave })
        return jamToSave;
    } catch (err) {
        logger.error(`cannot update jam ${jam._id}`, err)
        throw err
    }
}

async function add(jam) {
    try {
        // peek only updatable fields!
        const jamToAdd = {
            name: jam.name,
            type: jam.type,
            price: jam.price,
            createdAt: Date.now(),
            inStock: jam.inStock,
            img_url: jam.img_url
        }
        const collection = await dbService.getCollection('jam')
        await collection.insertOne(jamToAdd)
        return jamToAdd
    } catch (err) {
        logger.error('cannot insert jam', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.name) {
        const nameCriteria = { $regex: filterBy.name, $options: 'i' }
        criteria.name = nameCriteria
    }
    if (filterBy.type) {
        const typeCriteria = { $regex: filterBy.type, $options: 'i' }
        criteria.type = typeCriteria
    }
    if (filterBy.inStock) {
        criteria.inStock = { $eq: filterBy.inStock }
    }
    
    return criteria
}

function _buildSort(sortBy) {
    const sort = {}
    
    return sort
}

