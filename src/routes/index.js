const UserRouter = require('./UserRouter')
const SportFieldRouter = require('./SportFieldRouter')
const AuthRouter = require('./AuthRouter')
// const DataEquipRouter = require('./DataEquipRouter')
// const ControlEquipmentRouter = require('./ControlEquipRouter')

const routes = (app) => {

    app.use('/api/user', UserRouter)
    app.use('/api/admin',SportFieldRouter)
    app.use('/api/auth', AuthRouter)
    // app.use('/api/dequip',DataEquipRouter)
    // app.use('/api/cequip',ControlEquipmentRouter)
}

module.exports = routes;