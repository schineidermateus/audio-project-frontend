# 💻 Documentação do Frontend - AudioTools

O **frontend** do AudioTools é uma aplicação **Single Page Application (SPA)** desenvolvida com **Angular (Standalone Components)**, focada em fornecer uma **interface de usuário intuitiva e rápida** para as funcionalidades de processamento de áudio do backend.

---

## 🚀 Tecnologias Chave

| Categoria | Tecnologia |
|------------|-------------|
| **Framework** | Angular (Standalone Components) |
| **Estilização** | Tailwind CSS (Classes de utilidade) + SCSS (Variáveis Globais) |
| **Comunicação** | HttpClient (requisições `multipart/form-data` e `blob` com o NestJS) |
| **Download de Arquivos** | file-saver |

---

## 🏗️ Arquitetura e Componentes

A aplicação segue uma estrutura **modular e de componentes autônomos**, organizada da seguinte forma:

| Componente | Tipo | Responsabilidade |
|-------------|------|------------------|
| **AppComponent** | Layout Principal | Gerencia o roteamento e a estrutura (Header, RouterOutlet, Footer). |
| **HeaderComponent** | Navegação | Menu principal com links para as três funcionalidades. |
| **FooterComponent** | Rodapé | Links sociais e informações de copyright. |
| **HomeComponent** | Landing Page | Página de boas-vindas com cartões de chamada à ação. |
| **JoinAudioComponent** | Funcionalidade | Upload de N arquivos, lógica de seleção e remoção, e chamada à API `/api/join`. |
| **CutAudioComponent** | Funcionalidade | Upload de 1 arquivo e inputs de tempo (`startTime`, `duration`), chamada à API `/api/cut`. |
| **MixAudioComponent** | Funcionalidade | Upload de 2 arquivos, lógica de seleção e chamada à API `/api/mix`. |
| **NotFoundComponent** | Roteamento | Exibido em rotas não encontradas (404). |

---

## 🎨 Design e Estilo

- **Consistência:** O design é uniforme em toda a aplicação, utilizando um sistema de variáveis SCSS (`_variables.scss`) que define **cores, fontes e espaçamentos**.
- **Layout:** O layout principal utiliza o padrão **Sticky Footer** com **Flexbox** (`app.scss`), garantindo que o rodapé permaneça fixo na base da viewport.
- **Tailwind CSS:** Toda a estilização específica de componentes é feita com **classes utilitárias do Tailwind**, promovendo desenvolvimento rápido e responsivo.

---

## 🌐 Roteamento

O roteamento é centralizado no arquivo `app.routes.ts`, definindo o mapeamento das rotas principais:

| Rota | Componente | Descrição |
|------|-------------|-----------|
| `/` | HomeComponent | Página inicial. |
| `/join` | JoinAudioComponent | Funcionalidade de junção de áudios. |
| `/cut` | CutAudioComponent | Funcionalidade de corte de áudio. |
| `/mix` | MixAudioComponent | Funcionalidade de mixagem de áudios. |
| `**` | NotFoundComponent | Página exibida para rotas inexistentes (404). |

---

## 🐳 Execução via Docker

O frontend é totalmente **containerizado**.  
O **Dockerfile** instala o **Angular** e as suas dependências automaticamente.

```bash
docker audio-project-frontend -t audio-project-frontend .
docker run -p 4200:4200 audio-project-frontend
````

Caso queira executar o projeto utilizando o servidor nativo do Angular, use:
```bash
ng serve
```

---

📄 **Licença:** Livre para uso educacional e de pesquisa.
