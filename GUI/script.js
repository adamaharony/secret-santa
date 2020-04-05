/*      Made by Adam A.     */


function text2arr() {
    // Getting everything into a nice array:
    let raw_input = document.getElementById("names").value;
    let names = raw_input.split("\n");


    // Humans can be sloppy, we need to remove trailing spaces:
    for (let i = 0; i < names.length; i++)
        names[i] = names[i].trim();


    // Finally, we need to return everything
    return names;
}



function ordered_pair(names) {
    let obj = [];


    let arr1 = names.slice(), // copy array
        arr2 = names.slice(); // copy array again

    arr1.sort(function() { return 0.5 - Math.random();}); // shuffle both arrays
    arr2.sort(function() { return 0.5 - Math.random();});

    while (arr1.length) {
        let name1 = arr1.pop(), // get the last value of arr1
            name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
        //        ^^ if the first value is the same as name1,
        //           get the last value, otherwise get the first

        obj.push([name1, name2]);
    }

    // Finally, we need to return the ordered pair:
    return obj;
}


function add_entry(coup) {
    let list = document.getElementById("list");
    let place = document.createElement("a");
    place.setAttribute("class", "list-item");
    let text = document.createTextNode(`${coup[0]} => ${coup[1]}`);
    place.appendChild(text);
    document.getElementById("list").appendChild(place);
}


function wombocombo() {
    /*
        Finally, the main function that actually does something useful
     */
    let names = text2arr();
    if (names.length % 2)
        return alert("THE NUMBER OF NAMES SHOULD BE EVEN!");    //WE MUST HAVE AN EVEN NUMBER OF NAMES!!!
    let res = ordered_pair(names);
    // Making the results panel visible:
    document.getElementById("results").style.display = "block";
    // Iterating on the results object and displaying it:
    for (coup of res) {
        add_entry(coup);
    }

}
