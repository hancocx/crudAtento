using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUDAtento.Models
{
    public class Book
    {
        public int ID { get; set; } // Propiedad para el identificador único del libro
        public string Titulo { get; set; } // Propiedad para el nombre del libro
        public string Autor { get; set; } // Propiedad para el autor del libro
        public int AnoPublicacion { get; set; } // Propiedad para el año de publicación del libro
        public string Genero { get; set; } // Propiedad para el género del libro
        public float Precio { get; set; } // Propiedad para el autor del libro
    }
}