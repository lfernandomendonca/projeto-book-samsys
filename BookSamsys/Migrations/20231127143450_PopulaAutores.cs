using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookSamsys.Migrations
{
    public partial class PopulaAutores : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
        INSERT INTO Autores (AutorNome) VALUES ('Lewis Carroll'),
                                           ('Gabriel García Márquez'),
                                           ('Fiódor Dostoiévski'),
                                           ('Miguel de Cervantes'),
                                           ('José Saramago'),
                                           ('Ray Bradbury'),
                                           ('J.K. Rowling'),
                                           ('Harper Lee'),
                                           ('Arthur Conan Doyle'),
                                           ('F. Scott Fitzgerald'),
                                           ('Antoine de Saint-Exupéry'),
                                           ('J.R.R. Tolkien'),
                                           ('Jane Austen'),
                                           ('George Orwell');
    ");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"DELETE FROM Autores");
        }
    }
}
