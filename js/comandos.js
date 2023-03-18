import { ConectJson } from '../ControllerClass/ConectionsList.js'
import { description } from './description.js';

let conectJsonResult = new ConectJson('./database/comand-list.json');
let comandList = await conectJsonResult.conectJsonUrlJson();

//PEGA TEGS
let menuLink = document.querySelector('[data-menu]');
let listaComando = document.querySelector('[data-listaComando]');
let explicacao = document.querySelector('[data-explicacao]');
let titulo = document.querySelector('[data-titulo]');
let camandName = document.querySelector('[data-camandName]');
let exemplo = document.querySelector('[data-exemplo]');
let aside = document.querySelector('aside');

//PEGA ARRAY DE OBJETOS DO JSON
let pegaComando = await comandList.find(itens => itens).listaComandos;

let elementoRepetidos = pegaComando.map(itens => itens.marca); //RETORNO  ['Cisco', 'Cisco', 'Tellabs']
let itenNovo = [... new Set(elementoRepetidos)] // RETORNO  ['Cisco', 'Tellabs'] 
//FILTRA O OBJETO SEM DUPLICATAS
itenNovo.forEach(list => {
    let novaLista = pegaComando.find(itens => itens.marca === list);
    menuLink.innerHTML += `<a href="#${novaLista.marca}" class="menu"><img src="${novaLista.logo}" data-menu="${novaLista.marca}"></a>`;
})

//INICIA PAGINA
listaComando.innerHTML = `<option selected="selected" disabled selected style="display: none;" value="": ">Escolha uma Marca no Menu</option>`;
titulo.innerHTML = `Comando Básicos`;
exemplo.innerHTML = `<p>Página construida para um dicionário de comados em variada plataformas!</p>`;
camandName.innerHTML = ``;
aside.style.display = 'none';
listaComando.disabled = true;

let clickMenu = document.querySelector('[data-menu]');
    clickMenu.addEventListener('click', (event) => {
        let marca = event.target.attributes["data-menu"].value
        let buscaMarca = pegaComando.filter(nome => nome.marca === marca);
        titulo.innerHTML = `Comando Básicos ${marca}`;
        listaComando.disabled = false;
        //REINCIA OPTION
        listaComando.innerHTML = `<option selected="selected" disabled selected style="display: none;" value="": ">Escolha uma Marca no Menu</option>`;
        buscaMarca.forEach(comandos => {
          listaComando.innerHTML += `<option value="${comandos.comando}">${comandos.comando}</option>`;
        });    
    }) 

    listaComando.addEventListener('change', (event) => {
        let selecionaMarca = pegaComando.find((itens) => {
            return itens.comando === listaComando.value;
        })
        camandName.innerHTML = `${selecionaMarca.comando}`;
        exemplo.innerHTML = `${selecionaMarca.exemplo}`;

        description.find((itens) => {
            if(itens.id_list === selecionaMarca.id){
              return  explicacao.innerHTML = `${itens.tagp}`;    
            };
         });
        aside.style.display = 'block';
    })

//PISCA CURSOR
let contagen = 0;
function animeCursor(){
    let cursor = document.querySelector('[data-cursor]');
       contagen ++;
       if(cursor !== null){
            if((contagen) %2){
                cursor.style.color = 'rgb(0, 0, 0)'
            }else{
                cursor.style.color = '#33ff00'
            }
       }
}
let contadorTime = setInterval(() => {animeCursor();}, 1000);