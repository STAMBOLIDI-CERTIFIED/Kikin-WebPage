const options = {
  root: document.querySelector('#main-section1'), // Родительский контейнер
  rootMargin: '0px', // Отступы вокруг root
  threshold: 1, // Порог пересечения (50%)
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      targetElement1.classList.add('show')
      targetElement2.classList.add('show')
      targetElement3.classList.add('show')
      targetElement4.classList.add('show')
      targetElement5.classList.add('show')
    }
  });
};

// Создаем наблюдатель
const observer = new IntersectionObserver(callback, options);

// Начинаем наблюдение за целевым элементом
const targetElement1 = document.querySelector('.opacityImg1');
const targetElement2 = document.querySelector('.opacityImg2');
const targetElement3 = document.querySelector('.opacityImg3');
const targetElement4 = document.querySelector('.opacityImg4');
const targetElement5 = document.querySelector('.opacityImg5');


if (targetElement1|| targetElement2 || targetElement3 || targetElement4 || targetElement5) {
  observer.observe(targetElement1);
  observer.observe(targetElement2);
  observer.observe(targetElement3);
  observer.observe(targetElement4);
  observer.observe(targetElement5);
} else {
  console.error('Целевой элемент не найден!');
}