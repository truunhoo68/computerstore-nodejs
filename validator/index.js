exports.userSignupValidator = (req, res, next) => {
    req.check('name', 'Name is required')
        .notEmpty();//k đc rỗng nếu rổng trả về name...
    req.check('email', 'Email must be between 3 to 32')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contains @')
        .isLength({
            min: 4,
            max: 32
        });
    req.check('password', 'Password is required')
        .notEmpty()
    req.check('password')
        .isLength(
            { min: 6 }
        )
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number');

    const errors = req.validationErrors()//gọi ra phương thức
    if (errors) {
        const firstError = errors.map(error => error.msg)[0]//sử dụng vòng lặp
        return res.status(400).json({ error: firstError })//bắn ra lỗi
    }
    next();
}