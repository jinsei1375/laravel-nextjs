@echo off
docker-compose build
docker compose run --rm api composer create-project laravel/laravel .
docker compose run --rm client npx create-next-app .
docker compose up -d
docker compose exec api php artisan key:generate
docker compose exec api php artisan storage:link
docker compose exec api chmod -R 777 storage bootstrap/cache
docker compose exec api php artisan migrate