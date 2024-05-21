const { genneralaccess_token, genneralRefreshToken} = require('../services/JwtService')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const refreshaccess_token = (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.sendStatus(401);
  
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
      if (err) return res.sendStatus(403);
        console.log(user.payload)
        genneralaccess_token({ id: user.payload.id })
        .then(access_token => {
            return res.json({ access_token, refreshToken });
        })
        .catch(error => {
            return res.status(500).json({ error: 'Internal Server Error' });
        });
    });
  };

module.exports = {
    refreshaccess_token,
};