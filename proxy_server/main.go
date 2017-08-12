package main

// Packages
import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/context"
)

func main() {
	/*
	* New Iris application
	*/
	app := iris.Default()

	/*
	* All routes
	*/
	// Method: GET, application root
	app.Handle("GET", "/", func(ctx context.Context) {
		ctx.HTML("Hello world!")
	})

	// Method: GET
	app.Get("/ping", func(ctx context.Context) {
		ctx.WriteString("pong")
	})

	// Method: GET
	app.Get("/hello", func(ctx context.Context) {
		ctx.JSON(context.Map{"message": "Hello iris web framework."})
	})

	/*
	* Start the app by listening on the default
	*/
	app.Run(iris.Addr(":8080"))
}
