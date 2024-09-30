package functions

import (
	"fmt"
	"math/rand/v2"
	"time"

	"gorm.io/driver/sqlserver"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectSQL() {
	dbUrl := "sqlserver://sql_admin:pass@ACER?database=PortfolioOnlineShop&encrypt=disable"
	DB, _ = gorm.Open(sqlserver.Open(dbUrl), &gorm.Config{})
}

func GetCurrentTime() time.Time {
	location, _ := time.LoadLocation("Asia/Jakarta")
	return time.Now().UTC().In(location)
}

func ReverseByte(arr []byte) {
	length := len(arr)
	for i, j := 0, length-1; i < j; i, j = i+1, j-1 {
		arr[i], arr[j] = arr[j], arr[i]
	}
}

func ConvertUuidToString(uuid []uint8) string {
	ReverseByte(uuid[0:4])
	ReverseByte(uuid[4:6])
	ReverseByte(uuid[6:8])
	return fmt.Sprintf("%X-%X-%X-%X-%X", uuid[0:4], uuid[4:6], uuid[6:8], uuid[8:10], uuid[10:])
}

func GetCustomUUID(length int) string {
	uuid := ""
	for i := 0; i < length; i++ {
		randomAscii := int('A') + rand.IntN(int('Z')-int('A')+1)
		uuid += string(rune(randomAscii))
	}
	return uuid
}
