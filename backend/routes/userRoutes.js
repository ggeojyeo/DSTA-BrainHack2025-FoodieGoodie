// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser, getUsers, loginUser } = require('../controllers/userController');
const authMiddleware = require("../middleware/authMiddleware");


router.post('/register', createUser);
router.get('/', getUsers);
router.post('/login', loginUser);

router.delete('/delete', deleteAccount);
router.put('/update-username', updateUsername);
router.put('/update-password', updatePassword);
router.put('/update-mobile', updateMobile);
router.put('/update-email', updateEmail);
router.put('/update-address', updateAddress);


module.exports = router;