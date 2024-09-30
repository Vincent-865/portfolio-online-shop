using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using seller_apps.Models;

namespace seller_apps.DatabaseConnections
{
    public class SQLServerConnection : DbContext
    {
        public SQLServerConnection(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
            
        }

        public DbSet<Product> Products {get; set;}
    }
}