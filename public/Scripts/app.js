// IIFE -- Immediately Invoked Function Express


/*
    File name: app.css
    Student name: Hinal Soni
    Student ID: 300990140 
    Date: February 16, 2019
*/
(function(){
    function Start() {
        console.log(`%c App Started...`, 
        "font-size: 20px; color: blue; font-weight: bold;");

        // ask the user if they are sure they want to delete something

        $(".btn-danger").click(function(event) {
            if(!confirm("Are You Sure??")) {
                event.preventDefault();
                window.location.assign("/contact-list");
            }
        });
    }

    window.addEventListener("load", Start);
})();