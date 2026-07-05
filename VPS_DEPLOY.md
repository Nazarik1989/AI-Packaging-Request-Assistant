# Деплой на VPS Timeweb

Это вариант без Vercel/Netlify. Проект запускается на вашем сервере как Docker-контейнер.

## Что нужно

- VPS на Ubuntu.
- IP-адрес сервера.
- Доступ по SSH, обычно `root`.
- Открытый порт `3000` или настроенный домен через Nginx.

## Быстрый запуск по IP

Подключитесь к серверу:

```bash
ssh root@SERVER_IP
```

Установите Docker:

```bash
apt update
apt install -y git docker.io docker-compose-plugin
systemctl enable --now docker
```

Скачайте проект:

```bash
git clone https://github.com/Nazarik1989/AI--.git ai-packaging-demo
cd ai-packaging-demo
```

Создайте файл с кодом доступа:

```bash
cp .env.example .env
nano .env
```

Внутри можно оставить или поменять код:

```text
DEMO_ACCESS_CODE=pilot-2026
```

Запустите:

```bash
docker compose up -d --build
```

Проверьте:

```bash
docker compose ps
```

Откройте в браузере:

```text
http://SERVER_IP:3000
```

Код доступа будет тот, который указан в `.env`.

## Обновление после изменений

```bash
cd ai-packaging-demo
git pull
docker compose up -d --build
```

## Остановка

```bash
cd ai-packaging-demo
docker compose down
```

## Если есть домен

Можно направить домен на IP сервера и поставить Nginx как прокси на порт `3000`.

Пример конфига:

```nginx
server {
    server_name demo.example.ru;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

После этого можно подключить HTTPS через `certbot`.
