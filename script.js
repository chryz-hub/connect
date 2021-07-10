const chk = document.getElementById('chk');
const ball = document.querySelector('.ball');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  ball.classList.add('moveBall');
}

chk.addEventListener('click', () => {
  let theme = localStorage.getItem('theme');
  console.log(theme);
  if (theme === 'dark') {
    changeThemeToLight();
    ball.style.transform = 'translateX(0)';
  } else {
    changeThemeToDark();
    ball.style.transform = 'translateX(22px)';
  }
});

function changeThemeToDark() {
  document.body.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

function changeThemeToLight() {
  document.body.classList.remove('dark');
  localStorage.setItem('theme', 'light');
}

window.addEventListener('load', function () {
  (window.matchMedia('(prefers-color-scheme: dark)').matches)?changeThemeToDark():changeThemeToLight();
})
