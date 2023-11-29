namespace BookSamsys.Infrastructure.Repositories
{
    public interface IRepository<T>
    {
        IQueryable<T> Get();
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);

    }
}
