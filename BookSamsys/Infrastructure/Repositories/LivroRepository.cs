using BookSamsys.Infrastructure.Context;
using BookSamsys.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections;


namespace BookSamsys.Infrastructure.Repositories
{
    public class LivroRepository : Repository<Livro>, ILivroRepository
    {
        public LivroRepository(AppDbContext context) : base(context)
        {

        }       

        public async Task<IEnumerable<Livro>> GetLivrosByLowestPrice()
        {
            return await Get().OrderBy(c => c.Preco).ToListAsync();
        }

        public async Task<IEnumerable<Livro>> GetLivrosByHighestPrice()
        {
            return await Get().OrderByDescending(c => c.Preco).ToListAsync();
        }

        public async Task<Livro> GetLivroByISBN(string isbn)
        {
            var x = await _context.Livros.Where(livro => livro.ISBN == isbn).FirstOrDefaultAsync();
                return x;
        }

        
    }
}
