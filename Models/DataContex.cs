/*

using Microsoft.EntityFrameworkCore;

namespace ERP.Models {

     class to handle the connection between the DB and model classes

    //If you modify, change the models:
    1. Create a migration: dotnet ef migrations add someName
    2. Update database: dotnet ef database update

    public class DataContext: DbContext {

        pubic DataContext(DbContextOptions<DataContext> options): base(options){


        }

        // specify the list of models (classes)  that you want to become a table on the DB

        public DbSet<Car> Cars {get;set;}


    }

}
*/
using Microsoft.EntityFrameworkCore;

namespace ERP.Models{

    /*
        this class will handles the connection to DB
        and helps to retrieve/store/update data

        If somethings changes on the models/tables, exec:
        - dotnet ef migrations add <someName>
        - dotnet ef database update
    */
    public class DataContext : DbContext {

        public DataContext( DbContextOptions<DataContext> options ) : base(options) {
        }

        // specify which models need to be converted into DB tables
        public DbSet<Car> Cars {get; set;}
               

    }

}