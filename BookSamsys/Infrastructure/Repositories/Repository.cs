using BookSamsys.Infrastructure.Context;
using BookSamsys.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq.Expressions;

namespace BookSamsys.Infrastructure.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected AppDbContext _context;

        public Repository(AppDbContext context)
        {
            _context = context;
        }

        public IQueryable<T> Get()
        {
            return _context.Set<T>().AsNoTracking();
          
        }

        public void Add(T entity)
        {
            _context.Set<T>().Add(entity);
           
        }

        public void Delete(T entity)
        {
            _context.Set<T>().Remove(entity);
          
        }

        public void Update(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            _context.Set<T>().Update(entity);
           
        }

        public async Task Commit()
        {
            await _context.SaveChangesAsync();
        }
    }
}
