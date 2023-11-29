using BookSamsys.Infrastructure.DTOs;
using BookSamsys.Infrastructure.Helper;
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
        private readonly LivroService _service;

        public LivroController(LivroService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<MessengerHelper<ActionResult<IEnumerable<LivroDTO>>>> GetLivros()
        {
            return await _service.GetLivros();
        }

        [HttpGet("isbn", Name = "AdquirirLivro")]
        public async Task<MessengerHelper<ActionResult<LivroDTO>>> GetLivroByISBN(string isbn)
        {
            return await _service.GetLivroByISBN(isbn);
        }

        [HttpGet("Menorpreco")]
        public async Task<MessengerHelper<ActionResult<IEnumerable<LivroDTO>>>> GetLivrosByPreco()
        {
            return await _service.GetLivrosByPreco();
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
