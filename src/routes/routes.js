const { Router } = require('express')
const {
    postComment,
    getAllComments,
    deleteComment,
    editComment,
    getComment
} = require('../controllers/controllers')


const db = require('../db')

const router = Router()

router.get('/allcomments', getAllComments)

router.get('/comments/:id', getComment)

router.post('/comments', postComment)

router.delete('/comments/:id', deleteComment)

router.put('/comments/:id', editComment)


module.exports = router;