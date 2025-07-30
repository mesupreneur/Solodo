const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().allow(""), // allow empty string so Mongoose default applies
    price: Joi.number().min(0).required(),
    location: Joi.string().required(),
    techstack: Joi.string().required(),
    revenue: Joi.number().min(0).required(),
    users: Joi.number().min(0).required(),
    reason: Joi.string().required(),
    demolink: Joi.string().uri().allow(""),
    linkedin: Joi.string().uri().allow(""),
    github: Joi.string().uri().allow("")
  }).required()
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required()
  }).required()
})
