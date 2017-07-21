$( document ).ready(function() {
    // Create Array of Cars

    var cars = [
        { "model": "19** Porshe 911 Carera",
            "descr": "Possibly one of the most iconic Porshes ever made, it's also a blast to drive.",
            "price": "36000",
            "imgUrl": "../Images/911.jpg"},

        { "model": "1965 Lotus Elan",
            "descr": "One of the best 'feel the road' cars from the kings of handeling.",
            "price": "54000",
            "imgUrl": "../Images/1965 Lotus Elan.JPG"},

        { "model": "1965 TVR Griffith",
            "descr": "A truly amazing drive in a classic roadster by one of the greatest makers",
            "price": "38000",
            "imgUrl": "../Images/1965 TVR Griffith.jpg"},

        { "model": "1969 Dodge Charger Daytona.jpg",
            "descr": "Ugly but fun to drive. One of Detroit's best muscle cars. Lovingly restored to factory specs.",
            "price": "45000",
            "imgUrl": "../Images/1969 Charger Daytona.jpg"},

        { "model": "1969 Ceverolet Corvette ZR1",
            "descr": "One of the first ZR1's to roll off the line. A clasic engineered by Lotus and the birth of a legend.",
            "price": "49500",
            "imgUrl": "../Images/1990-Corvette-ZR1.jpg"},
        
        /******** template of car object ***********
        { "model": "",
            "descr": "",
            "price": "",
            "imgUrl": "../Images/"},
        ********************************************/
    ]


    function makeUL(array) {
        // Create the list element:
        var list = document.createElement("ul");
            $(list).addClass("noStyle");
            $(list).attr("id", "vehicles");
            

        for(var i = 0; i < array.length; i++) {
            // Create the list item:
            var item = document.createElement("li");
            $(item).attr("id","car" + i);

            // Add Wrapper
            var wrapper = document.createElement("div");
            $(wrapper).addClass("col-md-4 col-sm-6 col-xs-8");
            $(wrapper).attr("id","thumbWrap");
            item.appendChild(wrapper);

            //Add Spacer
            var spacer = document.createElement("div");
            $(spacer).addClass("thumbnail spacer");
            wrapper.appendChild(spacer);

            //add Caption
            var caption = document.createElement("div");
             $(caption).addClass("caption");
             spacer.appendChild(caption);

            //add label
            var label = document.createElement("h4");
            $(label).attr("id", "label" + i);
            $(label).html(array[i].model);
             caption.appendChild(label);

            //Add Description
            var descr = document.createElement("h5");
             $(descr).html(array[i].descr);
             caption.appendChild(descr);

            //Add Price and calculate tax @ 8%
            var price = document.createElement("h5");
            //format #'s as USD
            var priceAmt = array[i].price;
            var taxAmt = array[i].price * .08;
             $(price).html("Price: $" + priceAmt.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
             caption.appendChild(price);
             var tax = document.createElement("span");
             $(tax).html("Tax: $" + taxAmt.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
             caption.appendChild(tax);
            
            //Add image
            var image = document.createElement("img");
            $(image).addClass("thumbImg");
            $(image).attr("id" + "img" + i);
            $(image).attr("src", array[i].imgUrl);
            $(image).attr("alt", "image " + i);
            spacer.appendChild(image);

            // Add it to the list:
            list.appendChild(item);
        }

        // Finally, return the constructed list:
        return list;
    }

    //Use function to add UL
    var container = document.getElementById("list");
    container.appendChild(makeUL(cars));

    //Searchbox functionality
    $("#searchbox").on("change paste keyup", function() {
        var input = $(this).val().toLowerCase();
        var ul, li, a, i;
        ul = document.getElementById("vehicles");
        li = ul.getElementsByTagName("li");

        //loop through and hide elements that don't match input
        for (i=0; i < li.length; i++) {
            a = li[i].getElementsByTagName("h4")[0];
            if (a.innerHTML.toLowerCase().indexOf(input) > -1) {
                li[i].style.display ="";
            } else {
                li[i].style.display ="none";
            }
        }
        
    });
});