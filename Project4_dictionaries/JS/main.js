function my_Dictionary() {
    var Animal={
        species:"Dog",
        Color:"Black/Tan",
        Breed:"Poodle",
        Age:1,
        Sound:"Woof!"        
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}