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

        //Step.1 - get a referance to an entry point(s) (insertion / deletion)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;

        //Step.2 - Create a HTML Element in memory 
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is Article Paragraph</p>`;
        //Step.3 - Configure new Element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        let FirstString = "This is";
        let SecondString = `${FirstString} the Main Paragraph`;
        MainParagraph.textContent = SecondString;
        Article.setAttribute("class", "contanier");


        //Step.4 - perform insertion / deletion

        //Example of insert after
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
        //text content shows code while innerhtml while show html on page
        //DocumentBody.innerHTML = `
        //    <div class="container">
        //    <h1 class="display-1">Hello, World!</h1>
        //    <p class="mt-5">and...What do you think of this</p>
        //    </div>
       // 
       // `;

        //example of insert before
        //MainContent.before(MainParagraph);
        //Examle of deleting insertion so example below is of deleting the button
        //document.getElementById("AboutUsButton").remove();


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