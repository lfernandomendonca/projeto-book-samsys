using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookSamsys.Migrations
{
    public partial class PopulaLivros : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                   "VALUES ('9788533612314', 'Aventuras de Alice no País das Maravilhas', 24.99)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9788535904437', 'Cem Anos de Solidão', 32.00)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9788573260718', 'Crime e Castigo', 22.95)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9788532247978', 'Dom Quixote', 27.50)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9788535906240', 'Ensaio sobre a Cegueira', 25.50)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9788535914849', 'Fahrenheit 451', 23.75)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9788532530785', 'Harry Potter e a Pedra Filosofal', 36.99)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9780061120084', 'Matar um Mockingbird', 31.50)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9788501034181', 'O Cão dos Baskervilles', 29.99)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9788535914849', 'O Grande Gatsby', 29.99)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9788577346434', 'O Pequeno Príncipe', 18.50)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9788525053035', 'O Senhor dos Anéis: A Sociedade do Anel', 34.99)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9788535904635', 'Orgulho e Preconceito', 21.99)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9780061120084', 'O Sol é para Todos', 26.75)");

            migrationBuilder.Sql("INSERT INTO Livros(ISBN, LivroNome, Preco) " +
                               "VALUES ('9788535914849', '1984', 19.99)");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
