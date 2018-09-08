package main

import (
	"fmt"
	"html/template"
	"net/http"
)

type datast struct {
	Id   byte
	Name string
	Age  int
}

func main() {
	jack := datast{
		12,
		"jack",
		23,
	}
	fmt.Print(jack.Name)
	t := template.New("index")
	template.Must(t.ParseFiles("temp/sign-in.html", "temp/index.html", "temp/data-visualization.html", "temp/maps.html", "temp/tables.html", "temp/preferences.html"))
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	http.HandleFunc("/index.html", func(rw http.ResponseWriter, r *http.Request) {
		t.ExecuteTemplate(rw, "index.html", &jack)
	})
	http.HandleFunc("/sign-in.html", func(rw http.ResponseWriter, r *http.Request) {
		t.ExecuteTemplate(rw, "sign-in.html", &jack)
	})
	http.HandleFunc("/data-visualization.html", func(rw http.ResponseWriter, r *http.Request) {
		t.ExecuteTemplate(rw, "data-visualization.html", &jack)
	})
	http.HandleFunc("/maps.html", func(rw http.ResponseWriter, r *http.Request) {
		t.ExecuteTemplate(rw, "maps.html", &jack)
	})
	http.HandleFunc("/tables.html", func(rw http.ResponseWriter, r *http.Request) {
		t.ExecuteTemplate(rw, "tables.html", &jack)
	})
	http.HandleFunc("/preferences.html", func(rw http.ResponseWriter, r *http.Request) {
		t.ExecuteTemplate(rw, "preferences.html", &jack)
	})
	http.ListenAndServe(":8080", nil)
}
