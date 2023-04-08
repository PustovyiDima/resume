// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: { firstname: 'Dmytro', lastname: 'Pustovyi' },
  position: 'Junior Fullstack JS Developer',
  salary: '600 $ в місяць',
  address: 'Ukraine, Kiev Oblast, Rokytne',
}
var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

router.get('/', function (req, res) {
  res.render('index', {
    page: {
      tittle: 'Resume | Summary',
    },
    header,
    main: {},
    footer,
  })
})

// ================================================================

router.get('/summary', function (req, res) {
  res.render('summary', {
    page: {
      tittle: 'Resume | Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary ',
        text: `Open-minded for new technologies, with 1 years of
					experience in development. Whenever I start to
					work on a new project I learn the domain and try
					to understand the idea of the project. Good team
					player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: ` Pet project for parsing sport betting data from
					different platforms ( odds ) and sport statistics
					( tournament position, goals etc), analyzing by
					simple mathematics models and preparing
					probability for such events like: money line -
					first win / draw / second win, totals etc.`,
      },
    },
    footer,

    // ↙ сюди вводимо JSON дані
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      tittle: 'Resume | Skills',
    },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 8,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Numismatic',
          isMain: true,
        },
        {
          name: 'Books',
          isMain: false,
        },
        {
          name: 'Music',
          isMain: true,
        },
      ],
    },
    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      tittle: 'Resume | Education',
    },
    header,
    main: {
      educations: [
        {
          name: 'School',
          isEnd: true,
        },
        {
          name: 'Kyiv Polytechnic Institute',
          isEnd: true,
        },
        {
          name: 'IT-brains',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Qwerty',
          id: 132478,
        },
        {
          name: 'Asdfgh',
          id: 625863,
        },
        {
          name: 'Zxcvbnm',
          id: 874254,
        },
      ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: {
      tittle: 'Resume | Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT-brains',
            url: null,
            // 'https://it-brains.com.ua/',
          },
          duration: {
            from: '04.01.2021',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about: 'lorem impus dolor sit amet',
              stacks: [
                { name: 'React.js' },
                { name: 'HTML/CSS' },
                { name: 'Node.js' },
              ],
              awards: [
                {
                  name: 'Tut moje buty vasha reklama )))',
                },
                {
                  name: 'Tut tej moje buty vasha reklama )))',
                },
              ],
              stackAmound: 3,
              awardAmount: 2,
            },
          ],
        },
      ],
    },
    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
