# JavaScript Básico para Node.js

**Disciplina:** Desenvolvimento Web Avançado\
**Contexto:** Programação Back-end com Node.js\
**Data:** 10/03/2026

------------------------------------------------------------------------

# 1. O que é JavaScript no contexto do Node.js

JavaScript é uma linguagem de programação originalmente criada para execução em navegadores.\
Com o **Node.js**, o JavaScript também pode ser executado **no servidor**, permitindo o desenvolvimento de aplicações back-end.

Em Node.js, scripts JavaScript são executados diretamente pelo interpretador:

``` bash
node arquivo.js
```

Exemplo simples:

``` javascript
console.log("Hello Node.js");
```

------------------------------------------------------------------------

# 2. Declaração de Variáveis

JavaScript possui três formas principais de declarar variáveis:

| Palavra-chave | Escopo | Observação                       |
|---------------|--------|----------------------------------|
| `var`         | função | legado, evitar em código moderno |
| `let`         | bloco  | variável mutável                 |
| `const`       | bloco  | valor constante                  |

Exemplo:

``` javascript
let nome = "Ana";
const idade = 20;

console.log(nome);
console.log(idade);
```

Boa prática:

-   usar **const por padrão**
-   usar **let quando o valor precisa mudar**

------------------------------------------------------------------------

# 3. Tipos de Dados

JavaScript é **dinamicamente tipada**, ou seja, o tipo é definido em tempo de execução.

Tipos primitivos principais:

| Tipo      | Exemplo                      |
|-----------|------------------------------|
| string    | `"Olá"`                      |
| number    | `10`, `3.14`                 |
| boolean   | `true`, `false`              |
| null      | ausência de valor            |
| undefined | variável declarada sem valor |

Exemplo:

``` javascript
let nome = "Carlos";
let idade = 30;
let ativo = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ativo);
```

------------------------------------------------------------------------

# 4. Operadores Matemáticos

| Operador | Descrição        |
|----------|------------------|
| `+`      | soma             |
| `-`      | subtração        |
| `*`      | multiplicação    |
| `/`      | divisão          |
| `%`      | resto da divisão |
| `**`     | potência         |

Exemplo:

``` javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a % b);
console.log(a ** 2);
```

------------------------------------------------------------------------

# 5. Operadores Relacionais

| Operador | Significado                     |
|----------|---------------------------------|
| `>`      | maior                           |
| `<`      | menor                           |
| `>=`     | maior ou igual                  |
| `<=`     | menor ou igual                  |
| `==`     | igualdade (com coerção de tipo) |
| `===`    | igualdade estrita               |

Exemplo:

``` javascript
let x = 10;
let y = "10";

console.log(x == y);
console.log(x === y);
```

Boa prática: usar **sempre `===`**.

------------------------------------------------------------------------

# 6. Operadores Lógicos

| Operador          | Significado |     |     |
|-------------------|-------------|-----|-----|
| `&&`              | AND         |     |     |
| `|             |` | OR          |     |     |
| `!`               | NOT         |     |     |

Exemplo:

``` javascript
let idade = 20;
let possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
    console.log("Pode dirigir");
}
```

------------------------------------------------------------------------

# 7. Estruturas Condicionais

## if / else

``` javascript
let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

------------------------------------------------------------------------

## switch

``` javascript
let dia = 2;

switch(dia){
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    default:
        console.log("Outro dia");
}
```

------------------------------------------------------------------------

# 8. Estruturas de Repetição

## for

``` javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

------------------------------------------------------------------------

## while

``` javascript
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

------------------------------------------------------------------------

## for...of (muito comum em JavaScript)

``` javascript
let numeros = [1,2,3,4];

for (let n of numeros) {
    console.log(n);
}
```

------------------------------------------------------------------------

# 9. Funções

Funções podem ser declaradas de várias formas.

## Função tradicional

``` javascript
function soma(a, b){
    return a + b;
}

console.log(soma(5,3));
```

------------------------------------------------------------------------

## Arrow Function

Muito utilizada em aplicações Node.js modernas.

``` javascript
const soma = (a, b) => {
    return a + b;
};
```

Versão reduzida:

``` javascript
const soma = (a,b) => a + b;
```

[Leia mais sobre arrow functions](aula2_arrow_function.md)

------------------------------------------------------------------------

# 10. Arrays

Arrays armazenam coleções de valores.

``` javascript
let numeros = [10, 20, 30];

console.log(numeros[0]);
```

Iteração:

``` javascript
for (let n of numeros) {
    console.log(n);
}
```

------------------------------------------------------------------------

# 11. Objetos

Objetos são estruturas chave-valor.

``` javascript
let usuario = {
    nome: "Ana",
    idade: 25,
    ativo: true
};

console.log(usuario.nome);
```

Iteração:

``` javascript
for (let chave in usuario){
    console.log(chave, usuario[chave]);
}
```

------------------------------------------------------------------------

# 12. Template Strings

Permitem interpolação de variáveis.

``` javascript
let nome = "João";
let idade = 30;

console.log(`Nome: ${nome}, Idade: ${idade}`);
```

------------------------------------------------------------------------

# 13. Módulos no Node.js

Node.js utiliza **módulos** para organizar código.

## Exportando

``` javascript
function soma(a,b){
    return a+b;
}

module.exports = soma;
```

------------------------------------------------------------------------

## Importando

``` javascript
const soma = require('./soma');

console.log(soma(2,3));
```

------------------------------------------------------------------------

# 14. Boas práticas iniciais

-   utilizar **const sempre que possível**
-   preferir **=== em vez de ==**
-   usar **arrow functions**
-   manter funções pequenas
-   organizar código em **módulos**

------------------------------------------------------------------------

# 15. Executando programas Node.js

Estrutura típica:

```         
projeto/
 ├── index.js
 ├── utils.js
 └── package.json
```

Executar:

``` bash
node index.js
```

------------------------------------------------------------------------

# 16. Próximos conceitos importantes em Node.js

Após dominar a sintaxe básica, os próximos tópicos normalmente incluem:

-   JSON
-   manipulação de arquivos
-   módulos NPM
-   criação de servidores HTTP
-   Express
-   APIs REST
-   acesso a banco de dados

------------------------------------------------------------------------

```         
```
