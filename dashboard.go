package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()
	r.Static("/static", "./static")
	r.LoadHTMLGlob("temp/*")

	r.GET("/", func(c *gin.Context) {
		c.Request.URL.Path = "/sign-in.html"
		r.HandleContext(c)
	})

	r.GET("/index.html", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "KDT Console",
			"logo":  "Dashboard",
		})
	})

	r.GET("/sign-in.html", func(c *gin.Context) {
		c.HTML(http.StatusOK, "sign-in.html", gin.H{
			"title": "Sign In",
			"logo":  "Sign In",
		})
	})

	r.GET("/data-visualization.html", func(c *gin.Context) {
		c.HTML(http.StatusOK, "data-visualization.html", gin.H{
			"title": "Data",
			"logo":  "Data",
		})
	})

	r.GET("/maps.html", func(c *gin.Context) {
		c.HTML(http.StatusOK, "maps.html", gin.H{
			"title": "Maps",
			"logo":  "Maps",
		})
	})

	r.GET("/preferences.html", func(c *gin.Context) {
		c.HTML(http.StatusOK, "preferences.html", gin.H{
			"title": "Preferences",
			"logo":  "Preferences",
		})
	})

	r.GET("/tables.html", func(c *gin.Context) {
		c.HTML(http.StatusOK, "tables.html", gin.H{
			"title": "Tables",
			"logo":  "Tables",
		})
	})

	r.GET("/car_index.html", func(c *gin.Context) {
		c.HTML(http.StatusOK, "car_index.html", gin.H{
			"title": "Car Data",
			"logo":  "Car Data",
		})
	})

	r.Run(":8080")
}
