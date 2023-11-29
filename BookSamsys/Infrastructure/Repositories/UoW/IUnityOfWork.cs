namespace BookSamsys.Infrastructure.Repositories.UoW
{
    public interface IUnityOfWork
    {
        ILivroRepository LivroRepository { get; }
        Task Commit();
    }
}
