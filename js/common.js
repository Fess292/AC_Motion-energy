!function () {
  function clear(text) {
    return text.length ? text.replace(/\s{2,}/g, ' ').replace(/^\s|\s$/g, '') : '';
  }

  window.scrollTo = function (selectButs, selectBox, duration, indent) {
    indent = indent || 0;
    duration = duration || 500;

    box = function (element) {
      return element.getBoundingClientRect().top + window.pageYOffset - indent
    };

    callback = (typeof selectBox === 'function') ? selectBox : box(document.querySelector(selectBox));

    function scrolls(to) {
      var globalBox = document.scrollingElement || document.documentElement,
        start = globalBox.scrollTop,
        change = to - start,
        startDate = +new Date(),
        easeInOutQuad = function (t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
          var currentDate = +new Date();
          var currentTime = currentDate - startDate;
          globalBox.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
          if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
          } else {
            globalBox.scrollTop = to;
          }
        };
      animateScroll();
    }

    var buttons = document.querySelectorAll(selectButs);
    for (i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        scrolls(callback(this))
      });
    }
  };

  

  // var menuBox = document.querySelector('.navigation');
  // var menuBurg = document.querySelector('.navigation__burg');
  // var menuBut = document.querySelectorAll('.navigation__item[data-go]');
  var anim = document.querySelectorAll('[data-animation]');
  // var listBox = ['home'];


  // for (var i = 0; i < menuBut.length; i++) {
  //   var id = menuBut[i].getAttribute('data-go');
  //   if (listBox.indexOf(id) < 0) listBox.push(id);
  //   menuBut[i].addEventListener('click', function () {
  //     menuBox.classList.remove('open');
  //   });
  // }



  // function actionBox() {
  //   var nav = document.querySelector('[data-action]');

  // }

  anim.forEach(function (el) {
    var id = el.getAttribute('data-animation');
    var text, word, index = 0;
    switch (id) {
      case 'symbol':
        text = clear(el.innerHTML);
        if (text.length) {
          word = text.split(' ');
          index = 0;

          word.forEach(function (symbol, i) {
            var dopCss = '';

            if (/^#(.*)#$/.test(symbol)) {
              symbol = symbol.replace(/^#(.*)#$/, '$1');
              dopCss = ' redColor';
            }
            symbol = symbol.split('');
            symbol.forEach(function (_symbol, _i) {
              symbol[_i] = '<span class="__anim__symbol' + dopCss + '" style="transition-delay: ' + (index * 25) + 'ms ">' + _symbol + '</span>';
              index++;
            });

            word[i] = '<span class="__anim__box">' + symbol.join('') + '</span>';
          });

          el.innerHTML = word.join(' ');
        }
        break;
      case 'text':
        text = clear(el.innerHTML);
        if (text.length) {
          word = text.split(' ');
          word.forEach(function (symbol, i) {
            word[i] = '<span class="__anim__box"><span class="__anim__text">' + symbol + '</span></span>';
          });

          el.innerHTML = word.join(' ');
        }
        break;
    }
  });

  function scrollShow() {
    anim.forEach(function (el) {
      var id = el.getAttribute('data-animation');
      if (id === 'text') {
        var box = el.querySelectorAll('.__anim__box');
        box.forEach(function (_el) {
          if (!_el.classList.contains('__anim-show') && (0 >= _el.getBoundingClientRect().top - window.innerHeight / 1.2)) {
            _el.classList.add('__anim-show')
          }
        });
      } else if (!el.classList.contains('__anim-show') && (0 >= el.getBoundingClientRect().top - window.innerHeight / 1.2)) {
        el.classList.add('__anim-show')
      }
    });
  }

  function scrollFun() {
    // actionBox();
    scrollShow();
  }

  scrollFun();

  document.addEventListener('scroll', scrollFun);
  window.addEventListener('resize', scrollFun);

  // var body = document.querySelector('body');









  
}();
var langUser = window.navigator ? window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage : "en";
var header = document.querySelector('.header');
// var burger = document.querySelector('.burger');
// var show = document.querySelectorAll('.show');
// var showAll = document.querySelector('.show--all');
var lang = document.querySelector('.lang');
var langData = document.querySelectorAll('[data-lang]');
var langItem = lang.querySelectorAll('li');
// var gallery = document.querySelector('.gallery');
// var finish = document.querySelector('.happy');
var device = window.innerWidth < 991 ? 0 : 1;
// var galleryDat = {};
var animate = document.querySelectorAll('[data-animate]');
var langDB = {
  en: {},
  ru: {
    1: "Вперед <br class=\"mob2\">в будущее!",
    2: "В мир великих идей,<br>высоких скоростей и чистой энергии.",
    3: "приглашает в новое путешествие:",
    4: "Что тебя ждет?<br>Будущее, о котором ты мечтал, и наши топовые призы - <br class=\"mob2\"><b>Tesla Model X & Tesla Model 3</b>.",
    5: "Хочешь Теслу?",
    6: "Лей на <b>все офферы AdCombo и CTR.ru</b> по <b>всем ГЕО</b>.<br class=\"desc\"> Заряжай батарею на максимум и получай <b>1 Илон за каждые 10&nbsp;000 USD</b> (с коэффициентом x1) на балансе.<br class=\"desc\"> Чем больше Илонов, тем больше шансов на победу!",
    7: "Участвовать",
    8: "Денежный приз",
    10: "Дополнительные призы",
    11: "Скоро появятся. Следите за обновлениями!",
    12: "Правила и условия",
    13: "Кто участвует в конкурсе?",
    14: "<br>Все зарегистрированные пользователи сетей AdCombo и CTR.ru.",
    15: "Как это работает?",
    16: "<br>Чем большая сумма заработана пользователем в сроки конкурса TeslaVision, тем больше турнирных баллов (Илонов) зачисляется на баланс пользователя. После окончания конкурса будет проведен розыгрыш призов. Чем больше Илонов на балансе - тем больше шансов выиграть приз.",
    17: "Сколько у меня времени?",
    18: "<br>Подсчёт турнирных баллов (Илонов) начинается 15.02.2021 в 00:00 UTC и завершается 01.12.2021 в 00:00&nbsp;UTC.",
    19: "Что такое “Илоны” и как их можно получить?",
    20: "<br><b>Илон</b> - турнирная валюта конкурса. Каждые заработанные 10.000 USD<sup><b>*</b></sup> конвертируются в одну единицу турнирной валюты (1 Илон).<br><br><b>ПРИМЕР:</b> Чтобы получить 1 Илон, нужно налить на COD оффер на 10.000 USD или на другие типы офферов на 20.000 USD.<br><br><b>ВНИМАНИЕ:</b> Турнирная валюта не начисляется за неподтвержденные или отклоненные лиды, а также за средства, находящиеся на удержании.<br>1 Илон = 10.000 USD для COD офферов<br>1 Илон = 20.000 USD для других типов офферов<br><br>В личном кабинете пользователя появится информационное поле, отображающее текущее количество Илонов, которое заработал пользователь и сумму, которую необходимо заработать для получения следующего Илона. Информацию о текущей позиции в рейтинге участников можно получить в разделе TeslaVision, доступном через боковое меню. Подсчёт Илонов начинается 15.02.2021 в 00:00 UTC и завершается 01.12.2021 в 00:00&nbsp;UTC.",
    21: "На какие офферы следует направлять трафик?",
    22: "<br>В конкурсе участвуют все офферы AdCombo и CTR.ru.",
    23: "Кто может участвовать в розыгрыше призов?",
    24: "<br>Участниками розыгрыша становятся пользователи, вошедшие в ТОП-50 участников на момент окончания конкурса. Для участия в розыгрыше участник (или его представитель) должен присутствовать на финальной вечеринке лично. Дата и время проведения вечеринки будут объявлены позже. Следите за новостями!<br><br><b>ВНИМАНИЕ:</b> Участникам розыгрыша будет оплачено пребывание в номерах отеля. Перелет и прочие расходы оплачиваются участниками самостоятельно.",
    25: "На какое количество призов может претендовать участник розыгрыша?",
    26: "<br>Каждый участник розыгрыша может выиграть 1 главный приз (автомобиль или денежный приз) и 1 дополнительный приз. Tesla Model X разыгрывается среди Топ-5, Tesla Model 3, денежный приз и дополнительные призы - среди Топ-50.",
    27: "Как будут определены победители розыгрыша?",
    28: "<br>Победители будут определены с помощью лотереи. Каждый участник розыгрыша получит именные фишки по количеству заработанных Илонов. Фишки всех участников розыгрыша будут загружены в лототрон. Сначала будут разыграны дополнительные, а затем главные призы.",
    29: "Следите внимательно за новостями и обновлениями. Всю дополнительную информацию вы можете получить, обратившись к персональному менеджеру или в службу поддержки AdCombo.Партнёрская сеть AdCombo может ввести ограничение на входящий трафик или произвести его временную приостановку по технической необходимости системы обработки трафика. Также, могут быть введены капы на оффер или установлен лимит на лиды. За подробной информацией по конкретному офферу обращайтесь к своему персональному менеджеру.",
    30: "Зарегистрироваться!",
    31: "Будущее с AdCombo!",
    32: "от инновационных офферов и продуктов с мощными составами",
    33: "до сверхскоростных серверных систем с нулевым простоем,",
    34: "от эко-инициатив...",
    35: "до вечеринок!",
    36: "Когда одно великое путешествие заканчивается, начинается другое. <br>Как это было:",
    37: "Что ждет нас в следующем финале?",
    38: "Экзотические пейзажи, ярчайшие эмоции, дух единства и пронизывающее <br class=\"desc\">насквозь чувство свободы - фантастический праздник жизни! <br class=\"desc\">Где все случится?",
    39: "Ты узнаешь первым!",
    40: "Создаем будущее сегодня.",
    41: "Включайся в TESLAVISION",
    42: "15 Февраля - 30 Ноября",
    43: "Лить траф!",
    44: "Регистрация",
    45: "E-mail",
    46: "Используется для входа",
    47: "Пароль",
    48: "Придумай посложнее",
    49: "Пароль еще раз",
    50: "На всякий случай",
    51: "Ник",
    52: "Придумай попроще",
    53: "Skype",
    54: "Свяжемся как можно скорее",
    55: "Твой опыт",
    56: "Опиши кратко",
    57: "Я согласен с:",
    58: "Правила и Условия использования",
    59: "и",
    60: "Политика конфиденциальности",
    61: "Уже за&shy;ре&shy;гис&shy;три&shy;ро&shy;ва&shy;н(а)? <span>Войти</span>",
    62: "Отправить"
  },
  en: {
    1: "¡Adelante hacia el futuro!",
    2: "Donde las grandes ideas se hacen realidad,<br>las velocidades son altas y la energía es limpia.",
    3: "te invitamos a un nuevo viaje:",
    4: "¿Qué te espera?<br>Un futuro brillante y nuestros mejores premios: <br class=\"mob2\"><b>Tesla Model X y Tesla Model 3</b>.",
    5: "¿Quieres un Tesla?",
    6: "Empieza a enviar tráfico a <b>todas las ofertas de AdCombo</b> para <b>cualquier GEO</b> y obtén <b>1 Elon por cada 10&nbsp;000&nbsp;$</b> (con un coeficiente 1x) disponibles en tu cuenta.<br class=\"desc\"> ¡Carga tu batería al máximo y aumenta tus posibilidades de ganar!",
    7: "¡Únete a TeslaVision!",
    8: "Premio en efectivo",
    10: "Otros premios",
    11: "¡Próximamente, estén atentos!",
    12: "Reglas y condiciones",
    13: "¿Quién participa en el desafío?",
    14: "<br>Todos los afiliados de AdCombo y CTR.ru",
    15: "¿Cómo funciona?",
    16: "<br>Cuanto más dinero ganes en la red durante el desafío, más puntos de desafío (Elons) obtendrás. Una vez finalizado el desafío TeslaVision, se sorteará los premios. Mientras más Elons tengas en tu cuenta, más posibilidades tendrás de ganar un premio en el sorteo.",
    17: "¿Cuánto tiempo dispongo?",
    18: "<br>Los cálculos de los puntos del desafío (Elons) comienzan el 15 de febrero del 2021, a las 00:00 UTC y terminarán el 1 de diciembre del 2021, a las 00:00 UTC.",
    19: "¿Qué son los \"Elons\" y cómo puedo conseguirlos?",
    20: "<br><b>Elons</b> - son los puntos del desafío de TeslaVision. Obtienes 1 Elon por cada 10&nbsp;000 $<sup><b>*</b></sup> ganados y disponibles para retirar en tu cuenta de afiliado.<br><br><b>EJEMPLO:</b> Para conseguir 1 Elon, necesitas ganar 10&nbsp;000 USD en una oferta COD o hacer 20&nbsp;000 USD en una otra oferta.<br><br><b>ATENCIÓN:</b> Los Elons no se calculan para los leads en hold, los leads rechazados y cancelados.<br>1 Elon = 10&nbsp;000&nbsp;USD en una oferta COD<br>1 Elon = 20&nbsp;000&nbsp;USD en una otra oferta<br><br>Puedes encontrar una barra informativa de Elons en tu cuenta personal de AdCombo. Muestra el número actual de Elons en tu cuenta y la cantidad de ganancias hasta tu próximo Elon. También puedes ver tu progreso en la tabla de clasificación en la sección TeslaVision disponible en el menú lateral. El cálculo de los Elons comienza el 15 de febrero de 2021, a las 00:00&nbsp;UTC, y termina el 1 de diciembre de 2021, a las 00:00&nbsp;UTC.",
    21: "¿A qué ofertas debo enviar tráfico?",
    22: "<br>A todas las ofertas de AdCombo y CTR.ru.",
    23: "¿Quién puede participar en el sorteo?",
    24: "<br>El top 50 de los afiliados que más Elons hayan conseguido durante el desafío de TeslaVision están invitados a la fiesta final y podrán participar en el sorteo de premios que se celebrarán allí.<br><br><b>Nota:</b> Para participar en el sorteo de premios, los participantes deberán asistir a la fiesta final personalmente o bien enviar a sus representantes.<br>La fecha y hora de la fiesta se anunciarán más adelante. ¡No te pierdas las novedades!<br>AdCombo asume los gastos de alojamiento gratuito de los afiliados TOP 50 en el lugar de la fiesta final. Todos los gastos relacionados al viaje, corren por cuenta del afiliado.",
    25: "¿Cuántos premios puede ganar un afiliado en el sorteo?",
    26: "<br>Cada participante del sorteo puede ganar 1 premio mayor (un auto o un premio en efectivo) y 1 premio menor. El Tesla Model X se sortea entre los top 5, el Tesla Model 3, premio en efectivo y los premios menores entre los TOP 50).",
    27: "¿Cómo se determina el ganador?",
    28: "<br>El ganador será elegido por sorteo. Cada uno de los participantes del sorteo recibirá fichas con su nombre de usuario registrado en la red. La cantidad de fichas de un participante es igual o proporcional al número de Elons ganados. Las fichas de todos los participantes del sorteo se introducen en un bombo de lotería. Primero se realizará el sorteo de los premios menores. A continuación, se realizará el sorteo de los premios mayores.",
    29: "Sigue nuestras noticias y actualizaciones y envía un ticket a tu manager o ponte en contacto con el servicio de asistencia de AdCombo si tienes alguna pregunta. La red de afiliados AdCombo se reserva el derecho de imponer restricciones al tráfico entrante o suspenderlo temporalmente debido a la necesidad técnica del sistema. Además, AdCombo puede establecer límites en las ofertas o poner un límite en el número de leads.",
    30: "¡Iniciar mi campaña!",
    31: "El futuro está prácticamente aquí.<br>¡Y nosotros lo formamos!",
    32: "Desde ofertas innovadoras y productos con potentes componentes",
    33: "Hasta los sistemas de servidores Multi-Geo de última generación con tiempo de inactividad cero",
    34: "Desde iniciativas ecológicas y filantrópicas...",
    35: "¡hasta las fiestas!",
    36: "Al finalizar un gran viaje, comienza otro. Así es como lo celebramos:",
    37: "¿Qué nos espera esta vez?",
    38: "Lugares exóticos, poderosas emociones, espíritu de unidad, fuego de la libertad <br class=\"desc\">corriendo por las venas... ¡una gran fiesta que todos anhelaremos! <br class=\"desc\">¿Dónde está nuestro próximo destino glorioso?",
    39: "Pronto lo sabrás.",
    40: "Aumenta tu tráfico y únete a nosotros ahora. <br class=\"desc\">Creamos hoy nuestro futuro",
    41: "ÚNETE A TESLAVISION",
    42: "15 de febrero - 30 de noviembre",
    43: "¡Iniciar mi campaña!",
    44: "Registrarse ",
    45: "Correo electrónico",
    46: "Se utilizará para iniciar sesión",
    47: "Contraseña",
    48: "Crea una difícil",
    49: "Confirmar la contraseña",
    50: "Solo para estar seguro",
    51: "Nombre de usuario",
    52: "Crea una fácil",
    53: "Skype",
    54: "Nos pondremos en contacto lo antes posible",
    55: "Experiencia",
    56: "Solo unas cuantas palabras...",
    57: "Acepto:",
    58: "Términos y Condiciones",
    59: "y",
    60: "Política de Privacidad",
    61: "¿Registrado? <span>Inciar sesión</span>",
    62: "Enviar"
  }
};

function headScroll() {
  var coords = finish.getBoundingClientRect();
  if (window.scrollY >= 80 && window.scrollY < coords.top + window.pageYOffset - 80) {
    header.classList.add('scroll1');
    header.classList.remove('scroll2');
  } else if (window.scrollY >= coords.top + window.pageYOffset - 80) {
    header.classList.add('scroll2');
    header.classList.remove('scroll1');
  } else {
    header.classList.remove('scroll1');
    header.classList.remove('scroll2');
  }
}

// function heightShow() {
//   for (var i = 0; i < show.length; i++) {
//     show[i].classList.remove('open');
//     show[i].nextElementSibling.setAttribute('style', '');
//     show[i].parentElement.classList.remove('open');
//   }

//   for (i = 0; i < show.length; i++) {
//     var next = show[i].nextElementSibling;
//     next.setAttribute('data-height', next.firstElementChild.offsetHeight);
//     next.setAttribute('style', 'max-height:0');
//   }

//   showAll.classList.remove('open');
// }





function toggleLang(lang) {
  lang = lang || false;
  for (var z = 0; z < langData.length; z++) {
    var dataId = langData[z].getAttribute('data-lang');

    if (lang) {
      if (langDB[lang][dataId]) {
        if (/INPUT|TEXTAREA/.test(langData[z].nodeName)) {
          langData[z].setAttribute('placeholder', langDB[lang][dataId]);
        } else {
          langData[z].innerHTML = langDB[lang][dataId];
        }
      }
    } else {
      if (/INPUT|TEXTAREA/.test(langData[z].nodeName)) {
        langDB.en[dataId] = langData[z].getAttribute('placeholder');
      } else {
        langDB.en[dataId] = langData[z].innerHTML;
      }
    }
  }
  // if (lang) heightShow();
}

toggleLang();

langUser = langUser.substr(0, 2).toLowerCase();

try {
  if (!localStorage.getItem('langUser')) {
    localStorage.setItem('langUser', langUser);
  } else {
    langUser = localStorage.getItem('langUser');
  }
} catch (e) {}

if (langUser !== 'en' && langDB[langUser]) {
  toggleLang(langUser);
  for (var a = 0; a < langItem.length; a++) {
    langItem[a].classList.remove('active');
    if (langItem[a].innerText === langUser) langItem[a].classList.add('active');
  }
}

// burger.addEventListener('click', function () {
//   if (header.classList.contains('open')) {
//     header.classList.remove('open');
//     burger.classList.remove('open');
//   } else {
//     header.classList.add('open');
//     burger.classList.add('open');
//   }
// });

for (a = 0; a < langItem.length; a++) {
  langItem[a].addEventListener('click', function (e) {
    if (!this.classList.contains('active')) {
      e.preventDefault();
      e.stopPropagation();

      var id = this.innerText.toLocaleLowerCase();
      if (langDB[id]) {

        for (var z = 0; z < langItem.length; z++) {
          langItem[z].classList.remove('active');
        }
        lang.classList.remove('selection');
        this.classList.add('active');
        try {
          localStorage.setItem('langUser', id);
        } catch (e) {}
        toggleLang(id);
      }
    }
  });
}

lang.addEventListener('click', function () {
  if (this.classList.contains('selection')) {
    this.classList.remove('selection');
  } else {
    this.classList.add('selection');

  }
});

// heightShow();

// showAll.addEventListener('click', function () {
//   for (var i = 0; i < show.length; i++) {
//     if (this.classList.contains('open')) {
//       show[i].classList.remove('open');
//       show[i].nextElementSibling.setAttribute('style', 'max-height:0');
//       show[i].parentElement.classList.remove('open');
//     } else {
//       var next = show[i].nextElementSibling;
//       show[i].classList.add('open');
//       next.setAttribute('style', 'max-height:' + next.getAttribute('data-height') + 'px');
//       show[i].parentElement.classList.add('open');
//     }
//   }
//   if (this.classList.contains('open')) {
//     this.classList.remove('open');
//   } else {
//     this.classList.add('open');
//   }
//   setTimeout(function () {
//     animation();
//   }, 300);
// });

for (var i = 0; i < show.length; i++) {
  show[i].addEventListener('click', function () {
    var next = this.nextElementSibling;
    var globalOpen = false;
    if (this.classList.contains('open')) {
      this.classList.remove('open');
      this.parentElement.classList.remove('open');
      next.setAttribute('style', 'max-height:0');
    } else {
      this.classList.add('open');
      this.parentElement.classList.add('open');
      next.setAttribute('style', 'max-height:' + next.getAttribute('data-height') + 'px');
    }

    for (var q = 0; q < show.length; q++) {
      if (show[q].classList.contains('open')) {
        globalOpen = true;
        break;
      }
    }

    if (globalOpen) {
      showAll.classList.add('open');
    } else {
      showAll.classList.remove('open');
    }

    setTimeout(function () {
      animation();
    }, 300);
  });
}

headScroll();

animation(true);

galleryInit();

window.addEventListener('scroll', function () {
  headScroll();
  animation();
});

window.addEventListener("resize", function () {
  if (device === 0 && window.innerWidth > 990) {
    device = 1;
    // heightShow();
    // galleryInit();
  } else if (device === 1 && window.innerWidth < 991) {
    device = 0;
    // heightShow();
    // galleryInit();
  }
});