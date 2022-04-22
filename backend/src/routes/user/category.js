const router = require("express").Router({mergeParams: true});

// get categories from user
router.post('/:userId/category', (req, res, next) => {
    return res.status(200).json({
        message: `Getting all categories from user: ${req.params.userId}`
    })
})

// post category in user
router.post('/:userId/category', (req, res, next) => {
    return res.status(200).json({
        message: `Posting category to user: ${req.params.userId}`
    })
})

//--------------------------------------------------------------------------------------------

// get category of user
router.get('/:userId/category/:categoryId', (req, res, next) => {
    return res.status(200).json({
        message: `Getting category: ${req.params.categoryId} from user: ${req.params.userId}`
    })
})

// put category of user
router.put('/:userId/category/:categoryId', (req, res, next) => {
    return res.status(200).json({
        message: `Editing category: ${req.params.categoryId} from user: ${req.params.userId}`
    })
})

// delete category of user
router.delete('/:userId/category/:categoryId', (req, res, next) => {
    return res.status(200).json({
        message: `Deleting category: ${req.params.categoryId} from user: ${req.params.userId}`
    })
})

module.exports = router;