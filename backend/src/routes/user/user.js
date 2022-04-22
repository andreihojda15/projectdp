const router = require("express").Router({mergeParams: true});

// post new user
router.post("/", (req, res, next) => {
    return res.status(200).json({
      message: "Posting a new user",
    });
  });

//--------------------------------------------------------------------------------------------

// get user
router.get('/:userId/', (req, res, next) => {
    return res.status(200).json({
        message: `Getting user: ${req.params.userId}`
    })
})

// put user
router.put('/:userId/', (req, res, next) => {
    return res.status(200).json({
        message: `Editing user: ${req.params.userId}`
    })
})

module.exports = router;