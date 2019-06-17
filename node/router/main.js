module.exports = function(app)
{
    app.get('/',function(req,res){
       res.render('index.html')
    });

    app.get('/more',function(req,res){
       res.render('about.html');
   });
}
