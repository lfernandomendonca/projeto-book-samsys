using BookSamsys.Infrastructure.Context;

namespace BookSamsys.Infrastructure.Repositories.UoW
{
    public class UnityOfWork : IUnityOfWork
    {
        private LivroRepository _livroRepo;
        public AppDbContext _context;

        public UnityOfWork(AppDbContext context)
        {
            _context = context;
        }

        public ILivroRepository LivroRepository
        {
            get
            {
                return _livroRepo = _livroRepo ?? new LivroRepository(_context);
            }
        }

        public async Task Commit()
        {
           await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
