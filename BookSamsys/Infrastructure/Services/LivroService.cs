using AutoMapper;
using BookSamsys.Infrastructure.DTOs;
using BookSamsys.Infrastructure.Helper;
using BookSamsys.Infrastructure.Models;
using BookSamsys.Infrastructure.Repositories;
using BookSamsys.Infrastructure.Repositories.UoW;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
namespace BookSamsys.Infrastructure.Servicos
{
    public class LivroService
    {
        private readonly IUnityOfWork _uOf;
        private readonly IMapper _mapper;
        private readonly ILivroRepository _livroRepository;

        public LivroService(IUnityOfWork context, IMapper mapper, ILivroRepository livroRepo)
        {
            _uOf = context;
            _mapper = mapper;
            _livroRepository = livroRepo;
        }

        public async Task<MessengerHelper<ActionResult<IEnumerable<LivroDTO>>>> GetLivros()
        {
            var msgErro = "Não há livros na lista.";
            var msgOk = "Livros foram listados com sucesso.";

            MessengerHelper<ActionResult<IEnumerable<LivroDTO>>> response = new();
            try
            {
                var livros = await _uOf.LivroRepository.Get().ToListAsync(); ;
                if (livros == null)
                {
                    response.Message = msgErro;
                    return response;
                }
                var livrosDto = _mapper.Map<List<LivroDTO>>(livros);
                response.Message = msgOk;
                response.Obj = livrosDto;
                response.Success = true;
                return response;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task <MessengerHelper<ActionResult<LivroDTO>>> GetLivroByISBN(string isbn)
        {
            MessengerHelper<ActionResult<LivroDTO>> response = new();
            try
            {
                var livro = await _livroRepository.GetLivroByISBN(isbn);
                if (isbn.Length != 13)
                {
                    response.Message = "Por favor inserir ISBN com 13 caracteres.";
                    return response;
                }
                if (livro == null)
                {
                    response.Message = "Não foi possível encontrar o livro utilizando ISBN inserido.";
                    return response;
                }
                var livroDto = _mapper.Map<LivroDTO>(livro);
                response.Message = "Livro foi encontrado com sucesso.";
                response.Obj = livroDto;
                response.Success = true;
                return response;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<MessengerHelper<ActionResult<IEnumerable<LivroDTO>>>> GetLivrosByPreco()
        {
            MessengerHelper<ActionResult<IEnumerable<LivroDTO>>> response = new();
            try
            {
                var livros = await _livroRepository.GetLivrosPorPreco();
                if (livros == null)
                {
                    response.Message = "Não há livros na lista.";
                    return response;
                }

                var livrosDto = _mapper.Map<List<LivroDTO>>(livros);
                response.Message = "Livros foram listados com sucesso.";
                response.Obj = livrosDto;
                response.Success = true;
                return response;

            }
            catch(Exception)
            {
                throw;
            }
        }

        public async Task<MessengerHelper<ActionResult>> PostLivro([FromBody] LivroDTO livroDto)
        {
            MessengerHelper<ActionResult> response = new();
            try
            {
                var livro = _mapper.Map<Livro>(livroDto);
                if (livro == null)
                {
                    if (livroDto.ISBN.Length == 13 && livroDto.LivroNome.Length > 0 && livroDto.Preco > 0)
                    {
                        _uOf.LivroRepository.Add(livro);
                        await _uOf.Commit();

                        var livroDtoResult = _mapper.Map<LivroDTO>(livro);
                        response.Message = "Livro foi adicionado com sucesso.";
                        response.Success = true;
                        return response;
                    }
                    response.Message = "Erro. Campos Preenchidos incorretamente.";
                    return response;
                }
                response.Message = "Livro já existe.";
                return response;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<MessengerHelper<ActionResult>> PutLivro(string isbn, LivroDTO livroDto)
        {
            var livro = await _livroRepository.GetLivroByISBN(isbn);

            try
            {
                MessengerHelper<ActionResult> response = new MessengerHelper<ActionResult>();

                if (isbn.Length != 13)
                {
                    response.Message = "O ISBN precisa ter 13 caracteres";
                    return response;
                }
                if (livro == null)
                {
                    response.Message = "Livro não encontrado.";
                    return response;
                }
                if (livroDto.ISBN != livro.ISBN || livroDto.LivroNome.Length < 1 || livroDto.Preco <= 0)
                {
                    response.Message = "Erro. Campos Preenchidos incorretamente.";
                    return response;
                }
                var mapLivro = _mapper.Map<Livro>(livroDto);
                _uOf.LivroRepository.Update(mapLivro);
                await _uOf.Commit();

                livro = await _livroRepository.GetLivroByISBN(isbn);
                var livroDtoResult = _mapper.Map<LivroDTO>(livro);

                response.Message = "Informações do livro foram atualizadas.";
                response.Success = true;
                return response;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<MessengerHelper<ActionResult<LivroDTO>>> DeleteLivroByISBN(string isbn)
        {        
            MessengerHelper<ActionResult<LivroDTO>> response = new();
            try
            {
                var livro = await _livroRepository.GetLivroByISBN(isbn);

                if (isbn.Length != 13)
                {
                    response.Message = "Por favor inserir ISBN com 13 caracteres.";
                    return response;
                }
                if (livro != null)
                {
                    _uOf.LivroRepository.Delete(livro);
                    await _uOf.Commit();
                    response.Message = "Livro foi removido.";
                    response.Success = true;
                    return response;

                }
                else
                {
                    response.Message = "Livro não foi encontrado.";
                    return response;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
