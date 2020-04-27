const express = require('express');
// const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
// const { Post, User } = require('../models');

const router = express.Router();

// router.get('/profile', isLoggedIn, (req, res) => {
//   res.render('profile', { title: '내 정보 - NodeBird', user: req.user });
// });

router.get('/profile', (req, res) => {
    res.render('profile', { title: '내 정보 - NodeBird', user: null });
});

router.get('/join', (req, res) => {
  res.render('join', {
    title: '회원가입 - NodeBird',
    user: null,
    joinError: req.flash('joinError'),
  });
});

router.get('/', (req, res, next) => {
//   Post.findAll({
//     include: {
//       model: User,
//       attributes: ['id', 'nick'],
//     },
//     order: [['createdAt', 'DESC']],
//   })
//     .then((posts) => {
      res.render('main', {
        title: 'NodeBird',
        // twits: posts,
        twits: [],
        // user: req.user,
        user: null,
        loginError: req.flash('loginError'),
      });
    })
    // .catch((error) => {
    //   console.error(error);
    //   next(error);
    // });
// });

module.exports = router;