import  { check} from  'express-validator'

export const validateDocument = [
  check("title")
    .not()
    .isEmpty()
    .withMessage("Title is required"),
  check("content")
    .not()
    .isEmpty()
    .withMessage("Content is required"),
  check("contentType")
    .not()
    .isEmpty()
    .withMessage("Content type is required"),
];

