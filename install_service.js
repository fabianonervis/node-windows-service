var Service = require('node-windows').Service;
// Criando um novo objeto do Serviço
var svc = new Service({
//Nome do servico
name:'TesteApi',
//Descricao que vai aparecer no Gerenciamento de serviço do Windows
description: 'Serviço de teste de Api',
//caminho absoluto do seu script
script: 'C:\\ProjetosAlt\\node-windows-service\\index.js'
});
svc.on('install',function(){
svc.start();
});
// instalando o servico
svc.install();