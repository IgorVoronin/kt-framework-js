# Интернет-магазин

Проект доступен по ссылке: [https://igorvoronin.github.io/kt-framework-js/](https://igorvoronin.github.io/kt-framework-js/)

## Описание

Интернет-магазин, разработанный с использованием React и соответствующий дизайну из [макета Figma](https://www.figma.com/file/0pMguGfGcTgufmXlNJe5gO/IE-FE). 

Проект представляет собой онлайн-платформу для продажи товаров с возможностью:
- Просмотра всех товаров и категорий
- Фильтрации товаров по цене и скидкам
- Детального просмотра информации о товаре
- Добавления товаров в корзину
- Оформления заказа


## Запуск проекта локально

### Требования
- Node.js >= 18.x
- npm

### Установка
1. Клонировать репозиторий:
```bash
git clone https://github.com/IgorVoronin/kt-framework-js.git
cd kt-framework-js
```

2. Установить зависимости:
```bash
npm install
```

3. Запустить проект:
```bash
npm run dev
```

4. Открыть в браузере [http://localhost:5175/kt-framework-js/](http://localhost:5175/kt-framework-js/)


## Бэкенд

Проект использует API, размещенное по адресу:
```
https://framework-backend-ea0y.onrender.com
```

Доступные эндпоинты:
- `/categories/all` - все категории
- `/categories/:id` - товары конкретной категории
- `/products/all` - все товары
- `/products/:id` - детальная информация о товаре
- `/sale/send` - отправка заказа