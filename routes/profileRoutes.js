const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Rute untuk mendapatkan profil pengguna
router.get('/profile', profileController.getProfile);

// Rute untuk memperbarui profil pengguna (termasuk upload foto)
router.post('/profile', profileController.updateProfile);

module.exports = router;
