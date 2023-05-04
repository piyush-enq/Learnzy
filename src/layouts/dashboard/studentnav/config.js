// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/studentdash/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'My Profile',
    path: '/studentdash/myprofile',
    icon: icon('ic_user'),
  },
  {
    title: 'My Tutors',
    path: '/studentdash/mytutors',
    icon: icon('student-person-svgrepo-com'),
  },
  {
    title: 'Payments',
    path: '/studentdash/payments',
    icon: icon('ic_user'),
  },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
