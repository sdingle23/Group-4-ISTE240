function menuHider()
    {
     
        var x = document.getElementById("navBar");
        if (x.className === "topnav")
        {
            x.className = x.className + " responsive";
        } 
        else 
        {
            x.className = "topnav";
        }
    } 