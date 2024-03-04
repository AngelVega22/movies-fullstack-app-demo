using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MoviesWebApi.Models
{
    public class Showtime
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ShowtimeID { get; set; }
        public int MovieID { get; set; }
        public required string Theater { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int AvailableSeats { get; set; }
        public  Movie? Movie { get; set; }
        public ICollection<Reservation>? Reservations { get; set; }
    }
}
