namespace BookSamsys.Infrastructure.DTOs
{
    public class LivroDTO
    {
        public string ISBN { get; set; }
       
        public string? LivroNome { get; set; }
        public decimal Preco { get; set; }
    }
}
