const router = require("express").Router({mergeParams: true});

// post category in group
router.post('/:groupId/category', (req, res, next) => {
    return res.status(200).json({
        message: `Posting category to group: ${req.params.groupId}`
    })
})

//--------------------------------------------------------------------------------------------

// get category of group
router.get('/:groupId/category/:categoryId', (req, res, next) => {
    return res.status(200).json({
        message: `Getting category: ${req.params.categoryId} from group: ${req.params.groupId}`
    })
})

// put category of group
router.put('/:groupId/category/:categoryId', (req, res, next) => {
    return res.status(200).json({
        message: `Editing category: ${req.params.categoryId} from group: ${req.params.groupId}`
    })
})

// delete category of group
router.delete('/:groupId/category/:categoryId', (req, res, next) => {
    return res.status(200).json({
        message: `Deleting category: ${req.params.categoryId} from group: ${req.params.groupId}`
    })
})

module.exports = router;