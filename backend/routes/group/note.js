const router = require("express").Router();

// post note in group
router.put('/:groupId/category/:categoryId/note', (req, res, next) => {
    return res.status(200).json({
        message: `Posting category: ${req.params.categoryId} to group: ${req.params.groupId}`
    })
})

//--------------------------------------------------------------------------------------------

// get note of group
router.get('/:groupId/category/:categoryId/note/:noteId', (req, res, next) => {
    return res.status(200).json({
        message: `Getting note: ${req.params.noteId} from category ${req.params.categoryId} from group: ${req.params.groupId}`
    })
})

// put note of group
router.put('/:groupId/category/:categoryId/note/:noteId', (req, res, next) => {
    return res.status(200).json({
        message: `Editing note: ${req.params.noteId} from category ${req.params.categoryId} from group: ${req.params.groupId}`
    })
})

// delete note of group
router.delete('/:groupId/category/:categoryId/note/:noteId', (req, res, next) => {
    return res.status(200).json({
        message: `Deleting note: ${req.params.noteId} from category ${req.params.categoryId} from group: ${req.params.groupId}`
    })
})

module.exports = router;