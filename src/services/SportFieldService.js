const SportField = require('../models/SportField')
const bcrypt = require('bcrypt')

const getSportField = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkSportField = await SportField.findOne({
                _id: id
            })
            // console.log(checkUser)
            if (checkSportField === null)  {
                resolve({
                status: '401',
                message: 'The Sport Field is not undefined'
                })
            }
            resolve({
                status: '200',
                message: 'Get Detail Sport Field SUCCESS',
                data: checkSportField
            })  
        } catch(e) {
            reject(e);
        }
    })
}

const createSportField = (newFarm) => {
    return new Promise(async (resolve, reject) => {
        const {name, owner, address, type, price, description} = newFarm
        try {
            const checkSportField = await SportField.findOne({
                name: name,
            })
            if (checkSportField) {
                resolve({
                    status: '401',
                    message: 'Sport Field has been created',
                })
            }

            const createSportField = await SportField.create({
                name, 
                owner, 
                address, 
                image : 'https://cdn.tgdd.vn/Files/2021/11/10/1396965/10-nong-trai-da-lat-rong-lon-bao-la-voi-nhieu-goc-song-ao-tuyet-dep-202111101135102355.jpg', 
                type, 
                price, 
                description
            })
            if (createSportField) {
                resolve({
                    status: '200',
                    message: 'Create Sport Field successfully',
                    data: createSportField
                })
            }
        } catch(e) {
            reject(e);
        }
    })
}

const updateSportField = (id,data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkSportField = await SportField.findOne({
                _id: id
            })
            if (checkSportField === null)  {
                resolve({
                status: 401,
                message: 'The Sport Field is undefined'
                })
            }
            const updateSportField = await SportField.findByIdAndUpdate(id,data, {new: true})
            resolve({
                status: 200,
                message: 'Update Successfully',
                data: updateSportField
            })  
        } catch(e) {
            reject(e);
        }
    })
}

const deleteSportField = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkSportField = await SportField.findOne({
                _id: id
            })
            if (checkSportField === null)  {
                resolve({
                status: 401,
                message: 'The Sport Field is undefined'
                })
            }
            const updateFarm = await SportField.findByIdAndDelete(id)
            resolve({
                status: 200,
                message: 'Delete Successfully'
            })  
        } catch(e) {
            reject(e);
        }
    })
}

// const getAllFarm = () => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const allFarm = await Farm.find()
//             resolve({
//                 status: '200',
//                 message: 'Get All Farm Successfully',
//                 data: allFarm
//             })  
//         } catch(e) {
//             reject(e);
//         }
//     })
// }

// const getAdakey = () => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const adakey = process.env.ACTIVE_KEY
//             console.log("Adafruit Key", adakey)
//             resolve({
//                 status: '200',
//                 message: 'Get Adafruit Key Successfully',
//                 data: adakey
//             })  
//         } catch(e) {
//             reject(e);
//         }
//     })
// }
module.exports = {
    getSportField,
    createSportField,
    updateSportField,
    deleteSportField,
    // getAllFarm,
    // getAdakey
}