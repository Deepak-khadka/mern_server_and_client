import UserModel from "../models/Users.js";

export const ShowUser = (req, res) => {

    UserModel.findById(req.params._id, function (err, user) {
        if (err) {
            res.send({'error': err})
        }

        if (user) {
            res.send(user);
        }
    });

}

export const EditUser = (req, res) => {

    UserModel.findById(req.params._id, function (err, user) {
        if (err) {
            res.send({'error': err})
        }

        if (user) {
            res.send(user);
        }
    });

}

export const UpdateUser = (req, res) => {
    UserModel.findById(req.params._id, function (err, user) {
        if (!user) {
            res.status(404).send("Use is not found")
        }

        user.name = req.body.name;
        user.age = req.body.age;
        user.username = req.body.username;

        user.save().then(() => {
            res.send({"message": "user Updated Successfully "})
        });


    });
}

export const DeleteUser = (req, res) => {
    UserModel.findById(req.params._id, function (err, user) {
        if (!user) {
            res.status(404).send("User is not found")
        }

        user.delete().then(
            () => {
               res.send({ "message" : "User Deleted Successfully"})
            }
        )
    })
}