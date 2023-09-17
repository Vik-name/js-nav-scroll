// Для кнопки buttonScroll задаем на нажатие (onclick) функцию, которая через window.scrollTo вернет в начало экрана
window.buttonScroll.onclick = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })

// переменная isDisplay, отвечающая за то, отображается кнопка сейчас или нет
let isDisplay = false
// проверка через каждые 500 Мсек. нужно показать кнопку или спрятать - setInterval(() => {}, 500)

setInterval(() => {
  // Если страница прокручена (scrollY - кол-во px длинны прокрутки)больше чем на innerHeight (кол-во px - высота области) и кнопка не показывается
  if (
    window.scrollY > window.innerHeight &&
    isDisplay === false
  ) {
    // показать кнопку
    isDisplay = true
    window.buttonScroll.style.display = 'flex'

    // завершить выполнение кода (или return null или просто return)
    return
  }

  if (
    window.scrollY <= window.innerHeight &&
    isDisplay === true
  ) {
    isDisplay = false
    window.buttonScroll.style.display = 'none'

    return
  }
}, 500)
