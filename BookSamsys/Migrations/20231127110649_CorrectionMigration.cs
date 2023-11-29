using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookSamsys.Migrations
{
    public partial class CorrectionMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AutorName",
                table: "Autores");

            migrationBuilder.AddColumn<string>(
                name: "AutorNome",
                table: "Autores",
                type: "nvarchar(50)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AutorNome",
                table: "Autores");

            migrationBuilder.AddColumn<string>(
                name: "AutorName",
                table: "Autores",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
