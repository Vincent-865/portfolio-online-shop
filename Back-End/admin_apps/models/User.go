package models

type User struct {
	UserId           string `gorm:"column:user_id" json:"user_id"`
	Username         string `gorm:"column:username" json:"username"`
	Password         string `gorm:"column:password" json:"password"`
	CreatedDate      string `gorm:"column:created_date" json:"created_date"`
	ModifiedDatetime string `gorm:"column:modified_datetime" json:"modified_datetime"`
	IsBlacklisted    string `gorm:"column:is_blacklisted" json:"is_blacklisted"`
	UserType         string `gorm:"column:user_type" json:"user_type"`
}

func (User) TableName() string {
	return "Users"
}
