const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Connection Pool
const connection = mysql.createConnection({
    connectionLimit: 10,
    host: "localhost",
    user: "Marcus",
    password: "$Marcus05",
    database: "user-management-system"
});

//routes

// view notes
router.get('/', (req, res) => {
    connection.query("select * from notes ", (err, notes) => {
        if (err) throw err;
        console.log(notes); +
            res.render('home', { notes });
    });
});

//add note
router.post('/', (req, res) => {
    const { note_title, note_description } = req.body;
    let insertQue = `insert into notes set note_title="${note_title}", note_description="${note_description}"`;
    connection.query(insertQue, (err, notes) => {
        if (err) throw err;
        res.redirect("/");
    });

});

//delete note
router.get('/delete/:note_no', (req, res) => {
    let note_no = req.params.note_no;
    let deleteQuery = `DELETE FROM notes WHERE note_no = ${note_no}`
    connection.query(deleteQuery, (err, notes) => {
        if (err) throw err;
        res.redirect('/');
    });


});


module.exports = router;