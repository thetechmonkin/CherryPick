const express = require("express");
const {isAdminAuthenticated, isUserAuthenticated} = require("./middlewares/auth")

const app = express();

const PORT = 3000;

// Server - With this it will always land to Hello From Server
//app.use((req, res) => {
//	res.send("Hello From Server");
//});


// Routes
// app.use("/test", (req,res) => {
// 	res.send("Hello From Test Route");
// });

// // HTTP METHODS

// app.get("/user", (req, res) => {
// 	res.send({username: "abc", address:"xyz"});
// })

// app.post("/user", (req, res) => {
// 	res.send("User updated to the DB")
// })

// app.delete("/user", (req, res) => {
// 	res.send("User deleted form the DB")
// })

// // Query Params

// app.get("/routes", (req, res) => {
// 	console.log(req.query);
// 	res.send(req.query) // OP: { "userId": "xyz", "pwd": "xyz"}
// })

// // Dynamic Routes

// app.get("/routes/:userId/:username", (req, res) => {
// 	console.log(req.params);
// 	res.send(req.params)  // OP: { "userId": "123","username": "saurabh"}
// })

// MIDDLEWARES AND ERROR HANDLING

// For login no eed to use middlewares
app.get("/login", (req, res) => {
	//Perform Logic for login
	res.send("Logged In successfully");
});

// admin routes - middle ware will work for all admin routes

app.use("/admin", isAdminAuthenticated);

app.get("/admin/getData", (req, res) => {
	try {
		res.send("Data fetched successfully :)");
	} catch (err) {
		res.status(500).send("Some Error");
	}
});

app.delete("/admin/deleteData", (req, res) => {
	try {
		throw new Error("xyzzz");
		res.send("Data deleted successfully :)");
	} catch (err) {
		res.status(500).send("Some Error");
	}
});

// User req handler - another way of using middleware

app.get("user/getData", isUserAuthenticated, (req, res) => {
	try {
		res.send("Data fetched successfully :)");
	} catch (err) {
		res.status(500).send("Some Error");
	}
})


// Global error handler if some req handler is not handled the error correctly then this will come in picture
// and instead of giving the actual error it will show this

app.use("/", (err, req, res, next) => {
	if(err) {
		console.log(err)
		res.status(500).send("Something went wrong :(");
	}
})

app.listen(PORT, () => {console.log(`Server is up and running on PORT ${PORT}`)});
