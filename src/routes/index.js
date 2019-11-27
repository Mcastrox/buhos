const express=require ("express");
const router=express.Router();
const passport=require ("passport"); 
const reservaController= require('../controlador/registerController');
router.get ("/", (req,res,next)=>{
    res.render('index');
});

// las rutas para registrarse 

router.get ("/signup",(req,res,next)=>{
    res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup',{
//aqui se indica que se desea hacer en caso si el usuario existe o no o si mete bien sus datos 
    successRedirect:('/inicio'),
    //aqui podemos ver como si el usuario existe nos meustra la pagina de inicio con la opcion de iniciar sesion todavia
    failureRedirect:('/'),
    passReqToCallback:true
}));

router.get ("/signin",(req,res,next)=>{
    res.render('index')
});


router.post('/reserva',reservaController.store);


router.post ("/signin", passport.authenticate('local-signin',{
    successRedirect:'/inicio',
    failureRedirect: '/signin',
    passReqToCallback:true
}));
router.get('/logout',(req,res,next)=>{
    req.logOut();
    // aqui le indica adonde va a ir al salirse de la sesion 
    res.redirect('/signin');
});
// lo que va a ver el usuario cuando se registre adentro poner la pagina principal
router.get("/inicio",isAuthenticated,(req,res,next)=>{
    res.render("perfil");
});

function isAuthenticated (req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/signup');
}

module.exports= router;