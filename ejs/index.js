import express from 'express';
const app = express();

app.set('views', 'src/views');
app.set('view engine', 'ejs');
app.use(express.static("./public"));

app.get("/" , (req,res) => {
    res.json({
        msg: "hello"
    })
})

app.get("/home", (req, res) => {
    res.render("pages/home")
})

app.listen(3000 , ()=>{
    console.log("Servers is listening on http://localhost:3000")

})