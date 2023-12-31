﻿using BookSamsys.Infrastructure.DTOs;
using BookSamsys.Infrastructure.Helper;
using Microsoft.AspNetCore.Mvc;

namespace BookSamsys.Infrastructure.Services
{
    public interface ILivroService
    {
        Task<MessengerHelper<ActionResult<IEnumerable<LivroDTO>>>> GetLivros();
        Task<MessengerHelper<ActionResult<LivroDTO>>> GetLivroByISBN(string isbn);
        Task<MessengerHelper<ActionResult<IEnumerable<LivroDTO>>>> GetLivrosByHighestPrice();
        Task<MessengerHelper<ActionResult<IEnumerable<LivroDTO>>>> GetLivrosByLowestPrice();
        Task<MessengerHelper<ActionResult>> PostLivro(LivroDTO livroDto);
        Task<MessengerHelper<ActionResult>> PutLivro(LivroDTO livroDto);
        Task<MessengerHelper<ActionResult<LivroDTO>>> DeleteLivroByISBN(string isbn);
        Task<MessengerHelper<ActionResult<IEnumerable<LivroDTO>>>> PaginatedLivros(int page, int perPage);

    }
}
