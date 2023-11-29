using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookSamsys.Infrastructure.Models
{
    public class Livro
    {
        public int Id { get; set; }
        [Column(TypeName ="nvarchar(30)")]
        public string ISBN { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string? LivroNome { get; set; }
        public decimal Preco { get; set; }

    }
}
