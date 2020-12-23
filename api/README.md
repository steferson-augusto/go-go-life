API criada com Next.js Serverless Functions.

## Instalação e Uso

Instale as dependências e execute o servidor local:

```bash
$ yarn
$ yarn run dev
```

Dessa maneira, o servidor será iniciado em `http://localhost:3000`

## Endpoints

#### `/api/pages`

Fornece os dados necessários para gerar o menu dinâmicamente. Possui o seguinte retorno:

```json
[
  {
    "title": "Home",
    "icon": "home",
    "url": "page://home",
    "content": [
      {
        "type": "post",
        "title": "Home Screen",
        "properties": {
          "categories": ["services"]
        }
      }
    ]
  },
  {
    "title": "Camara",
    "icon": "account-balance",
    "url": "page://camara",
    "content": [
      {
        "type": "post",
        "title": "Mensagens do Presidente",
        "properties": {
          "categories": ["messages"]
        }
      },
      {
        "type": "post",
        "title": "Notícias",
        "properties": {
          "categories": [ "news"]
        }
      },
      {
        "type": "post",
        "title": "Horários e Serviços",
        "properties": {
          "categories": [
            "schedules",
            "services"
          ]
        }
      },
      {
        "type": "post",
        "title": "Taxas e Tarifários",
        "properties": {
          "categories": ["taxes"]
        }
      }
    ]
  },
  {
    "title": "Comunicar",
    "icon": "forum",
    "url": "page://comunicar",
    "content": []
  },
  {
    "title": "Proteção Civil",
    "icon": "warning",
    "url": "page://protecao-civil",
    "content": []
  },
  {
    "title": "Covid",
    "icon": "healing",
    "url": "page://covid",
    "content": []
  },
  {
    "title": "Agenda",
    "icon": "event",
    "url": "page://agenda",
    "content": []
  }
]
```

#### `/api/posts`

A query parameter `url` é usada para que haja respostas distintas para chamadas de telas diferentes.

Seu retorno é usado para alimentar a sua respectiva página no aplicativo, sendo algo assim:

```json
  {
    "title": "O Papel do novo centro da juventude para todos",
    "category": "messages",
    "content": "..."
  },
  {
    "title": "Mensagem de Natal 2020",
    "category": "messages",
    "content": "..."
  },
  {
    "title": "Obras na avenida 25 de Abril finalizadas antecipadamente",
    "category": "news",
    "content": "..."
  },
  {
    "title": "Piscinas municipais abrem portas aos cidadãos carenciados",
    "category": "news",
    "content": "..."
  },
  {
    "title": "Horários dos serviços municipais",
    "category": "schedules",
    "content": "..."
  },
  {
    "title": "Horários das instalações desportivas",
    "category": "schedules",
    "content": "..."
  },
  {
    "title": "Atendimento ao cliente no serviço de águas",
    "category": "schedules",
    "content": "..."
  },
  {
    "title": "Tarifas de licenciamento",
    "category": "taxes",
    "content": "..."
  },
  {
    "title": "Tarifários de água do conselho",
    "category": "taxes",
    "content": "..."
  },
  {
    "title": "Taxas de saneamento",
    "category": "taxes",
    "content": "..."
  }
]
```
