package controllers

import (
	"admin_apps/functions"
	"admin_apps/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// GetAllUser godoc
// @Summary Get All User.
// @Description Get All User.
// @Tags User
// @Accept */*
// @Produce json
// @Success 200 {array} string "Success"
// @Router / [get]
func GetAllUser(ginContext *gin.Context) {
	var data []models.User
	functions.DB.Model(models.User{}).Find(&data)
	ginContext.JSON(http.StatusOK, data)
}

// GetUserById godoc
// @Summary Get User By ID.
// @Description Get User By ID.
// @Tags User
// @Accept */*
// @Produce json
// @Param  id  path  string   true   "User ID"
// @Success 200 {array} string "Success"
// @Router /{id} [get]
func GetUserById(ginContext *gin.Context) {
	id := ginContext.Param("id")

	var data models.User
	functions.DB.Model(models.User{}).Where("user_id = ?", id).Find(&data)
	ginContext.JSON(http.StatusOK, data)
}

// InsertAdminUser godoc
// @Summary Insert Admin User
// @Description Insert Admin User
// @Tags User
// @Accept */*
// @Produce json
// @Param data body models.User true "New Admin User Data"
// @Success 200 {object} string "Success"
// @Router / [post]
func CreateAdminUser(ginContext *gin.Context) {
	var data models.User
	err := ginContext.ShouldBindJSON(&data)

	if err != nil {
		ginContext.JSON(http.StatusBadRequest, err.Error())
		return
	}

	var otherUserWithSameUsername []models.User
	functions.DB.Model(models.User{}).Where("username = ?", data.Username).Find(&otherUserWithSameUsername)

	if len(otherUserWithSameUsername) != 0 {
		ginContext.JSON(http.StatusOK, "USERNAME ALREADY EXIST")
		return
	}

	processedData := map[string]interface{}{
		"user_id":           functions.GetCustomUUID(8),
		"username":          data.Username,
		"password":          data.Password,
		"created_date":      functions.GetCurrentTime(),
		"modified_datetime": nil,
		"is_blacklisted":    0,
		"user_type":         "Admin",
	}
	functions.DB.Model(models.User{}).Create(&processedData)
	ginContext.JSON(http.StatusOK, "INSERT SUCCESS")
}

// ToggleUserBlacklist godoc
// @Summary Toggle User Blacklist
// @Description On/Off User Blacklist Status
// @Tags User
// @Accept */*
// @Produce json
// @Success 200 {object} string "Success"
// @Param id path string true "User ID"
// @Router /blacklist/{id} [put]
func ToggleUserBlacklist(ginContext *gin.Context) {
	id := ginContext.Param("id")

	var oldData models.User
	functions.DB.Model(models.User{}).Where("user_id = ?", id).Find(&oldData)

	processedData := map[string]interface{}{}
	if oldData.IsBlacklisted == "0" {
		processedData["is_blacklisted"] = "1"
	} else {
		processedData["is_blacklisted"] = "0"
	}
	functions.DB.Model(models.User{}).Select("is_blacklisted").Where("user_id = ?", id).Updates(&processedData)
	ginContext.JSON(http.StatusOK, "UPDATE SUCCESS")
}

// DeleteUser godoc
// @Summary Delete User Account
// @Description Delete User Account
// @Tags User
// @Accept */*
// @Produce json
// @Param id path string true "User ID"
// @Success 200 {object} string "Success"
// @Router /{id} [delete]
func DeleteUser(ginContext *gin.Context) {
	id := ginContext.Param("id")
	functions.DB.Where("user_id = ?", id).Delete(models.User{})
	ginContext.JSON(http.StatusOK, "DELETE SUCCESS")
}
