# Розв'язання технічного завдання від PortaOne

## реалізація

- завдання вирішено на _Node.js / express / swagger_ та задеплоєно на орендований _Ubuntu_ сервер
- застосовано просту валідацію вхідних даних через _middleware_ за допомогою бібліотеки _joi_
- в контролері додано умови на уникнення зайвих ітерацій при поверненні пустої відповіді на кожному етапі парсингу
- оскільки за умовами завдання програма має шукати **_перший символ в слові_** вхідного тексту, то вхідний текст оброблюється методом split із застосуванням regexp на умову, що це має бути _сукупність літер будь-якої мови згідно таблиці юнікод, включаючи тире та апострофи_
- згідно наявної у додатку _swagger_ документації додаток передбачає отримання даних за POST - запитом на раут _/api/parser_ у bodi якого має бути json дані із параметром "text", властивістю якого має бути власне текст, що має бути розпарсено

## запуск проекту

- online документація/тестування : https://portaone-test.yurgo.fun/api-docs/ (або згідно документації - запитом з будь-якого http клієнта на раут https://portaone-test.yurgo.fun/api/parser)
- також додаток можна запустити локально,
  - тоді документація буде доступна за адресою http://localhost:3011/api-docs/
  - адреса запиту http://localhost:3011/api/parser

---

## Умови завдання

**Вам потрібно розробити алгоритм програми, яка повинна виконувати наступне:**

- програма приймає на вхід довільний текст і знаходить в кожному слові цього тексту
  найперший символ, який більше НЕ повторюється в аналізуємому слові
- далі із отриманого набору символів програма повинна вибрати перший унікальний
  (тобто той, який більше не зустручається в наборі) і повернути його.

Наприклад, якщо програма отримує на вхід текст нижче:

```
The Tao gave birth to machine language. Machine language gave birth
to the assembler.
The assembler gave birth to the compiler. Now there are ten thousand
languages.
Each language has its purpose, however humble. Each language
expresses the Yin and Yang of software. Each language has its place within
the Tao.
But do not program in COBOL if you can avoid it.
-- Geoffrey James, "The Tao of Programming"
```

то повинна повернути вона символ _"m"_.

Ви майже не обмежені у виборі методу і способу вирішення задачі. Ви можете використовувати
будь-які засоби та підходи, лише дотримуючись двох обмежень, наведених нижче. Ви можете
написати програму на будь-якій мові програмування чи використовувати вже існуючі програми та утіліти.

Існує 2 обмеження, які потрібно враховувати при виконанні:

_Обмеження #1:_
Будь-яка людина повинна мати можливість використати ваш метод. Тобто, якщо для вирішення
задачі ви використали власну програму, то інша людина повинна мати можливість її скомпілювати
або запустити. Якщо ви використали сторонні програми, то інша людина теж повинна мати можливість ними скористатися.

_Обмеження #2:_
при вирішенні задачі не можна використовувати нелегальне програмне забезпечення (пропрієтарне
ПЗ, яке взломали, піратські копії тощо). Також якщо ви взяли ідею, ПЗ або вихідний код у друга/колеги/в
інтернеті, потрібно вказати джерело.

_Додаткова умова:_

- вкажіть також питання (якщо вони виникають), які ви би хотіли задати перед тим, як почати вирішувати задачу.
