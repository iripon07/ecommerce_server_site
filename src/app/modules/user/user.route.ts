import express from 'express'

const router = express.Router()


router.post('/create-user', createUser)



export const UserRoutes = router;