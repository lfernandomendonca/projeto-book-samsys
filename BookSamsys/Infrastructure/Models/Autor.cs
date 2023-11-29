using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookSamsys.Infrastructure.Models
{
    public class Autor
    {
        [Key]
        public int AutorId { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        [Required]
        public string AutorNome { get; set;}
    }
}
