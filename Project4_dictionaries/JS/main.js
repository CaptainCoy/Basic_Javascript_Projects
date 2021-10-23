function my_Dictionary() {
    var Animal={ //here is my dictionary, about the same as the course had only modified to match one of my dogs
        species:"Dog",
        Color:"Black/Tan",
        Breed:"Poodle",
        Age:1,
        Sound:"Woof!"        
    };
    delete Animal.Sound; //here is me using the delete function
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}