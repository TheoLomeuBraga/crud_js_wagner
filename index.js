function print(text){console.log(text)}

animal = require('./animal_ob.js');

test_object = {
    number: 1,
    text: "bbbbb",

}




base_adress = "/crud_wagner"

const { json } = require('express');
const express = require('express');
const server = express();
server.get(base_adress+'/test',  (req, res) =>  {
    print("req")
    print(req)
    print("res")
    print(res)
    return res.json(test_object);
})

    //http://localhost:3000/crud_wagner/espelho?a=2&b=3
server.get(base_adress+'/espelho',  (req, res) =>  {
        print(req.query)
        return res.json(req.query)
})

server.get(base_adress+'/get_animal_structure',  (req, res) =>  {
    return res.json(animal.new_animal())
})

server.get(base_adress+'/creat_animal_structure',  (req, res) =>  {
    query = req.query
    animal_objeto = animal.new_animal()

    if(query.hasOwnProperty("classe")){
        animal_objeto.classe = query.classe
    }else{
        print("classe não fornecida")
    }

    if(query.hasOwnProperty("ordem")){
        animal_objeto.ordem = query.ordem
    }else{
        print("ordem não fornecida")
    }

    if(query.hasOwnProperty("familia")){
        animal_objeto.familia = query.familia
    }else{
        print("familia não fornecida")
    }

    if(query.hasOwnProperty("subfamilia")){
        animal_objeto.subfamilia = query.subfamilia
    }else{
        print("subfamilia não fornecida")
    }

    if(query.hasOwnProperty("especie")){
        animal_objeto.especie = query.especie
    }else{
        print("especie não fornecida")
    }

    if(query.hasOwnProperty("nome_cientifico")){
        animal_objeto.nome_cientifico = query.nome_cientifico
    }else{
        print("nome_cientifico não fornecido")
    }

    return res.json(animal_objeto)
    
})


server.listen(3000);