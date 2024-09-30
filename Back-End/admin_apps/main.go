package main

import (
	"admin_apps/functions"
	"admin_apps/routers"
)

func main() {
	functions.ConnectSQL()
	router := routers.SetAllRouters()
	router.Run(":8080")
}
