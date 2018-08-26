var jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(jsonPracownicy);

console.log("Pracownicy:\n");
jsonPracownicy.pracownicy.forEach(function(item, index) {
    console.log(index +". "+ item.firstName + " " + item.lastName);
})