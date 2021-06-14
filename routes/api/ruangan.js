const express = require('express')
const router = express.Router()

const Ruangan = require('../../models/Ruangan')
const authenticate = require('../../middleware/authenticate')

router.get('/', authenticate, async (req, res) => {
    try{
        const ruangan = await Ruangan.find()
        if(!ruangan) throw Error('No items found')
        res.status(200).json(ruangan)
    } catch (err) {
        res.status(400).json({ msg: err})
    }
})

router.post('/', authenticate, async (req, res) => {
    const newRoom = new Ruangan(req.body)

    try{
        const rooms = await newRoom.save()
        if(!rooms) throw Error ('Something went wrong')
        res.status(200).json({
            rooms: rooms
        })
    } catch (err) {
        res.status(400).json({ msg: err})
    }
})

router.get('/:id', authenticate, async (req, res) => {
    try{
        const rooms = await Ruangan.findById(req.params.id)
        if(!rooms) throw Error ('No id')
        res.status(200).json(rooms)
    } catch (err) {
        res.status(400).json({ msg: err})
    }
})

module.exports = router