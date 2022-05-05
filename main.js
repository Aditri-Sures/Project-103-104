Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});

Webcam.attach("#Camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XqBCspYEh/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model is loaded");
}