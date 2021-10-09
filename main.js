function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true,
video:false
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/m9C2qZNmg/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
console.log(results);
random_num_r=Math.floor(Math.random()* 255)+1;
random_num_g=Math.floor(Math.random()* 255)+1;
random_num_b=Math.floor(Math.random()* 255)+1;

document.getElementById("result_label").innerHTML='I can Hear-'+results[0].label;
document.getElementById("result_confidence").innerHTML='accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+randon_num_r+","+random_num_g+","+random_num_b+")";
document.getElementById("result_confidence").style.color="rgb("+randon_num_r+","+random_num_g+","+random_num_b+")";

img= document.getElementById('animal_image');

if(reseluts[0].label=="Peackock sounds"){
    img.src='download.jpg';
    peacock=peacock+1;
}
else if(results[0].label =="Fox sounds"){
    img.src='download (1).jpg'
    fox=fox+1;
}
else{
    img.src='hearing-aids.gif';
}
    }
}