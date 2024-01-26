# UUID GENERATOR v4 [![CI](https://github.com/uuidjs/uuid/workflows/CI/badge.svg)](https://github.com/uuidjs/uuid/actions?query=workflow%3ACI)

Gerador de UUID v4 VARCHAR(36) em Javacript. Veja o resultado em:
[`UUID Generator site`](https://uuidgenerator.com.br)

## .github

Em caso de clone ignorar a pasta .github pois é apenas para deploy no servidor.

## Quickstart - Instalar biblioteca

Criando uma UUID aleatória com [`UUID de UUID JS`](https://github.com/uuidjs/uuid)

**1. Instalar**

```shell
npm install uuid
```

**2. Criar a UUID** (ES6 module syntax)

```javascript
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

... ou:

```javascript
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```