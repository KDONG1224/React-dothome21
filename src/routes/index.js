import * as paths from './const';
import * as pages from 'pages';
export * as paths from './const';

export const routes = {
  public: [
    {
      path: paths.ROUTE_PAGES,
      component: pages.LazyHomePage
    },
    {
      path: paths.ROUTE_MASUL,
      component: pages.LazyMasulPage
    }
  ]
  // private: [
  //   {
  //     path: paths.ROUTE_PAGES,
  //     component: pages.LazyHomePage
  //   }
  // ]
};
