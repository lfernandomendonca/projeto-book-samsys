using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookSamsys.Migrations
{
    public partial class NewMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Livros",
                table: "Livros");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Livros",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Livros",
                table: "Livros",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Livros",
                table: "Livros");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Livros");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Livros",
                table: "Livros",
                column: "ISBN");
        }
    }
}
