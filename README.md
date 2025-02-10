# Microserviço de Cálculo de Ganhos

## Configuração
1. Clone o repositório
2. Instale as dependências: `npm install`
3. Inicie o servidor: `node server.js`

## Endpoints
- `POST /calcular`: Calcula o ganho líquido
  - Corpo da requisição:
    ```json 50,
      "dependentes": 2,
      "deducoes": 30
    }
    ```
  - Resposta:
    ```json
    {
      "ganhoLiquido": 820
    }
    ```
