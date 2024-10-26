FROM mcr.microsoft.com/playwright:v1.36.0-focal

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx playwright install chromium

COPY . .

RUN mkdir -p /app/reports

CMD ["npm", "test"]