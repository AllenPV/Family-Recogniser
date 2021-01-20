Webcam.attach('#Camera');
Camera = document.getElementById("Camera");
Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});
function Capture_Image() {
    Webcam.snap(function (data_uri) {
        document.getElementById("Image").innerHTML = '<img id = "Captured_Img"src = "' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zr88DaLqU/model.json' , modelLoaded);