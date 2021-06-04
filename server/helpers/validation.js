const Joi = require('joi');

module.exports = {
	register(req, res, next) {
		const schema = Joi.object({
			fullName: Joi.string().min(6).required(),
			email: Joi.string().min(6).required().email(),
			password: Joi.string().min(6).required(),
		});
		const { error } = schema.validate(req.body)
		if (error) {
			switch (error.details[0].context.key) {
				case 'fullName':
					res.status(400).send({
						error: error.details[0].message,
					});
					break;
				case 'email':
					res.status(400).send({
						error: error.details[0].message,
					});
					break;
				case 'password':
					res.status(400).send({
						error: error.details[0].message,
					});
					break;
				default:
					break;
			}
		}
		else {
			next()
		}
	},
	login(req, res, next) {
		const schema = Joi.object({
			email: Joi.string().required().email(),
			password: Joi.string().required(),
		});
		const { error } = schema.validate(req.body);
		if (error) {
			switch (error.details[0].context.key) {
				case "email":
					res.status(400).send({
						error: error.details[0].message,
					});
					break;
				case "password":
					res.status(400).send({
						error: error.details[0].message,
					});
					break;
				default:
					res.status(400).send({
						error: "Invalid login information",
					});
					break;
			}
		} else {
			next();
		}
	},
	create(req, res, next) {
		const schema = Joi.object({
			fullName: Joi.string().min(3).required(),
			email: Joi.string().min(5).required().email(),
			password: Joi.string().min(5).required(),
			phone: Joi.number().required(),
			active: Joi.number().required(),
			role: Joi.string().required(),
			avatar: Joi.string().required(),
		});
		const { error } = schema.validate(req.body)
		if (error) {
			console.log(error.details[0].context.key);
			console.log(error.details[0].message);
			switch (error.details[0].context.key) {
				case 'fullName':
					res.status(400).send({
						error: error.details[0].message,
					});
					break;
				case 'email':
					res.status(400).send({
						error: error.details[0].message,
					});
					break;
				case 'password':
					res.status(400).send({
						error: error.details[0].message,
					});
					break;
				case 'phone':
					res.status(400).send({
						error: error.details[0].message,
					});
					break;
				case 'active':
					res.status(400).send({
						error: error.details[0].message,
					});
					break;
				case 'role':
					res.status(400).send({
						error: error.details[0].message,
					});
					break;
				case 'avatar':
					res.status(400).send({
						error: error.details[0].message,
					});
					break;
				default:
					break;
			}
		}
		else {
			next()
		}
	},
}