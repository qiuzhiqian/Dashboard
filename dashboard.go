package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type dataRoute struct {
	routeval string
	name     string
}

type vehicle struct {
	Index      int
	Dtime      string
	Vehiclesta string
	Chargesta  string
	Runmod     string
	Speed      int
	Mile       int
	Vol        int
	Cur        int
	Soc        int
	Dcdcsta    string
	Gear       string
	Ins        int
	Acc        int
	Brake      int
}

type Student struct {
	Name    string
	Age     int
	Guake   bool
	Classes []string
	Price   float32
}

func datainit() []vehicle {
	var datalist = make([]vehicle, 0)
	item := vehicle{
		1,
		"2018-09-08 11:00:00",
		"熄火",
		"停车充电",
		"无效",
		80,
		100,
		10,
		26,
		70,
		"工作",
		"P档",
		100,
		30,
		20}
	datalist = append(datalist, item)
	return datalist
}

func main() {

	st := &Student{
		"Xiao Ming",
		16,
		true,
		[]string{"Math", "English", "Chinese"},
		9.99,
	}

	datalist := datainit()

	jsonData, _ := json.Marshal(datalist)

	fmt.Println(string(jsonData))

	testData, _ := json.Marshal(st)
	fmt.Println(string(testData))

	r := gin.Default()
	r.Static("/css", "Lorvens/css")
	r.Static("/charts", "Lorvens/charts")
	r.Static("/fonts", "Lorvens/fonts")
	r.Static("/images", "Lorvens/images")
	r.Static("/js", "Lorvens/js")
	r.LoadHTMLGlob("Lorvens/temp/*html")

	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "vehicle.html", gin.H{
			"title": "KDT Console",
			"logo":  "Dashboard",
		})
	})

	r.GET("/data", func(c *gin.Context) {
		c.JSON(http.StatusOK, string(jsonData))
	})

	r.Run(":8081")
}
