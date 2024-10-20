


//get the document elements
//get the image on button press
// add the image to the view on button press


//get the image
const fileInput = document.getElementById('fileInput');

const uploadButton = document.getElementById('uploadButton');



function upload(event){
    event.preventDefault();

    const file = fileInput.files[0];

    if(file){
        const reader = new FileReader();

        //read the file as a data URL
        reader.onload = function(e){//Not really understanding this part
            const resultDiv = document.getElementById('result');
            const img = document.createElement('img');
            img.src = e.target.result;
            
            resultDiv.innerHTML = '';
            resultDiv.appendChild(img);

        };

        reader.readAsDataURL(file);
    }



}

//add event listener for button
uploadButton.addEventListener('click', upload);




