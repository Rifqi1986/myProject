const express = require("express")
const app = express()
const route = require("./routes")

app.use(express.json())
app.use(route)

app.get('/hello', (req,res)=>{
  res.send('hello world');
})

app.use(route)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
}); 

