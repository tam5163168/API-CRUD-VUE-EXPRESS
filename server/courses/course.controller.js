const Course = require('./course.model');

// Get
async function get(req, res) {
    try {
        const listCourse = await Course.find().populate('user', 'email');
        if (!listCourse) throw new Error('Course not found');
        res.status(200).json(listCourse);
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
}

// GetId
async function getID(req, res) {
    try {
        const course = await Course.findById(req.params.courseId);
        if (!course) throw new Error('Get courseId not found');
        res.status(200).json({ status: 1, course });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
}

// Create
async function create(req, res) {
    const createCourse = new Course({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        user: req.body.userId
    })

    try {
        if (!createCourse) throw new Error('Create Course not found')
        const postCourse = await createCourse.save();
       
        if (!postCourse) throw new Error('Post course failed')
        res.status(200).json({ status: 1, postCourse });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
}

// Update
async function update(req, res) {
    try {
        const updatedCourse = await Course.updateOne({ _id: req.params.courseId }, req.body);
        if (!updatedCourse) throw new Error('updatedCourse not found');
        res.status(200).json({ status: 1, updatedCourse });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete
async function deleteCourse(req, res) {
    try {
        const course = await Course.deleteOne({ _id: req.params.courseId });
        if (!course) throw new Error('Delete courseId not found');
        res.status(200).json({ status: 1, course });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { get, getID, create, update, deleteCourse }