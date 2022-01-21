/* IIFE immediately Invoked Funtion Expression */
// Anonymous Self
(function()
{

    function DisplayHomePage()
    {
        console.log("Home Page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {

            location.href = "about.html";
        });

    }

    function DisplayProducts()
    {
        console.log("Products Page");
    }
    function DisplayServicesPage()
    {
        console.log("Services Page");
    }
    function DisplayAboutPage()
    {
        console.log("About Page");
    }
    function DisplayContactPage()
    {
        console.log("Contacts Page");
    }
    //named funcation option
    
    function Start()
    {
        console.log("App Started!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProducts();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }

    } 


    window.addEventListener("load", Start);


})();