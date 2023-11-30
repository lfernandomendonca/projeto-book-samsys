using BookSamsys.Infrastructure.DTOs;
using BookSamsys.Infrastructure.Helper;
using BookSamsys.Infrastructure.Services;
using BookSamsys.Infrastructure.Servicos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace BookSamsys.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LivroController : ControllerBase
    {
        private readonly ILivroService _service;

        public LivroController(ILivroService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<MessengerHelper<ActionResult<IEnumerable<LivroDTO>>>> GetLivros()
        {
            return await _service.GetLivros();
        }

        [HttpGet("isbn")]
        public async Task<MessengerHelper<ActionResult<LivroDTO>>> GetLivroByISBN(string isbn)
        {
            return await _service.GetLivroByISBN(isbn);
        }

        [HttpGet("MaiorPreço")]
        public async Task<MessengerHelper<ActionResult<IEnumerable<LivroDTO>>>> GetLivrosByHighestPrice()
        {
            return await _service.GetLivrosByHighestPrice();
        }

        [HttpGet("MenorPreço")]
        public async Task<MessengerHelper<ActionResult<IEnumerable<LivroDTO>>>> GetLivrosByLowestPrice()
        {
            return await _service.GetLivrosByLowestPrice();
        }


        [HttpPost]
        public async Task<MessengerHelper<ActionResult>> PostLivro([FromBody] LivroDTO livroDto)
        {
            return await _service.PostLivro(livroDto);
        }

        [HttpPut]
        public async Task<MessengerHelper<ActionResult>> PutLivro(string isbn, LivroDTO livroDto)
        {
            return await _service.PutLivro(isbn,livroDto);
        }

        [HttpDelete("ISBN")]
        public async Task<MessengerHelper<ActionResult<LivroDTO>>> DeleteLivroByISBN(string isbn)
        {
            return await _service.DeleteLivroByISBN(isbn);
        }
    }
}
