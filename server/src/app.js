const express = require("express");

const app = express();

const PORT = 3000;

// Server - With this it will always land to Hello From Server
//app.use((req, res) => {
//	res.send("Hello From Server");
//});


// Routes
app.use("/test", (req,res) => {
	res.send("Hello From Test Route");
});

// HTTP METHODS

app.get("/user", (req, res) => {
	res.send({username: "abc", address:"xyz"});
})

app.post("/user", (req, res) => {
	res.send("User updated to the DB")
})

app.delete("/user", (req, res) => {
	res.send("User deleted form the DB")
})

// Query Params

app.get("/routes", (req, res) => {
	console.log(req.query);
	res.send(req.query) // OP: { "userId": "xyz", "pwd": "xyz"}
})

// Dynamic Routes

app.get("/routes/:userId/:username", (req, res) => {
	console.log(req.params);
	res.send(req.params)  // OP: { "userId": "123","username": "saurabh"}
})


app.listen(PORT, () => {console.log(`Server is up and runnsing on PORT ${PORT}`)});
