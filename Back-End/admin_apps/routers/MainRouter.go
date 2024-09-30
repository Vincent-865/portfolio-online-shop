package routers

import (
	docs "admin_apps/docs"
	"admin_apps/routers/routergroups"

	"github.com/gin-gonic/gin"
	swaggoFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func EnableCORS() gin.HandlerFunc {
	return func(c *gin.Context) {

		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Credentials", "true")
		c.Header("Access-Control-Allow-Headers", "*")
		// c.Header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Header("Access-Control-Allow-Methods", "*")
		// c.Header("Access-Control-Allow-Methods", "POST, HEAD, PATCH, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

// @title Swagger UI of Admin Apps
// @version 2.0
// @termsOfService http://swagger.io/terms/
// @BasePath /
// @schemes http
func SetAllRouters() *gin.Engine {
	router := gin.Default()
	router.Use(EnableCORS())

	routerGroup := router.Group("")
	{
		routergroups.SetUserRouter(routerGroup)
	}

	docs.SwaggerInfo.BasePath = "/"
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggoFiles.Handler))

	return router
}
