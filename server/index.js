const express = require('express');
const bodyParser = require('body-parser');
const mailer = require("./mail/mailer");
const cors = require('cors');

const exp = express();
exp.use(cors());
exp.use(bodyParser.json())

exp.post("/mail", async (req, res) => {
    try {


       mailer.welcomeMail(req.body.email, req.body.name)
        res.status(200).json({
            msg: "Welcome Onboard",
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
});

const port = process.env.PORT || 4000;
exp.listen(port, () => {
    console.log(`listening on ${port}`);
});
