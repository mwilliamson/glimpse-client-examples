$thisDirectory = (Split-Path -parent $MyInvocation.MyCommand.Path)
$glimpseJsDestination = Join-Path $thisDirectory "glimpse.js"

If (!(Test-Path $glimpseJsDestination))
{
    $webClient = New-Object System.Net.WebClient
    $glimpseJsUrl = "https://raw.github.com/Glimpse/Glimpse/master/source/Glimpse.JavaScript/glimpse.js"
    $webClient.DownloadFile($glimpseJsUrl, $glimpseJsDestination)
}