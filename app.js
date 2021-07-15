const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require('hbs');
const userRouter = require('./routes/userAuth.router');
const indexRouter = require('./routes/index.router');
const departmentRouter = require('./routes/department.router');
// const redis = require('redis');
// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);

// const redisClient = redis.createClient();

const app = express();
const PORT = process.env.PORT || 3000;
// const { secretKey } = process.env;

// view engine setup
app.set('view engine', 'hbs');
app.set('cookieName', 'sid');
hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));
app.set('views', path.join(process.env.PWD, 'views'));

// app.use(session({
//   name: app.get('cookieName'),
//   secret: secretKey,
//   resave: false,
//   saveUninitialized: false,
//   store: new RedisStore({ client: redisClient }, {
//     secret: secretKey,
//   }),
//   cookie: {
//     httpOnly: true,
//     maxAge: 86400 * 1e3,
//   },
// }));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, 'public')));

app.use('/user', userRouter);
app.use('/departments', departmentRouter);
app.use('/teams', departmentRouter);
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log('Server has been started on PORT:', PORT);
});
