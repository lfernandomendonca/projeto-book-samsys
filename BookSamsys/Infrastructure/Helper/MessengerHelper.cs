namespace BookSamsys.Infrastructure.Helper
{
    public class MessengerHelper<T>
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public T Obj { get; set; }
    }
}
