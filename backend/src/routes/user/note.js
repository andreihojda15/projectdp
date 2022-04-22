const router = require("express").Router({mergeParams: true});

// post note in user
router.put('/:userId/category/:categoryId/note', (req, res, next) => {
    return res.status(200).json({
        message: `Posting category: ${req.params.categoryId} to user: ${req.params.userId}`
    })
})

//--------------------------------------------------------------------------------------------

// get note of user
router.get('/:userId/category/:categoryId/note/:noteId', (req, res, next) => {
    return res.status(200).json({
        message: `Getting note: ${req.params.noteId} from category ${req.params.categoryId} from user: ${req.params.userId}`
    })
})

// put note of user
router.put('/:userId/category/:categoryId/note/:noteId', (req, res, next) => {
    return res.status(200).json({
        message: `Editing note: ${req.params.noteId} from category ${req.params.categoryId} from user: ${req.params.userId}`
    })
})

// delete note of user
router.delete('/:userId/category/:categoryId/note/:noteId', (req, res, next) => {
    return res.status(200).json({
        message: `Deleting note: ${req.params.noteId} from category ${req.params.categoryId} from user: ${req.params.userId}`
    })
})

module.exports = router;