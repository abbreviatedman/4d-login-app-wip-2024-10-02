const router = require('express').Router();

const {
    createUser,
    getUsers,
} = require('../../controllers/api/userController');

const handleSuccess = function(res, data) {
    res.status(200).json({
        message: 'success',
        payload: data,
    })
}

const handleError = function (res, error, message) {
    console.log({message: message, payload: error});
    res.status(500).json({message: message, payload: error});
}

// POST localhost:3000/api/users
router.post('/', async function (req, res) {
    try {
        const newUser = await createUser(req.body);
        handleSuccess(res, newUser);
    } catch (error) {
        handleError(res, error, 'failure creating user');
    }
})

router.get('/', async function (req, res) {
    try {
        const users = await getUsers();
        handleSuccess(res, users);
    } catch (error) {
        handleError(res, error, 'failure getting all users');
    }
})

module.exports = router;