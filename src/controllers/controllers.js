const pool = require('../db')

const getAllComments = async (req, res, next) => {

    try {
        const result = await pool.query('SELECT * from stack')
        res.json(result.rows)
    } catch (error) {
        next(error)
    }
}

const getComment = async (req, res, next) => {

    const { id } = req.params

    try {
        const result = await pool.query('SELECT * from stack WHERE id = $1', [id])

        if (result.rowCount === 0)
            return res.status(404).json({
                message: 'Comment not found'
            })

        res.json(result.rows[0])

    } catch (error) {
        next(error)
    }
}

const postComment = async (req, res, next) => {
    const { email, comment } = req.body

    try {
        const result = await pool.query('INSERT INTO stack (email, comment) VALUES ($1, $2) RETURNING *', [
            email,
            comment
        ])
        res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
}

const deleteComment = async (req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('DELETE FROM stack WHERE id = $1', [id])

        if (result.rowCount === 0)
            return res.status(404).json({
                message: 'Comment not found'
            })

        res.sendStatus(204)
    } catch (error) {
        next(error)
    }

}

const editComment = async (req, res, next) => {

    try {
        const { id } = req.params
        const { email, comment } = req.body

        const result = await pool.query(
            'UPDATE stack SET email = $1, comment= $2 WHERE id = $3 RETURNING *', [
            email,
            comment,
            id
        ])

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'Comment not found'
            })
        }

        res.send(result.rows[0])
    } catch (error) {
        next(error)
    }
}


module.exports = {
    postComment,
    getAllComments,
    getComment,
    deleteComment,
    editComment
}