using AutoMapper;
using BookSamsys.Infrastructure.Models;

namespace BookSamsys.Infrastructure.DTOs.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Livro, LivroDTO>().ReverseMap();
        }
    }
}
