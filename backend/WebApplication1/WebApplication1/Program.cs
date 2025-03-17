using Microsoft.EntityFrameworkCore;
using Mission10_Hiller;
using Mission10_Hiller.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add database context
builder.Services.AddDbContext<BowlingLeagueContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("BowlerConnection")));

// Add CORS policy
;

builder.Services.AddCors(options =>
{
    options.AddPolicy("OpenPolicy", builder =>
        builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(x=>x.WithOrigins("http://localhost:5174"));
app.UseHttpsRedirection();


app.UseAuthorization();

app.MapControllers();

app.Run();