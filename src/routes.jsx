import { createBrowserRouter } from 'react-router-dom';
import App from './App';
// import Main from './components/pages/Main/Main';
// import About from './components/pages/About/About';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading/Loading';

// * Element
const Element = ({ component }) => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
}

// lazy load - завантаження сторінки  тільки тоді, коли на неї переходить користувач
const Main = lazy(() => import('./pages/Main/Main'));
const About = lazy(() => import('./pages/About/About'));
const Error = lazy(() => import('./pages/Error/Error'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        // element: <Main />,

        // Loading відображається, поки вантажиться Main
        // Suspense - обгортка елемента, що вантажиться
        // element: <Suspense fallback={<Loading />}>
        //   {<Main />}
        // </Suspense>,
        
        // Заміняємо на Element
        element: <Element component={<Main />} />,
      },
      {
        path: '/about',
        // element: <About />,
        // element: <Suspense fallback={<Loading />}>
        //   {<About />}
        // </Suspense>,
        element: <Element component={<About />} />,
      },
      {
        // Error 404
        path: '*',
        element: <Element component={<Error />} />,
      },
    ],
  },
]);

export default routes;
// // * Base
// import { createBrowserRouter } from 'react-router-dom';
// import { ReactNode, Suspense, lazy } from 'react';

// // * App
// import App from './App';

// // * Components
// import Loading from './components/Loading/Loading';

// // * Pages
// const ConsultationForm = lazy(() => import('./pages/ConsultationForm/ConsultationForm')),
//   PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy/PrivacyPolicy')),
//   ForTeaching = lazy(() => import('./pages/ForTeaching/ForTeaching')),
//   UsefulLinks = lazy(() => import('./pages/UsefulLinks/UsefulLinks')),
//   TermsOfUse = lazy(() => import('./pages/TermsOfUse/TermsOfUse')),
//   Contacts = lazy(() => import('./pages/Contacts/Contacts')),
//   Support = lazy(() => import('./pages/Support/Support')),
//   SiteMap = lazy(() => import('./pages/SiteMap/SiteMap')),
//   Error = lazy(() => import('./pages/Error/Error')),
//   About = lazy(() => import('./pages/About/About')),
//   Blog = lazy(() => import('./pages/Blog/Blog')),
//   Home = lazy(() => import('./pages/Home/Home')),
//   Faq = lazy(() => import('./pages/Faq/Faq')),
//   // * Courses
//   CoursesMain = lazy(() => import('./pages/Courses/CoursesMain/CoursesMain')),
//   Frontend = lazy(() => import('./pages/Courses/Frontend/Frontend')),
//   English = lazy(() => import('./pages/Courses/English/English')),
//   Courses = lazy(() => import('./pages/Courses/Courses'));

// // * Element
// function Element({ component }: { component: ReactNode }) {
//   return <Suspense fallback={<Loading />}>{component}</Suspense>;
// }

// // * Routers
// export default createBrowserRouter([
//   {
//     path: '/',
//     element: <Element component={<App />} />,
//     children: [
//       {
//         path: '/',
//         element: <Element component={<Home />} />,
//       },
//       {
//         path: '/courses',
//         element: <Element component={<Courses />} />,
//         children: [
//           {
//             path: '',
//             element: <Element component={<CoursesMain />} />,
//           },
//           {
//             path: 'frontend',
//             element: <Element component={<Frontend />} />,
//           },
//           {
//             path: 'english',
//             element: <Element component={<English />} />,
//           },
//         ],
//       },
//       {
//         path: '/about',
//         element: <Element component={<About />} />,
//       },
//       {
//         path: '/consultation-form',
//         element: <Element component={<ConsultationForm />} />,
//       },
//       {
//         path: '/privacy-policy',
//         element: <Element component={<PrivacyPolicy />} />,
//       },
//       {
//         path: '/blog',
//         element: <Element component={<Blog />} />,
//       },
//       {
//         path: '/faq',
//         element: <Element component={<Faq />} />,
//       },
//       {
//         path: '/teaching',
//         element: <Element component={<ForTeaching />} />,
//       },
//       {
//         path: '/support',
//         element: <Element component={<Support />} />,
//       },
//       {
//         path: '/sitemap',
//         element: <Element component={<SiteMap />} />,
//       },
//       {
//         path: '/terms-of-use',
//         element: <Element component={<TermsOfUse />} />,
//       },
//       {
//         path: '/useful-links',
//         element: <Element component={<UsefulLinks />} />,
//       },
//       {
//         path: '/contacts',
//         element: <Element component={<Contacts />} />,
//       },
//       {
//         path: '*',
//         element: <Element component={<Error />} />,
//       },
//     ],
//   },
// ]);
