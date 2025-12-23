// Створюємо аудіо-об'єкт
const engineSound = new Audio("sounds/yamaha.mp3");

// Отримуємо кнопку
const soundBtn = document.getElementById("engineSoundBtn");

// Обробник натискання
soundBtn.addEventListener("click", () => {

    // Вібрація кнопки
    soundBtn.classList.add("shake");

    // Видалення ефекту через 400 мс
    setTimeout(() => {
        soundBtn.classList.remove("shake");
    }, 400);

    // Звук двигуна
    engineSound.currentTime = 0;
    engineSound.play();
});
