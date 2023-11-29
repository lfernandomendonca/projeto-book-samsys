using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookSamsys.Infrastructure.Models
{
    public class Autor_Livro
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Autores")]
        public int AutorId { get; set; }
        [ForeignKey("Autores")]
        public string AutorNome { get; set; }
        [ForeignKey("Livros")]
        public string ISBN { get; set; }
    }
}
