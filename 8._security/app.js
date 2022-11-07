import express from "express";
//Helmet er basic sikkerhedsforanstaltninger, som sætter en masse headers. Ikke sikkert, men en hjælpende hånd 
import helmet from "helmet";
const app = express();

app.use(helmet());

//Begrænsning på hvor ofte man kan kalde et api -  raidlimiting 
import rateLimit from 'express-rate-limit'

const frontdoorLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 6, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use("/frontdoor", frontdoorLimiter);


const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 15 minutes
	max: 80, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use("*", limiter)

//Middleware functions 
function ipLogger(req, res, next){
    console.log(req.ip)
    next();
}

//middleware. Kører på serveren før ens callbacks. 
function guidingButler(req, res, next){
    console.log("This way, sir")
    next()
}

//FOR ALLE ROUTES KALD IPLOGGER
app.use(ipLogger);


//Hvis man vil kører guiding butler på /room - Kræver man fjerner guidingButler fra frontdoor og room routes. 
app.use("/room", guidingButler);


//Oneliner
app.get("/inlinemiddleware", (req, res, next) => next(), (req, res, next) => res.send({ "message": "OK" }));

function guardMiddleware(req, res, next){
    if (req.query.name !== "Anders"){
        res.send({message: "You are not Anders"})
    }
    else{
    req.fullname = "Anders Latif";
        next();
    console.log("DING, DONG")
    }
}

app.get("/frontdoor", guardMiddleware, (req, res) => {
    res.send({message: `Welcome to the house, ${req.fullname}`})
    
})

//next er endnu et parameter du kan give, og det er en funktion. Den leder efter den næste route
app.get("/room", guidingButler, (req, res, next) => {
    next();
});


app.get("/room", guidingButler, (req, res) => {
    res.send({ message: "you are in room 2"})
});

import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } //secure false --> HVIS IKKE HTTPS er sat op. 
  }))


import popcornRouter from "./routers/popcornRouter.js"
app.use(popcornRouter);

//Alle routes den ikke kan finde sender fejlside
//Skal lægge til sidst da den ellers altid ville ramme den her side. 
app.get("*", (req, res) => {
    res.send(`<h1>494</h1><br><h3>Could not find the page</h3>`)
})



const PORT = 8080;
app.listen(PORT, () => { 
    console.log("Server is running on port", PORT)
});

