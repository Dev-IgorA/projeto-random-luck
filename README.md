# 🎲 Project Random - Sorteador Automático de Números

Este é um projeto prático desenvolvido para facilitar o sorteio de números aleatórios dentro de um intervalo definido pelo usuário. É uma ferramenta útil para sorteios rápidos, jogos ou tomadas de decisão.

---

## 🎯 Objetivo do Projeto

O objetivo principal foi criar uma interface simples e intuitiva onde o usuário pudesse:
1. Definir um valor **mínimo**.
2. Definir um valor **máximo**.
3. Obter um resultado instantâneo e aleatório com apenas um clique.

---

## 🛠 Tecnologias Utilizadas

* **HTML5**: Estruturação semântica do formulário e elementos de exibição.
* **CSS3**: Estilização visual, utilizando a fonte *Roboto* para uma tipografia moderna e layout responsivo.
* **JavaScript (ES6+)**: A inteligência do projeto, responsável pela manipulação do DOM e lógica matemática.

---

## 💡 Conceitos Aplicados

Durante o desenvolvimento, foram aplicados conceitos fundamentais de Front-end:

### 1. Manipulação do DOM
Uso de seletores no JavaScript para capturar os valores inseridos nos inputs (`input-min` e `input-max`) e atualizar dinamicamente o texto no HTML (`result-value`) sem a necessidade de recarregar a página.

### 2. Lógica Matemática
Aplicação do objeto `Math` do JavaScript, utilizando a fórmula:
$$\text{resultado} = \text{Math.floor}(\text{Math.random}() \times (\text{max} - \text{min} + 1)) + \text{min}$$
Isso garante que o número sorteado esteja sempre dentro do intervalo inclusivo escolhido pelo usuário.

### 3. Event Listeners
Implementação de ouvintes de eventos no botão de sorteio (`click`), tornando a interface interativa.

---

## 🚀 Como visualizar o projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
