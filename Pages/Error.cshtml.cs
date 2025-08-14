using RazorStartBootstrapAdmin.Pages.Error;
using Microsoft.AspNetCore.Mvc;

namespace RazorStartBootstrapAdmin.Pages;

public class ErrorModel : BaseErrorModel
{
    public int? Code { get; set; }

    private readonly ILogger<ErrorModel> _logger;

    public ErrorModel(ILogger<ErrorModel> logger)
    {
        _logger = logger;
    }

    public ActionResult OnGet(int? code = null)
    {
        if (code.HasValue)
        {
            var handledErrors = new[] { 401, 404 };
            if (handledErrors.Contains(code.Value))
                return RedirectToPage($"/Error/{code.Value}");
        }

        Code = code;

        return Page();
    }
}

