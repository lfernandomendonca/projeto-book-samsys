using BookSamsys.Infrastructure.Context;
using BookSamsys.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;


namespace BookSamsys.Infrastructure.Repositories
{
    public class LivroRepository : Repository<Livro>, ILivroRepository
    {
        public LivroRepository(AppDbContext context) : base(context)
        {

        }       

        public async Task<IEnumerable<Livro>> GetLivrosPorPreco()
        {
            return await Get().OrderBy(c => c.Preco).ToListAsync();
        }

        public async Task<Livro> GetLivroByISBN(string isbn)
        {
            return await _context.Set<Livro>().Where(livro => livro.ISBN.Equals(isbn)).SingleOrDefaultAsync();
        }
    }
}
