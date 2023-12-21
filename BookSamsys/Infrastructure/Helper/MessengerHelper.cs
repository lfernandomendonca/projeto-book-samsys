namespace BookSamsys.Infrastructure.Helper
{
    public class MessengerHelper<T>
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public T Obj { get; set; }
        public Metadata Metadata { get; set; }      
    }

    public class Metadata 
    {
        public int TotalItens { get; set; }
        public int ItensPorPagina { get; set; }
        public int PaginaAtual { get; set; }
        public int TotalPaginas { get; set; }
    }
}
