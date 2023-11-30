namespace BookSamsys.Infrastructure.Repositories.UoW
{
    public interface IUnitOfWork
    {
        ILivroRepository LivroRepository { get; }
        Task Commit();
    }
}
