namespace BookSamsys.Infrastructure.Repositories
{
    public interface IRepository<T>
    {
        IQueryable<T> Get();
        public void Add(T entity);
        void Update(T entity);
        void Delete(T entity);

    }
}
