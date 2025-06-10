const express = require('express');
const router = express.Router();
const { createUser, getUsers, loginUser, deleteAccount, updatePassword, updateMobile, updateEmail, updateAddress } = require('../controllers/userController');
const authMiddleware = require("../middleware/authMiddleware");
require('dotenv').config();


router.post('/register', createUser);
router.post('/login', loginUser);

router.get('/', getUsers);

router.delete('/delete-account', authMiddleware, deleteAccount);
router.put('/update-password', authMiddleware, updatePassword);
router.put('/update-mobile', authMiddleware, updateMobile);
router.put('/update-email', authMiddleware, updateEmail);
router.put('/update-address', authMiddleware, updateAddress);


module.exports = router;