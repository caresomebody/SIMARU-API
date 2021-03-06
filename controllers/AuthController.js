const jwt_decode = require("jwt-decode")
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if(err){
            res.status(400).json({ error: err})
        }

        let user = new User ({
            username: req.body.username,
            email: req.body.email,
            nama: req.body.nama,
            password: hashedPass,
            role: req.body.role
        })
        user.save()
        .then(user => {
            res.status(200).json({
                message: 'User added successfully!'
            })
        })
        .catch(error => {
            res.status(400).json({ 
                message: 'An error occurred'
            })
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{username: username},{email: username},{phone: username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.status(400).json({
                        error: err
                    })
                }
                if (result){
                    const role = user.role 
                    let token = jwt.sign({id: user.id}, 'alMaJawpiNen', {expiresIn: '24h'})
                    let decoded = jwt_decode(token)
                    res.status(200).json({ 
                        message: 'Login Successful!',
                        token, role, decoded
                    })
                    console.log(decoded);
                } else {
                    res.status(400).json({
                        message: 'Password does not matched!'
                    })
                }
            })
        } else {
            res.status(400).json({
                message: 'No user found'
            })
        }
    })
}

const all = (req, res, next) => {
    User.find()
    .then( response => {
        res.status(200).json({
            response
        })
    })
    .catch(error => {
        res.status(400).json({
            message: 'An error occurred'
        })
    })
}

const admin = (req, res, next) => {
    const role = {role: 0}
    User.find(role)
    .then( listAdmin => {
        res.status(200).json({
            listAdmin
        })
    })
    .catch(error => {
        res.status(400).json({
            message: 'An error occurred'
        })
    })
}

module.exports = {
    register, login, all, admin
}