const express = require("express");

const app = express();

const PORT = 3000;

// Server
//app.use((req, res) => {
//	res.send("Hello From Server");
//});

// Routes
app.use("/test", (req,res) => {
	res.send("Hello From Test Route");
});


app.listen(PORT, () => {console.log(`Server is up and runnsing on PORT ${PORT}`)});
