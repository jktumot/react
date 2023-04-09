const {Router} = require('express')
const router = Router()

const Users = require('../models/users.js')

router.get('/api', async (_req, res) => {
    try {
        await Users.create ({
            firstname: 'Олег',
            lastname: 'Мотылёв',
            comment: 'Классный парень',
            order_by: 10
        })

        res.status(200).json({
            status: true
        })
    }catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
})
module.exports = router