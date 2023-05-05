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
    title: 'Tutor List',
    path: '/studentdash/tutorlist',
    icon: icon('ic_user'),
  },
  {
    title: 'My Tutors',
    path: '/studentdash/mytutors',
    icon: icon('partners'),
  },
  {
    title: 'Assignments',
    path: '/studentdash/assignments',
    icon: icon('ic_user'),
  },
];
export default navConfig;