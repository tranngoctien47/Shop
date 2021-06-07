import { Route, Switch } from "react-router-dom";
import './assets/custom.css'
import { Footer, Header, ModelCart, ModelSearch, ModelSizeChart } from "./components";
import AppProvider from "./core/AppProvider";
import reducers from './redux/reducers'
import PrivateRouter from "./core/PrivateRouter";
import React, { useRef, Suspense } from "react";
import saga from "redux/saga";
import { setTranslate } from "core/Translate";
import vi from './translate/vi'
import en from './translate/en'

setTranslate({
  default: localStorage.getItem('lang') || 'vi',
  vi, en,
  env: 'test'
})


function App() {
  let sizeChartRef = useRef();
  return (
    <>
      <Header />
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <PrivateRouter path="/account" component={React.lazy(() => import('./page/Account'))} />
          <Route path="/shipping-and-returns" component={React.lazy(() => import('./page/ShippingAndReturns'))} />
          <Route path="/about" component={React.lazy(() => import('./page/About'))} />
          <Route path="/store-locator" component={React.lazy(() => import('./page/StoreLocator'))} />
          <Route path="/shopping-cart" component={React.lazy(() => import('./page/ShoppingCart'))} />
          <Route path="/faq" component={React.lazy(() => import('./page/FAQ'))} />
          <Route path="/catalog/:slug?" component={React.lazy(() => import('./page/Catalog'))} />
          <Route path="/product/:slug" component={React.lazy(() => import('./page/ProductDetail'))} />
          <Route path="/contact-us" exact component={React.lazy(() => import('./page/ContactUs'))} />
          <Route path="/checkout" exact component={React.lazy(() => import('./page/Checkout'))} />
          <Route path="/auth" exact component={React.lazy(() => import('./page/Auth'))} />
          <Route path="/coming-soon" exact exact component={React.lazy(() => import('./page/ComingSoon'))} />
          <Route path="/order-completed/:_id" component={React.lazy(() => import('./page/OrderCompleted'))} />
          <Route path="/" exact component={React.lazy(() => import('./page/Home'))} />
          <Route path="/" component={React.lazy(() => import('./page/Page404'))} />
        </Switch>
      </Suspense>
      <Footer sizeChartRef={sizeChartRef} />
      <ModelCart />
      <ModelSearch />
      <ModelSizeChart ref={sizeChartRef} />
    </>
  );
}

export default () => (
  <AppProvider reducers={reducers} saga={saga}>
    <App />
  </AppProvider>
);
