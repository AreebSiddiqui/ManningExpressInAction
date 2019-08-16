const mustache = require ("mustache");
let result  = mustache.render("Hi,{{first_name}} {{second_name}}!",{
    first_name:"Areeb",
    second_name:"Siddiqui"
    });
    console.log(result);
    