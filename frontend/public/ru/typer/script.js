let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
  stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
  typeSpeed: 200, // Скорость печати
  startDelay: 3000, // Задержка перед стартом анимации
  backSpeed: 100, // Скорость удаления
  loop: true, // Указываем, повторять ли анимацию
  showCursor: false
});