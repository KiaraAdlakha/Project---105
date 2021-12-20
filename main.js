Webcam.set({
    width: 360,
    height: 300,
    img_format: 'png',
    png_format: 90
});
camera= document.getElementById("camera");
Webcam.attach(camera);
function take_snapShot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML= "<img id='img' src='"+data_uri+"'>";
    })
}
console.log("ML5 Version:", ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1hTPrwxz0/model.json", modelLoaded);
function modelLoaded()
{
    console.log("Model Loaded is Working");
}
function check()
{
    img=document.getElementById("img");
    classifier.classify(img,got_result);
}
function got_result(error,results)
{
if (error)
{
    console.error(error);
}
if (results)
{
    console.log(results);
    document.getElementById("result").innerHTML=results[0].label;
}
}