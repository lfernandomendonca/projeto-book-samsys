using BookSamsys.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;


namespace BookSamsys.Infrastructure.Repositories
{
    public interface ILivroRepository : IRepository<Livro>
    {
        Task<IEnumerable<Livro>> GetLivrosPorPreco();

        Task<Livro> GetLivroByISBN(string isbn);
        
    }
}
