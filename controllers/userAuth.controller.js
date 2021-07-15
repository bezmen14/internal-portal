require('dotenv').config();
const bcrypt = require('bcrypt');
const db = require('../db/models');

const { saltRounds } = process.env;

const userSignupRender = (req, res) => {
  if (req.query.err) {
    res.locals.err = 'Не все поля заполнены';
  }
  res.render('signup');
};

const userSigninRender = (req, res) => {
  if (req.query.err) {
    res.locals.err = 'Не найден логин или пароль';
  }
  res.render('signin');
};

const userSignup = async (req, res) => {
  const {
    user_name, employee_name, password: plainPass, email, password2,
  } = req.body;
  if (email && plainPass === password2 && user_name, employee_name) {
    const password = await bcrypt.hash(plainPass, saltRounds);
    const newUser = await db.Employee.create({
      user_name,
      employee_name,
      password,
      email,
      role_id: 2,
    },
    { returning: true, plain: true });

    // установит в куку идентификатор с id из БД
    req.session.user = {
      id: newUser.id,
      name: newUser.user_name,
    };
    return res.redirect('/');
  }
  return res.status(418).redirect('/user/signup/?err=true');
};

const userSignin = async (req, res) => {
  const { user_name, password } = req.body;
  if (user_name && password) {
    const currentUser = await db.Employee.findOne({
      where: {
        user_name,
      },
    });

    if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
      req.session.user = {
        id: currentUser.id,
        name: currentUser.user_name,
      };
      return res.redirect('/');
    }
    return res.status(418).redirect('/user/signin/?err=true');
  }
  // если что-то не ввел обратно на страницу регистрации
  return res.status(418).redirect('/user/signin/?err=true').status(418);
};

const userSignout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.redirect('/');
    res.clearCookie(req.app.get('cookieName'));
    return res.redirect('/');
  });
};

module.exports = {
  userSignupRender,
  userSigninRender,
  userSignup,
  userSignin,
  userSignout,
};
