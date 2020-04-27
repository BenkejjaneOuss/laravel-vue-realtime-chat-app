import router from './routes';
//import store from './store';
//import { Message } from 'element-ui';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getToken } from './utils/auth'; // get token from cookie
//import getPageTitle from './utils/get-page-title';

//NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ['/login', '/register', '/']; // no redirect whitelist
const title = 'Chat App';
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start();
  // set page title
  const titleComponent = to.meta.title;
  if(titleComponent){
    document.title = `${title} - ${titleComponent}`;
  }else{
    document.title = `${title}`;
  }
  
  // determine whether the user has logged in
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: 'chats' });
      NProgress.done();
    } else if (to.path === '/register'){
      next({ path: 'chats' });
      NProgress.done();
    } else {
      next();
      NProgress.done();
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
      NProgress.done();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.name}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
