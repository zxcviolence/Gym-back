const { Router } = require('express')
const { subscriptionsController } = require('../controllers/SubscriptionsController')
// const authMiddleware = require("../middleware/auth.middleware");
const router = Router()

router.get('/users/subscriptions', subscriptionsController.getAllSubscriptions)
router.post('/admin/subscriptions', subscriptionsController.creareSubscription)
router.delete('/admin/subscriptions/:id', subscriptionsController.deleteSubscription)
// router.patch('/admin/subscriptions/image/:id', authMiddleware.single('img'), subscriptionsController.updateImage)

module.exports = router
