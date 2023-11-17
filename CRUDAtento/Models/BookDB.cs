using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace CRUDAtento.Models
{
    public class BookDB
    {
        // Declara cadena de conexión
        string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;

        // Devolver la lista de todos los libros
        public List<Book> ListAll()
        {
            /* Inicializa una lista vacía de 'Book' que eventualmente contendrá objetos */
            List<Book> lst = new List<Book>();

            // Establece una conexión a la base de datos
            using (SqlConnection con = new SqlConnection(cs))
            {
                // Antes de ejecutar cualquier comando, abre la conexión
                con.Open();

                /* Crea un comando SQL (SqlCommand) que llama a un procedimiento 
                 * almacenado llamado sp_SelectBook. Establece el tipo de 
                 * comando como CommandType.StoredProcedure y luego ejecuta el 
                 * comando, lo que resulta en un SqlDataReader (rdr).
                 */
                SqlCommand com = new SqlCommand("sp_SelectBook", con);
                com.CommandType = CommandType.StoredProcedure;
                SqlDataReader rdr = com.ExecuteReader();

                /* Lee cada fila devuelta por el procedimiento almacenado. 
                 * Para cada fila, crea un nuevo objeto Book con los 
                 * datos recuperados (ID, Titulo, Autor, AnoPublicacion, 
                 * Genero, Precio) y lo agrega a la lista lst.
                 */
                while (rdr.Read())
                {
                    lst.Add(new Book
                    {
                        ID = Convert.ToInt32(rdr["ID"]),
                        Titulo = rdr["Titulo"].ToString(),
                        Autor = rdr["Autor"].ToString(),
                        AnoPublicacion = Convert.ToInt32(rdr["AnoPublicacion"]),
                        Genero = rdr["Genero"].ToString(),
                        Precio = Convert.ToSingle(rdr["Precio"]),
                    });
                }

                // Devuelve la lista de empleados
                return lst;
            }
        }

        // Método para añadir un libro
        public int Add(Book b)
        {
            int i;

            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();
                SqlCommand com = new SqlCommand("sp_InsertUpdateBook", con);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@Id", b.ID);
                com.Parameters.AddWithValue("@Titulo", b.Titulo);
                com.Parameters.AddWithValue("@Autor", b.Autor);
                com.Parameters.AddWithValue("@AnoPublicacion", b.AnoPublicacion);
                com.Parameters.AddWithValue("@Genero", b.Genero);
                com.Parameters.AddWithValue("@Precio", b.Precio);
                com.Parameters.AddWithValue("@Action", "Insert");
                i = com.ExecuteNonQuery();
            }
            return i;
        }

        // Método para actualizar un libro
        public int Update(Book b)
        {
            int i;

            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();
                SqlCommand com = new SqlCommand("sp_InsertUpdateBook", con);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@Id", b.ID);
                com.Parameters.AddWithValue("@Titulo", b.Titulo);
                com.Parameters.AddWithValue("@Autor", b.Autor);
                com.Parameters.AddWithValue("@AnoPublicacion", b.AnoPublicacion);
                com.Parameters.AddWithValue("@Genero", b.Genero);
                com.Parameters.AddWithValue("@Precio", b.Precio);
                com.Parameters.AddWithValue("@Action", "Update");
                i = com.ExecuteNonQuery();
            }
            return i;
        }

        // Método para eliminar un registro
        public int Delete(int ID)
        {
            int i;

            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();
                SqlCommand com = new SqlCommand("sp_DeleteBook", con);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@Id", ID);
                i = com.ExecuteNonQuery();
            }
            return i;
        }
    }
}