package routergroups

import (
	"admin_apps/controllers"

	"github.com/gin-gonic/gin"
)

func SetUserRouter(routerGroup *gin.RouterGroup) {
	routerGroup.GET("/", controllers.GetAllUser)
	routerGroup.GET("/:id", controllers.GetUserById)
	routerGroup.POST("/", controllers.CreateAdminUser)
	routerGroup.PUT("/blacklist/:id", controllers.ToggleUserBlacklist)
	routerGroup.DELETE("/:id", controllers.DeleteUser)
}
