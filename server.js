const express = require('express');
const app = express();
const port = 3000;

// Використовуємо папку "public" для обслуговування статичних файлів
app.use(express.static('public'));

// Створюємо API маршрут
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
