using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesWebApi.Context;
using MoviesWebApi.Models;

namespace MoviesWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowtimesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ShowtimesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Showtimes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Showtime>>> GetShowtime()
        {
            return await _context.Showtime.ToListAsync();
        }

        // GET: api/Showtimes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Showtime>> GetShowtime(int id)
        {
            var showtime = await _context.Showtime.FindAsync(id);

            if (showtime == null)
            {
                return NotFound();
            }

            return showtime;
        }

        // PUT: api/Showtimes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShowtime(int id, Showtime showtime)
        {
            if (id != showtime.ShowtimeID)
            {
                return BadRequest();
            }

            _context.Entry(showtime).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShowtimeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Showtimes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Showtime>> PostShowtime(Showtime showtime)
        {
            _context.Showtime.Add(showtime);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetShowtime", new { id = showtime.ShowtimeID }, showtime);
        }

        // DELETE: api/Showtimes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShowtime(int id)
        {
            var showtime = await _context.Showtime.FindAsync(id);
            if (showtime == null)
            {
                return NotFound();
            }

            _context.Showtime.Remove(showtime);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ShowtimeExists(int id)
        {
            return _context.Showtime.Any(e => e.ShowtimeID == id);
        }
    }
}
