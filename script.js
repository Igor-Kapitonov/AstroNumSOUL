document.getElementById('calcForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Отмена перезагрузки страницы
    
    const birthdate = document.getElementById('birthdate').value;
    if (birthdate) {
        const matrixResult = calculateMatrix(birthdate); // Функция расчета матрицы
        document.getElementById('result').innerText = `Результат: ${matrixResult}`;
    } else {
        document.getElementById('result').innerText = "Пожалуйста, введите дату рождения.";
    }
});

function calculateMatrix(birthdate) {
    // Пример простого расчета на основе даты рождения
    const numbers = birthdate.replace(/-/g, '').split('').map(Number);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    
    // Допустим, что результат - это просто сумма всех чисел
    return sum;
}
