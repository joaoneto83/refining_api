const express = require("express");
const cors = require('cors');
const axios = require("axios");

const app = express();


function usurioGitHub(){
  return     axios.get("https://api.github.com/search/repositories?q=user:neto")
}

const dados = usurioGitHub();

dados.then(
    function(resposta){
        console.log(resposta.data)
    }).catch(function(error){
        if(error){
            console.log(error);
        }
});

app.get('/', async(req, res ) => {
   
        return res.json(this.dados.data);  
   
});



function starGit(dados){
    const star = dados.data.items.map(
        function(item){ 
            return {
                repository: item.name,
                star: item.stargazers_count
            }
        }
    );
}


module.exports = app
    
