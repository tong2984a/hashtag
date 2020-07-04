import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonRouterLink
} from '@ionic/react';
import React from 'react';
import { CSSProperties } from "react";
import '../theme/resources/css/axure_rp_page.css';
import '../theme/data/styles.css';
import '../theme/files/welcome/styles.css';
import { RouteComponentProps } from "react-router-dom";

const style_display_none_visibility_hidden: CSSProperties = {
  display: 'none',
  visibility: 'hidden'
}

const style_visibility_hidden: CSSProperties = {
  visibility: 'hidden'
}

interface WelcomePageProps extends RouteComponentProps<{
  tab: string;
}> { }

const Welcome: React.FC<WelcomePageProps> = ({ match }) => {
  console.log(match.params.tab);
  console.log("Welbbcome" + (match.params.tab === 'tab1'));
  let content;
  if (match.params.tab === 'tab1') {
    console.log("Welcome444");
    content =
      <div id="u6_state0" className="panel_state" data-label="State1" >
        <div id="u6_state0_content" className="panel_state_content">
          <div id="u7" className="ax_default image">
            <img id="u7_img" className="img " src="images/welcome/u7.png" />
            <div id="u7_text" className="text " style={style_display_none_visibility_hidden}>
              <p></p>
            </div>
          </div>
          <div id="u8" className="ax_default box_1">
            <img id="u8_img" className="img " src="images/welcome/u8.svg" />
            <div id="u8_text" className="text " style={style_display_none_visibility_hidden}>
              <p></p>
            </div>
          </div>
          <div id="u9" className="ax_default heading_1">
            <div id="u9_div" className=""></div>
            <div id="u9_text" className="text ">
              <p><span>Welcome to</span></p><p><span>Pay-A-Vegan</span></p>
            </div>
          </div>
          <div id="u10" className="ax_default heading_3">
            <div id="u10_div" className=""></div>
            <div id="u10_text" className="text ">
              <p><span>Every time you eat a vegan or vegetarian</span></p>
            </div>
          </div>
        </div>
      </div>
  }

  if (match.params.tab === 'tab2') {
    content =
      <div id="u6_state0" className="panel_state" data-label="State1" >
        <div id="u6_state0_content" className="panel_state_content">
          <div id="u7" className="ax_default image">
            <img id="u7_img" className="img " src="images/welcome/u7.png" />
            <div id="u7_text" className="text " style={style_display_none_visibility_hidden}>
              <p></p>
            </div>
          </div>
          <div id="u8" className="ax_default box_1">
            <img id="u8_img" className="img " src="images/welcome/u8.svg" />
            <div id="u8_text" className="text " style={style_display_none_visibility_hidden}>
              <p></p>
            </div>
          </div>
          <div id="u13" className="ax_default heading_1">
            <div id="u13_div" className=""></div>
            <div id="u13_text" className="text ">
              <p><span>Earn your cash back</span></p>
            </div>
          </div>
          <div id="u14" className="ax_default heading_3">
            <div id="u14_div" className=""></div>
            <div id="u14_text" className="text ">
              <p><span>When you upload your review , you could get funded base on your attention</span></p>
            </div>
          </div>
        </div>
      </div>
  }

  if (match.params.tab === 'tab3') {
    console.log("Welcome333");
    content =
      <div id="u6_state0" className="panel_state" data-label="State1" >
        <div id="u6_state0_content" className="panel_state_content">
          <div id="u7" className="ax_default image">
            <img id="u7_img" className="img " src="images/welcome/u7.png" />
            <div id="u7_text" className="text " style={style_display_none_visibility_hidden}>
              <p></p>
            </div>
          </div>
          <div id="u8" className="ax_default box_1">
            <img id="u8_img" className="img " src="images/welcome/u8.svg" />
            <div id="u8_text" className="text " style={style_display_none_visibility_hidden}>
              <p></p>
            </div>
          </div>
          <div id="u17" className="ax_default">
            <div id="u17_state0" className="panel_state" data-label="State1" >
              <div id="u17_state0_content" className="panel_state_content">
                <div id="u18" className="ax_default button">
                  <div id="u18_div" className=""></div>
                  <div id="u18_text" className="text ">
                  <IonRouterLink href="/main">
                    <p><span>Get Start</span></p>
                    </IonRouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="u19" className="ax_default heading_1">
            <div id="u19_div" className=""></div>
            <div id="u19_text" className="text ">
              <p><span>No matter where you dine in, get rewarded for choosing plants over meat!</span></p>
            </div>
          </div>
        </div>
      </div>
  }

  return (
    <IonPage>
      <IonContent>
        <div id="base" className="">
          <div id="u6" className="ax_default">
            {content}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Welcome;
