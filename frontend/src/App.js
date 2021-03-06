import {  Routes, Route } from 'react-router-dom' // unstable_HistoryRouter as HistoryRouter,
import { lazy, Suspense } from 'react'
// import { history } from './utils/history'
import  NeedAuth from '@/components/NeedAuth'

// import './App.css'
// import { AuthComponent } from '@/components/AuthComponent'
// import About from './pages/About'
// import Connect from './pages/Connect'
// import Home from '@/pages/Home'
// import Articles from '@/pages/Articles'

// 按需导入组件
// @ 在 craco.config.js 里被 resolve 为 path+'src' 了，所以仍能找到
// const Login = lazy(() => import('@/pages/Login'))
// const Layout = lazy(() => import('@/pages/Layout'))
// const Home = lazy(() => import('@/pages/Home'))
// const Articles = lazy(() => import('@/pages/Articles'))
// const Connect = lazy(() => import('@/pages/Connect'))
// const Publish = lazy(() => import('@/pages/Publish'))

const LayoutPage = lazy(() => import('@/pages/LayoutPage'))
const HomePage = lazy(() => import('@/pages/HomePage'))
const ArticlesPage = lazy(() => import('@/pages/ArticlesPage'))
const ConnectPage = lazy(() => import('@/pages/ConnectPage'))
const ContentManagePage = lazy(() => import('@/pages/ContentManagePage'))
const AuthPage = lazy(() => import('@/pages/AuthPage'))
const ArticleDetail = lazy(() => import('@/components/ArticleDetail'))

export default function App () {
  return (
    // 路由配置
    // <HistoryRouter history={history}>   {/* 使用 HistoryRouter 进行组件外跳转 */}
      <div className="App">
        <Suspense
          fallback={
            <div style={{ textAlign: 'center', marginTop: 200 }} >
              loading...
            </div>
          }
        >
          <Routes>  {/*  这里是路由出口， 路由出口？？？ */}
            {/* 创建路由path和组件对应关系 */}
            {/* Layout需要鉴权处理的 */}
            {/* 这里的Layout 一定不能写死 要根据是否登录进行判断 */}
            <Route path='/' element={  <LayoutPage /> }>      {/*  </AuthComponent> */}
              <Route path='/' element={<HomePage />}></Route>
              <Route path='articles' > 
                <Route path='' element={<ArticlesPage />}></Route>
                <Route path=':articleId' element={<ArticleDetail />}> </Route>
                {/* <Route path='about' element={<About />}></Route>  */}
              </Route>
              <Route path='content-manage' element={
                <NeedAuth>
                  <ContentManagePage />
                </NeedAuth>
              }></Route> 
              <Route path='connect-us' element={<ConnectPage />}></Route> 
              <Route path='login' element={<AuthPage />}></Route> 
            </Route>

            {/* <Route path='/login' element={<NeedAuth />}></Route> */}
          </Routes>
        </Suspense>
      </div>
    // </HistoryRouter>
  )
};
