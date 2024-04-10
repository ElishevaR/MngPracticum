namespace Mng.Api
{
    public class BaseMiddleWare
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<BaseMiddleWare> _logger;

        public BaseMiddleWare(RequestDelegate next, ILogger<BaseMiddleWare> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var requestSeq = Guid.NewGuid().ToString();
            _logger.LogInformation($"Request Starts {requestSeq}");
            context.Items.Add("RequestSequence", requestSeq);
            await _next(context);
            _logger.LogInformation($"Request Ends {requestSeq}");
        }
    }
}
