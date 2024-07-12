# API REST

## Pasos para levantar app localmente

1. Clonar el repositorio
2. Instalar dependencias
3. Levantar la base de datos
```
docker-compose up -d
```
4. Renombrar el .env.template a .env
5. Remplaza las varibles de entorno
6. Ejecutar el seed para [crear datos en la base de datos](localhost:3000/api/seed) 

## Nota: usuario por defecto
usuario:  test1@gmail.com
password: 123456

## Prisma commnads
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```