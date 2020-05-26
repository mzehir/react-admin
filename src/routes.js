import React from 'react';
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));

const Anasayfa = React.lazy(() => import('./views/Base/Anasayfa'));
const Yetkinlik = React.lazy(() => import('./views/Base/Yetkinlik'));
const Hakkimda = React.lazy(() => import('./views/Base/Hakkimda'));
const Calismalarim = React.lazy(() => import('./views/Base/Calismalarim'));
const Paketfiyatlar = React.lazy(() => import('./views/Base/Paketfiyatlar'));
const Testimonial = React.lazy(() => import('./views/Base/Testimonial'));
const Blog = React.lazy(() => import('./views/Base/Blog'));
const Iletisim = React.lazy(() => import('./views/Base/Iletisim'));
// const Dashboard = React.lazy(() => import('./views/Dashboard'));


const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));

const routes = [
  { path: '/', exact: true, name: 'Admin Paneli' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },

  { path: '/base/anasayfa', name: 'Anasayfa', component: Anasayfa },
  { path: '/base/yetkinlik', name: 'Yetkinlik', component: Yetkinlik },
  { path: '/base/hakkimda', name: 'Hakkımda', component: Hakkimda },
  { path: '/base/calismalarim', name: 'Çalışmalarım', component: Calismalarim },
  { path: '/base/paketfiyatlar', name: 'Paket Fiyatlar', component: Paketfiyatlar },
  { path: '/base/testimonial', name: 'Testimonial', component: Testimonial },
  { path: '/base/blog', name: 'Blog', component: Blog },
  { path: '/base/iletisim', name: 'İletişim', component: Iletisim },

  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },

  { path: '/widgets', name: 'Widgets', component: Widgets },
];

export default routes;
