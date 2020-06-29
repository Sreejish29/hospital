function bmr() 
{
    var result;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    if (age === "" && weight === "" && height === "") 
    {
        alert("Please enter the weight, height and age!");
    } 
    else if (gender == "men") 
    {
        result = 66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
        document.getElementById("bmr").innerHTML = "Your BMR is "+result;
    } 
    else
    {
        result = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
        document.getElementById("bmr").innerHTML = "Your BMR is "+result;
    }

    
}