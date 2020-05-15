using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ERP.Models;

namespace ERP.Controllers{

    public class CatalogController : Controller{

        private DataContext dbContext;

        public CatalogController(DataContext context)
        {
            dbContext = context;
            
        }

        public IActionResult Index(){
            return View();

        }

        public IActionResult Register(){
            return View();

        }
//default HTTP is get
        [HttpPost]
        public IActionResult SaveCar([FromBody] Car car){
            System.Console.WriteLine("Saving new car");
            System.Console.WriteLine(car.Make);
            //save car
            dbContext.Cars.Add(car);
            dbContext.SaveChanges();
            //car.ID = 1;
            return Json(car);

        }

        [HttpGet]
         public IActionResult GetCatalog(){
            // read the list from the DB
            var cars = dbContext.Cars.ToList();
            // send the list of cars
            return Json(cars);
        }
    }
}