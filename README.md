# 🧪 Cypress E2E Automation - Test Automation Portfolio

## 📌 Sobre o Projeto 🚧 (Em Construção)
Este repositório contém testes automatizados E2E (End-to-End) usando **Cypress**, seguindo boas práticas de automação de testes e CI/CD.

O objetivo é praticar testes automatizados, integração contínua e práticas de estruturação de código.

## 🚀 Tecnologias Utilizadas
- **Cypress** - Framework de testes E2E
- **Mocha** - Estrutura de testes utilizada pelo Cypress
- **Mocha-JUnit-Reporter** - Geração de relatórios de testes
- **GitHub Actions** - Pipeline de CI/CD para execução automática dos testes

## 📁 Estrutura do Projeto
```
📂 cypress
 ┣ 📂 e2e                # Testes E2E
 ┃ ┣ 📂 login           # Testes relacionados ao login
 ┃ ┗ 📂 checkout        # (Exemplo futuro: testes de checkout)
 ┣ 📂 fixtures          # Dados de teste (ex.: usuários e senhas)
 ┣ 📂 support
 ┃ ┣ 📂 pageObjects     # Page Object Model (POM) para organização dos testes
 ┃ ┗ 📂 commands.js     # Comandos customizados do Cypress
📂 .github/workflows    # Configuração do CI/CD no GitHub Actions
📂 results              # Relatórios de testes
📜 cypress.config.js    # Configuração global do Cypress
📜 package.json         # Dependências do projeto
```

## ✅ Cenários de Teste Implementados
- **Login com credenciais válidas** (`login-success.cy.js`)
- **(Em desenvolvimento) Login com credenciais inválidas**
- **(Em desenvolvimento) Login com usuário bloqueado**

## 🎯 Como Executar os Testes Localmente

### 📌 **Pré-requisitos**
- Node.js instalado (versão 18 ou superior)
- Dependências instaladas via `npm install`

### 🔹 **Abrir a interface do Cypress** (Modo interativo)
```bash
npm run cypress:open
```

### 🔹 **Rodar os testes em modo headless**
```bash
npm run cypress:run
```

## 📊 Relatórios de Teste

### **1️⃣ JUnit Report (Gerado no CI/CD)**
- Os relatórios `.xml` são gerados e armazenados como artefatos no GitHub Actions.
- Para acessá-los:
  1. Vá até a aba `Actions` no GitHub.
  2. Selecione a última execução do pipeline.
  3. Baixe o artefato `cypress-test-results.zip`.

### **2️⃣ Mochawesome Report (Opcional para melhor visualização)**
Se quiser gerar relatórios em HTML, instale o `mochawesome` e configure o `cypress.config.js`:
```bash
npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
```
Execute os testes e abra o relatório em `results/mochawesome/report.html`.
```bash
npx cypress run --reporter mochawesome
```

## 🔄 CI/CD - Pipeline no GitHub Actions
O repositório possui um pipeline configurado no **GitHub Actions** que:
- Roda os testes automaticamente em **pull requests** e **pushes** para branches específicas.
- Utiliza **cache de dependências** para otimizar o tempo de execução.
- Salva os **relatórios de teste** como artefatos.

## 📌 Como Contribuir
1. **Crie uma branch**
```bash
git checkout -b feat/nova-feature
```
2. **Faça suas alterações e commit**
```bash
git add .
git commit -m "feat: adiciona novo cenário de teste"
```
3. **Suba para o repositório remoto**
```bash
git push origin feat/nova-feature
```
4. **Abra um Pull Request no GitHub**

## 📄 Licença
🔥 Este projeto é open-source e pode ser utilizado livremente para aprendizado e portfólio. 🚀

---


