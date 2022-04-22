const router = require("express").Router({mergeParams: true});

// post your group
router.post("/", (req, res, next) => {
    return res.status(200).json({
      message: "Posting a new group",
    });
  });

//--------------------------------------------------------------------------------------------

// get group
router.get('/:groupId/', (req, res, next) => {
    return res.status(200).json({
        message: `Getting group: ${req.params.groupId}`
    })
})

// put group
router.put('/:groupId/', (req, res, next) => {
    return res.status(200).json({
        message: `Editing group: ${req.params.groupId}`
    })
})

// delete group
router.delete('/:groupId/', (req, res, next) => {
    return res.status(200).json({
        message: `Deleting group: ${req.params.groupId}`
    })
})

module.exports = router;