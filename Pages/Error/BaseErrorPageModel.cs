using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RazorStartBootstrapAdmin.Pages.Error;

[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
[IgnoreAntiforgeryToken]
public class BaseErrorModel : PageModel
{
    public string? RequestId => Activity.Current?.Id ?? HttpContext.TraceIdentifier;
    public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
}

