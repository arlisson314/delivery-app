const { Router } = require('express');
const verifyAdminToken = require('../middlewares/verifyAdminToken');
const adminController = require('../controllers/admin.controller');

const adminRouter = Router();

adminRouter.post('/admin/register', verifyAdminToken, adminController.createNewUser);
adminRouter.delete('/admin/delete/:id', verifyAdminToken, adminController.deleteUser);

module.exports = adminRouter;