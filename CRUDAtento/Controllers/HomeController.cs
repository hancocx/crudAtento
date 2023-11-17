using CRUDAtento.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRUDAtento.Controllers
{
    public class HomeController : Controller
    {
        BookDB bDB = new BookDB();
        
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult List()
        {
            return Json(bDB.ListAll(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult Add(Book b)
        {
            return Json(bDB.Add(b), JsonRequestBehavior.AllowGet);
        }

        public JsonResult getById(int ID)
        {
            var Book = bDB.ListAll().Find(x => x.ID.Equals(ID));
            return Json(Book, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(Book b)
        {
            return Json(bDB.Update(b), JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete(int ID)
        {
            return Json(bDB.Delete(ID), JsonRequestBehavior.AllowGet);
        }
    }
}