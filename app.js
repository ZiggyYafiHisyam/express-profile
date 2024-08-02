const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/user/profile', (req, res) => {
    const profile = {
        name: 'Ziggy Yafi Hisyam',
        nim: '2211521018',
        jurusan: 'Sistem Informasi',
        email: 'ziggyafih@gmail.com',
        photo: '/images/profile_ziggy.jpg'
    };
    res.render('index', { profile });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});