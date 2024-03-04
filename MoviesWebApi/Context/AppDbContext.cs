using Microsoft.EntityFrameworkCore;
using MoviesWebApi.Models;

namespace MoviesWebApi.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options) 
        {
            
        }

        public DbSet<Movie> Movies { get; set; }

        public DbSet<Showtime> Showtime { get; set; }

        public DbSet<Reservation> Reservations { get; set; }
    }
}
