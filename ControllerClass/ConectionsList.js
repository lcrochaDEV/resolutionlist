//CONEXÃO COM O ARQUIVO JSON
export class ConectJson {
    constructor(url){
        this.url = url;
    }
	async conectJsonUrlJson(){
        try{
            const conexao = await fetch(this.url)
            const openConexao = await conexao.json();
            return openConexao;
        }catch(error){
            console.log('Falha no link!')
        }
    }
};
