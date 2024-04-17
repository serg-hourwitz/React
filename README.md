# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


useState це хук React, який дозволяє додавати змінну стану до вашого компонента.
const [state, setState] = useState(initialState)

useCallback це React Hook, який дозволяє кешувати визначення функції між повторним рендерингом.
const cachedFn = useCallback(fn, dependencies)

useEffect це React Hook, який дозволяє синхронізувати компонент із зовнішньою системою.
useEffect(setup, dependencies?)

useContext це React Hook, який дозволяє вам читати та підписуватися на контекст із вашого компонента.
const value = useContext(SomeContext)

useDebugValue— це хук React, який дозволяє додавати мітку до спеціального хука в React DevTools.
useDebugValue нічого не повертає.
useDebugValue(value, format?)

useDeferredValue це хук React, який дозволяє відкласти оновлення частини інтерфейсу користувача.
const deferredValue = useDeferredValue(value)

useId це React Hook для генерації унікальних ідентифікаторів, які можна передати в атрибути доступності.
useId не приймає жодних параметрів.
const id = useId()

useImperativeHandle це React Hook, який дозволяє налаштувати дескриптор, представлений як посилання.
useImperativeHandle(ref, createHandle, dependencies?)

useInsertionEffect дозволяє вставляти елементи в DOM до того, як спрацюють будь-які ефекти макета.
useInsertionEffect(setup, dependencies?)

useLayoutEffect це версія, useEffectяка запускається до того, як браузер перефарбує екран.
useLayoutEffect(setup, dependencies?)

useMemo — це хук React, який дозволяє кешувати результат обчислень між повторними візуалізаціями.
const cachedValue = useMemo(calculateValue, dependencies)

useReduce — це хук React, який дозволяє додавати редуктор до вашого компонента.
const [state, dispatch] = useReducer(reducer, initialArg, init?)

useRef це React Hook, який дозволяє посилатися на значення, яке не потрібне для відтворення.
const ref = useRef(initialValue)

Замість об’єкта ref (як того, що повертає useRef), ви можете передати функцію атрибуту ref.
<div ref={(node) => console.log(node)} />
Не повертайте нічого із зворотного виклика ref .

useSyncExternalStore це React Hook, який дозволяє підписатися на зовнішній магазин.
Він повертає знімок даних у сховищі. Вам потрібно передати дві функції як аргументи:
1. Функція subscribe має підписатися на магазин і повернути функцію, яка скасовує підписку.
2. Функція getSnapshot повинна читати знімок даних зі сховища.
const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)

useTransition це React Hook, який дозволяє оновлювати стан, не блокуючи інтерфейс користувача.
const [isPending, startTransition] = useTransition()


Ці події запускаються лише для <form>елементів:

* onReset: функція Eventобробки . Спрацьовує, коли форму скидають.
* onResetCapture: версія, onResetяка запускається на етапі захоплення.
* onSubmit: функція Eventобробки . Спрацьовує, коли надсилається форма.
* onSubmitCapture: версія, onSubmitяка запускається на етапі захоплення.

* preventDefault(): запобігає дії браузера за умовчанням для події.
* stopPropagation(): зупиняє розповсюдження події через дерево React.