using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TogetherAYC.data.Migrations
{
    public partial class UserId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Donations_Users_UserId",
                table: "Donations");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Donations",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Donations_Users_UserId",
                table: "Donations",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Donations_Users_UserId",
                table: "Donations");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Donations",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Donations_Users_UserId",
                table: "Donations",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
