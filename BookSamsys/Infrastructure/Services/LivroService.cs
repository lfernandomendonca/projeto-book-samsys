using AutoMapper;
using BookSamsys.Infrastructure.DTOs;
using BookSamsys.Infrastructure.Helper;
using BookSamsys.Infrastructure.Models;
using BookSamsys.Infrastructure.Repositories;
using BookSamsys.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
namespace BookSamsys.Infrastructure.Servicos
{
    public class LivroService : ILivroService
    {

        private readonly IMapper _mapper;
        private readonly ILivroRepository _livroRepository;

        public LivroService(IMapper mapper, ILivroRepository livroRepo)
        {
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
                var livros = await _livroRepository.Get().ToListAsync(); ;
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

        public async Task<MessengerHelper<ActionResult<LivroDTO>>> GetLivroByISBN(string isbn)
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

        public async Task<MessengerHelper<ActionResult<IEnumerable<LivroDTO>>>> GetLivrosByHighestPrice()
        {
            MessengerHelper<ActionResult<IEnumerable<LivroDTO>>> response = new();
            try
            {
                var livros = await _livroRepository.GetLivrosByHighestPrice();
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
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<MessengerHelper<ActionResult<IEnumerable<LivroDTO>>>> GetLivrosByLowestPrice()
        {
            MessengerHelper<ActionResult<IEnumerable<LivroDTO>>> response = new();
            try
            {
                var livros = await _livroRepository.GetLivrosByLowestPrice();
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
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<MessengerHelper<ActionResult>> PostLivro([FromBody] LivroDTO livroDto)
        {
            MessengerHelper<ActionResult> response = new();
            try
            {
                if (livroDto.ISBN.Length != 13 || livroDto.LivroNome.Length == 0 || livroDto.Preco <= 0)
                {
                    response.Message = "Erro. Campos preenchidos incorretamente.";
                    response.Success = false;
                    return response;
                }
                if (livroDto.ISBN.Length == 13 && livroDto.LivroNome.Length >= 1 && livroDto.Preco > 0)
                {
                    var livro = _mapper.Map<Livro>(livroDto);
                    var livroExistente = await _livroRepository.GetLivroByISBN(livro.ISBN); ;

                    if (livroExistente == null)
                    {
                        _livroRepository.Add(livro);
                        await _livroRepository.Commit();

                        var livroDtoResult = _mapper.Map<LivroDTO>(livro);
                        response.Message = "Livro foi adicionado com sucesso.";
                        response.Success = true;
                    }
                    else
                    {
                        response.Message = "Livro já existe.";
                        response.Success = false;

                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return response;
        }


        public async Task<MessengerHelper<ActionResult>> PutLivro(LivroDTO livroDto)
        {
            MessengerHelper<ActionResult> response = new MessengerHelper<ActionResult>();

            try
            {
                // Verificar se o ISBN tem 13 caracteres
                if (livroDto.ISBN.Length != 13)
                {
                    response.Message = "O ISBN precisa ter 13 caracteres.";
                    response.Success = false;
                    return response;
                }

                // Obter o livro existente pelo ISBN
                var livroInDb = await _livroRepository.GetLivroByISBN(livroDto.ISBN);

                // Verificar se o livro existe
                if (livroInDb == null)
                {
                    response.Message = "Livro não encontrado.";
                    response.Success = false;
                    return response;
                }

                // Verificar se os campos do DTO estão corretos
                if (livroDto.ISBN != livroInDb.ISBN || livroDto.LivroNome.Length < 1 || livroDto.Preco <= 0)
                {
                    response.Message = "Erro. Campos Preenchidos incorretamente.";
                    response.Success = false;
                    return response;
                }

                // Atualizar as propriedades do livro existente com base no DTO
                livroInDb.LivroNome = livroDto.LivroNome;
                livroInDb.Preco = livroDto.Preco;

                // Atualizar o livro no repositório
                _livroRepository.Update(livroInDb);
                await _livroRepository.Commit();

                // Recarregar o livro do repositório para obter as informações atualizadas
                livroInDb = await _livroRepository.GetLivroByISBN(livroDto.ISBN);
                var livroDtoResult = _mapper.Map<LivroDTO>(livroInDb);

                response.Message = "Informações do livro foram atualizadas.";
                response.Success = true;
                return response;
            }
            catch (Exception)
            {
                throw; // Considere lidar com exceções de maneira mais específica se necessário
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
                    _livroRepository.Delete(livro);
                    await _livroRepository.Commit();
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
