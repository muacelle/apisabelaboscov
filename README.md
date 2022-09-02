# Isabela Boscov API
Saiba a opinião da Isabela Boscov sobre filmes, séries, atores(as) e diretores(as). Gere citações aleatórias ou específicas.

---
## Exemplo
    subject:"Angelina Jolie",
    quote:"Ela o tempo todo tá assim pra câmera: olha como eu sou linda, olha como eu sou linda!",
    id:20
---
## Utilização
Gerar citação aleatória
```bash
curl https://isaboscov-api.herokuapp.com/quotes/random
```

Acessar todas as citações sobre determinado assunto
```bash
curl https://isaboscov-api.herokuapp.com/quotes/Angelina Jolie
```

Gerar citação com base numa ID
```bash
curl https://isaboscov-api.herokuapp.com/quotes/id/21
```

---
## Contribua