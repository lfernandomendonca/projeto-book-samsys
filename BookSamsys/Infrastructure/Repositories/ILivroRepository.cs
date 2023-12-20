using BookSamsys.Infrastructure.DTOs;
using BookSamsys.Infrastructure.Helper;
using BookSamsys.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;


namespace BookSamsys.Infrastructure.Repositories
{
    public interface ILivroRepository : IRepository<Livro>
    {
        Task<IEnumerable<Livro>> GetLivrosByHighestPrice();
        Task<IEnumerable<Livro>> GetLivrosByLowestPrice();
        Task<Livro> GetLivroByISBN(string isbn);
      


    }
}
