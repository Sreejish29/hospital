function bmi()
{
    var w = document.querySelectorAll("input")[0].value;
    var h = document.querySelectorAll("input")[1].value;

    var height = h / 100;

    var result = Math.ceil(w/(height*height));


    if(w === "" && h === "")
    {
        alert("Kindly enter your weight and height!");
    }
    else if(result < 18)
    {
        document.querySelectorAll("h3")[0].innerHTML = "Your BMI is: "+result;
        document.querySelectorAll("p")[1].innerHTML = "You are Underweight!";
    }
    else if(result >= 18 && result <= 25)
    {
        document.querySelectorAll("h3")[0].innerHTML = "Your BMI is: "+result;
        document.querySelectorAll("p")[1].innerHTML = "You are Fit!";
    }
    else if(result >= 18)
    {
        document.querySelectorAll("h3")[0].innerHTML = "Your BMI is: "+result;
        document.querySelectorAll("p")[1].innerHTML = "You are Overweight!";
    }
}