fetch('https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants/104914?token=Q2JOVVBLeUg4V3Z5OWdJbDVCWEdWdz09')
.then(function(body) { // body est la réponse de la requête effectuée
  return body.json(); // Evalue la réponse de l'objet 
})
.then(function(json) { 
    console.log(json);
    var titre = document.getElementById('plantname');
    var scientificname = document.getElementById('scientificname');
    var planturl = document.getElementById('planturl');

    titre.innerHTML = json.common_name;
    scientificname.innerHTML = json.scientific_name;
    planturl.src = json.images[1].url;
});