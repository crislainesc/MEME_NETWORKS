# MEME NETWORKS

Gerador de imagens de memes criado como um projeto da disciplina de redes de computadores onde o objetivo é criar um protocolo de comunicação.

* #### Para clonar o projeto primeiro rodar o comando no terminal
```
git clone https://github.com/crislainesc/MEME_NETWORKS.git
```

* #### Em seguida, no diretório raiz do projeto para instalar as dependências
```
yarn client_install && yarn server_install
```

* #### Para iniciar o client, basta rodar o comando
```
yarn client_start
```

* #### Para iniciar o server, basta rodar o comando
```
yarn server_start
```

### Descrição do Protrocolo

O protocolo segue a arquitetura cliente servidor e foram definidas regras para a comunicação entre os componentes da aplicação. 


* #### Operações, comandos e operações permitidas
  
  |Id da requisição|Operação|Comando|Resposta|
  |:---:|:---:|:---:|:---:|
  |1|searchWithKey|key: string|Json com dados da imagem especificada na chave|
  |2|search|key: null|Json com dados de todas as imagens no banco de dados|
  |3|create|key, body|Resposta com os dados da imagem criada e salva no banco de dados|
  |4|viewWithKey|key: string|Json com dados da imagens criadas especificada na chave|
  |5|view|key: null|Json com dados de todas as imagens criadas no banco de dados|
  
* #### Parâmetros de envio
  * **requestId**: `number`
  * **opetation**: `string`
  * **key**: `string | null`
  * **body**: `object`
  
* #### Códigos de erros definidos
   * **not found** - Imagem não encontrada
   * **not saved** - Houve um erro no processo de salvar a imagem.
   * **invalid request** - Os parâmetros da requisição não são válidos
   * **missing parameters** - Algum parâmetro obrigatório para a requisição solicitada não foi enviado.

* #### As requisições e operações podem ser enviadas por um cliente que esteja conectado e solicite a comunicação com o lado servidor via socket sempre que o servidor estiver iniciado.

* #### Exemplo do formato das mensagens trafegadas

  |Requisição|Resposta|
  |:--:|:--:|
  |{“requestId”: 1, “operation”: “search”, “key”: “chapolin”}|{“requestId”: 1, “status”: “ok”, “response”: {...}}|
 
 #
