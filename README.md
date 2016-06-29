# AzureSpeed
[![licence badge]][licence]
[![stars badge]][stars]
[![forks badge]][forks]
[![issues badge]][issues]

A speedtest tool for Azure. Test network latencies and speed to Azure data centers from different countries. 

## Demo
http://www.azurespeed.com   

## How To Run AzureSpeed
1. Open **AzureSpeed.sln** in Visual Studio 2015
2. In each region you want to run speed test, create one storage account 
3. Replace storage accounts and keys in **AzureSpeed.WebUI\App_Data\settings.json**
4. Run AdminConsole to initialize storage account, make sure it loads correct **settings.json** by modifying line 23 in AzureSpeedData.cs step 2, this tool will take care of everything needs for a storage account to run speed test
 - Enable CORS
 - Create a container azurespeed
 - Create a callback.js which is used by latency test
 - Upload a 100 mb dummy file for download speed test.
5. Replace storage account names in **AzureSpeed.WebUI\app\common.js**
6. You are all set, enjoy!

## Built on
 - [ASP.NET Core](https://github.com/aspnet)
 - [jQuery](https://github.com/jquery/jquery)
 - [bootstrap](https://github.com/twbs/bootstrap)
 - [angular](https://github.com/angular/angular)
 - [font awesome](https://github.com/FortAwesome/Font-Awesome)
 - [d3](https://github.com/mbostock/d3)
 - [jazure](https://github.com/orcame/jazure)
 - [SB Admin 2 Theme](https://github.com/IronSummitMedia/startbootstrap-sb-admin-2)

## License
[MIT](/LICENSE)

[licence badge]:https://img.shields.io/badge/license-MIT-blue.svg
[stars badge]:https://img.shields.io/github/stars/blrchen/AzureSpeed.svg
[forks badge]:https://img.shields.io/github/forks/blrchen/AzureSpeed.svg
[issues badge]:https://img.shields.io/github/issues/blrchen/AzureSpeed.svg

[licence]:https://github.com/blrchen/AzureSpeed/blob/master/LICENSE
[stars]:https://github.com/blrchen/AzureSpeed/stargazers
[forks]:https://github.com/blrchen/AzureSpeed/network
[issues]:https://github.com/blrchen/AzureSpeed/issues
