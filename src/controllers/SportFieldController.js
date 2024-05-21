const SportFieldService = require('../services/SportFieldService');

const getSportField = async (req, res) => {
    try {
        
        const sportFieldId = req.params.id;
        if (!sportFieldId) {
            return res.status(200).json({
                status: 'error',
                message: 'The Farm is required'
            })
        }
        const response = await SportFieldService.getSportField(sportFieldId)
        return res.status(200).json(response)
    } catch(e){
        console.log(e)
        return res.status(404).json({
            message: e
        })
    }
}

const createSportField = async (req, res) => {
    try {
        const {name, owner, address, type, price,description } = req.body;
        console.log('body: ', req.body)
        if (!name  || !owner || !address || !type || !price ) {
            return res.status(200).json({
                status: 401,
                message: 'The input is required'
            })
        }
        const response = await SportFieldService.createSportField(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(404).json({
            message: e
        })
    }
}
const updateSportField = async (req, res) => {
    try {
        const sportFieldId = req.params.id;
        const data = req.body
        if (!sportFieldId) {
            return res.status(200).json({
                status: 401,
                message: 'Providing Sport Field ID'
            })
        }
        const response = await SportFieldService.updateSportField(sportFieldId,data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteSportField = async (req, res) => {
    try {
        const sportFieldId = req.params.id;
        const data = req.body
        if (!sportFieldId) {
            return res.status(200).json({
                status: 401,
                message: 'Providing Sport Field ID'
            })
        }
        const response = await SportFieldService.deleteSportField(sportFieldId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
// const getAllFarm = async (req, res) => {
//     try {
//         const response = await FarmService.getAllFarm()
//         return res.status(200).json(response)
//     } catch(e){
//         return res.status(404).json({
//             message: e
//         })
//     }
// }

// const getAdakey = async (req,res) => {
//     try {
//         const response = await FarmService.getAdakey()
//         return res.status(200).json(response)
//     } catch(e){
//         return res.status(404).json({
//             message: e
//         })
//     }
// }

module.exports = {
    getSportField ,
    createSportField ,
    updateSportField ,
    deleteSportField ,
    // getAllFarm ,
    // getAdakey
}