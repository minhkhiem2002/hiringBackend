const jwt  = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/UserModel.js');

dotenv.config();

const authAdminMiddleware = (req, res ,next) => {
    console.log('checkToken', req.headers.token)
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err,user){
        if (err) {
            return res.status(404).json({
                message: "The authenication",
                status: "ERROR"
            })
        }
        const { payload } = user 
        if (payload.role === 'admin') {
            next()
        } else {
            return res.status(404).json({
                message: "Is not an admin",
                status: "ERROR"
            })
        }
    });
}
const authOwnerMiddleware = async(req, res ,next) => {
    console.log('checkToken', req.headers.token)
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err,user){
        console.log('User:', user)
        if (err) {
            return res.status(404).json({
                message: "The authenication",
                status: "ERROR"
            })
        }
        const { payload } = user 
        if (payload.role === 'owner' || payload.role === 'admin') {
            next()
        } else {
            return res.status(404).json({
                message: "Is not an owner",
                status: "ERROR"
            })
        }
    });
}

module.exports = {
    authAdminMiddleware,
    authOwnerMiddleware
}
