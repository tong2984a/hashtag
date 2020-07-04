import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Main from './pages/Main';
import MyFavorites from './pages/MyFavorites';
import Welcome from './pages/Welcome';
import WriteReview2 from './pages/WriteReview2';
import Pic from './pages/Pic';
import ThankYou from './pages/ThankYou';
import Classification from './pages/Classification';
import TopRestaurant from './pages/TopRestaurant';
import RestaurantReview from './pages/RestaurantReview';
import UserReview from './pages/UserReview';
import FoodReview from './pages/FoodReview';
import Profile from './pages/Profile';
import QR from './pages/QR';
import Follow from './pages/Follow';
import PlantBased from './pages/PlantBased';
import MyCoupon from './pages/MyCoupon';
import NewItem from './pages/NewItem';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/new" component={NewItem} />
          <Route path="/main" component={Main} />
          <Route path="/my_favourites" component={MyFavorites} />
          <Route path="/welcome/:tab" component={Welcome} />
          <Route path="/write_review_2" component={WriteReview2} />
          <Route path="/pic" component={Pic} />
          <Route path="/thank_you" component={ThankYou} />
          <Route path="/classification" component={Classification} />
          <Route path="/top_restaurant" component={TopRestaurant} />
          <Route path="/restaurant_review" component={RestaurantReview} />
          <Route path="/user_review" component={UserReview} />
          <Route path="/food_review" component={FoodReview} />
          <Route path="/profile" component={Profile} />
          <Route path="/follow" component={Follow} />
          <Route path="/qr" component={QR} />
          <Route path="/plant_based" component={PlantBased} />
          <Route path="/my_coupon" component={MyCoupon} />
          <Route path="/" render={() => <Redirect to="/welcome/tab3" />} exact={true} />
        </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;
