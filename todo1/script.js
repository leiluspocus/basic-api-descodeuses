fetch('https://aws.random.cat/meow')
.then(function(body) { // body est la réponse de la requête effectuée
  return body.json(); // Evalue la réponse de l'objet 
})
.then(function(json) {
  var image = document.createElement('img');
  image.src = json.file;
  var container = document.getElementById('container');
  container.appendChild(image);
});

fetch('https://aws.random.cat/meow')
.then(function(body) { // body est la réponse de la requête effectuée
  return body.json(); // Evalue la réponse de l'objet 
})
.then(function(json) { 
  var image = document.getElementById('test');
  image.src = json.file;
});