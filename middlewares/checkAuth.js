const db = require('../db/models');

const checkAdmin = async (req, res, next) => {
  const userId = req.session?.user?.id;
  const currentUser = await db.Employee.findOne({
    where: { id: userId },
  });
  if (currentUser.role_id === 1) {
    console.log('admin');
    return next();
  }
  return res.redirect('/user/signin');
};

const checkAuth = (req, res, next) => {
  const userId = req.session?.user?.id;
  if (userId) {
    return next();
  }
  return res.redirect('/signup');
};

const checkAuthForNavbar = async (req, res, next) => {
  const userId = req.session?.user?.id;
  if (userId) {
    const currentUser = await db.User.findOne({ where: { id: userId } });
    if (currentUser) {
      res.locals.name = currentUser.name;
      res.locals.email = currentUser.email;
      res.locals.id = currentUser.id;
    }
  }
  return next();
};

module.exports = {
  checkAuth,
  checkAuthForNavbar,
  checkAdmin,
};
