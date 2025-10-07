# Usa a imagem oficial do Node.js
FROM node:20-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta padrão do Angular (4200)
EXPOSE 4200

# Comando para iniciar o servidor de desenvolvimento do Angular.
# O host '0.0.0.0' é crucial para que o servidor seja acessível 
# fora do container (pelo seu host/máquina local).
CMD [ "npm", "start" ]
# Certifique-se de que seu package.json tenha um script 'start' que chame 'ng serve --host 0.0.0.0'