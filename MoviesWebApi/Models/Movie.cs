using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MoviesWebApi.Models
{
    public class Movie
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MovieID { get; set; }
        public required string Title { get; set; }
        public required string Genre { get; set; }
        public required string Synopsis { get; set; }
        public int Duration { get; set; }
        public DateTime StartTime { get; set; }
        public required string ImageURL { get; set; }

        public ICollection<Showtime>? Showtimes { get; set; }
    }
}
