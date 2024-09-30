using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace seller_apps.Functions
{
    public class GeneralFunctions
    {
        public static Random random = new();
        public static string GetCustomUUID(int length){
            string uuid = "";
            for(int i=0; i<length; i++){
                int randomAscii = random.Next((int)'A', (int)'Z'+1);
                char randomChar = (char)randomAscii;
                Console.WriteLine(randomAscii);
                Console.WriteLine(randomChar);
                uuid += randomChar;
            }
            Console.WriteLine(uuid);
            return uuid;
        }

        public static DateTime GetCurrentDateTime(){
            TimeZoneInfo timeZone = TimeZoneInfo.FindSystemTimeZoneById("SE Asia Standard Time");
            DateTime convertedDateTime = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, timeZone);
            return convertedDateTime;
        }
    }
}