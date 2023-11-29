using BookSamsys.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace BookSamsys.Infrastructure.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Autor>Autores { get; set; }
        public DbSet<Livro>Livros { get; set; }
        public DbSet<Autor_Livro>Relacao { get; set; }
    }
}
