const UserModel = require('../models/userModel')

module.exports = {
    register_route: (req, res) => {
        const {username, password, email } = req.body;
        console.log(username, password, email);

        const newUser = new UserModel( {
            username,
            password,
            email
        }
        )
        newUser.save()
         .then((result) => {
            console.log(result);
            res.status(200).json("User created successfully")
         }).catch((err) => console.log(err))
    }
}