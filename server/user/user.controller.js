const User = require('./user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Get
async function get(req, res) {
    try {
        const listUser = await User.find({}).sort({ active: -1 });
        if (!listUser) throw new Error('User not found');
        res.status(200).json(listUser);
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
}

// GetId
async function getID(req, res) {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) throw new Error('Get userId not found');
        res.status(200).json({ status: 1, user });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
}

async function login(req, res) {
    try {
        const userEmail = await User.findOne({ email: req.body.email })
        if (!userEmail) return res.status(400).send({ email: 'Email not found' })
        // Password is correct
        const password = await bcrypt.compare(req.body.password, userEmail.password)
        if (!password) return res.status(400).send({ password: 'Password incorrect' })

        // Create and assign a token

        const token = jwt.sign({ _id: userEmail._id }, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 })
        res.status(200).send({ status: 1, userInfo: userEmail, token: token })
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
}

// Create
async function create(req, res) {
    try {
        const emailExist = await User.findOne({ email: req.body.email })
        if (emailExist) return res.status(400).send({ message: 'Email already' })

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        const createUser = new User({
            fullName: req.body.fullName,
            email: req.body.email,
            password: hashPassword,
            phone: req.body.phone,
            active: req.body.active,
            role: req.body.role,
            avatar: req.body.avatar
        });
        if (!createUser) throw new Error('Create User not found')
        const postUser = await createUser.save();
        if (!postUser) throw new Error('Post user failed')
        res.status(200).json({ status: 1, postUser });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
}


// Update
async function update(req, res) {
    try {
        const updatedUser = await User.updateOne({ _id: req.params.userId }, req.body);
        if (updatedUser.nModified === 0) return res.send(' Not modified ');
        if (!updatedUser) throw new Error('updatedUser not found');
        res.status(200).json({ status: 1, updatedUser });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
}

// Delete
async function deleteUser(req, res) {
    try {
        const checkId = await User.findOne({ _id: req.params.userId })
        if (!checkId) return res.send(' userId not found! ')
        const user = await User.deleteOne({ _id: req.params.userId });
        return res.status(200).json({
            status: 1,
            data: {}
        });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
}

module.exports = { get, getID, login, create, update, deleteUser }