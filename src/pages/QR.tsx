import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRouterLink
} from '@ionic/react';
import React from 'react';
import { CSSProperties } from "react";
import '../theme/resources/css/axure_rp_page.css';
import '../theme/data/styles.css';
import '../theme/files/qr/styles.css';
import { RouteComponentProps } from "react-router-dom";

const style_display_none_visibility_hidden: CSSProperties = {
  display: 'none',
  visibility: 'hidden'
}

const style_visibility_hidden: CSSProperties = {
  visibility: 'hidden'
}

interface QRPageProps extends RouteComponentProps<{
  tab: string;
}> { }

const QR: React.FC<QRPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent>

          <div id="base" className="">


            <div id="u605" className="ax_default image">
              <img id="u605_img" className="img " src="images/qr/u605.svg"/>
              <div id="u605_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u606" className="ax_default" data-left="0" data-top="0" data-width="414" data-height="736">


              <div id="u607" className="ax_default box_3">
                <div id="u607_div" className=""></div>
                <div id="u607_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u608" className="ax_default box_3">
                <div id="u608_div" className=""></div>
                <div id="u608_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u609" className="ax_default box_3">
                <div id="u609_div" className=""></div>
                <div id="u609_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u610" className="ax_default box_3">
                <div id="u610_div" className=""></div>
                <div id="u610_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>
            </div>


            <div id="u611" className="ax_default shape">
              <img id="u611_img" className="img " src="images/qr/u611.svg"/>
              <div id="u611_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u612" className="ax_default shape">
              <img id="u612_img" className="img " src="images/qr/u612.svg"/>
              <div id="u612_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u613" className="ax_default shape">
              <img id="u613_img" className="img " src="images/qr/u613.svg"/>
              <div id="u613_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u614" className="ax_default shape">
              <img id="u614_img" className="img " src="images/qr/u614.svg"/>
              <div id="u614_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u615" className="ax_default ellipse">
              <img id="u615_img" className="img " src="images/qr/u615.svg"/>
              <div id="u615_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u616" className="ax_default line">
              <img id="u616_img" className="img " src="images/qr/u616.svg"/>
              <div id="u616_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u617" className="ax_default ax_default_hidden" data-label="coupon" style={style_display_none_visibility_hidden}>
              <div id="u617_state0" className="panel_state" data-label="State1" >
                <div id="u617_state0_content" className="panel_state_content">


                  <div id="u618" className="ax_default box_1">
                    <img id="u618_img" className="img " src="images/my_coupon/u386.svg"/>
                    <div id="u618_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u619" className="ax_default box_1">
                    <img id="u619_img" className="img " src="images/my_coupon/u387.svg"/>
                    <div id="u619_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u620" className="ax_default box_1">
                    <img id="u620_img" className="img " src="images/my_coupon/u388.svg"/>
                    <div id="u620_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u621" className="ax_default heading_3">
                    <div id="u621_div" className=""></div>
                    <div id="u621_text" className="text ">
                      <p><span>You got a 10% off coupon</span></p>
                    </div>
                  </div>


                  <div id="u622" className="ax_default primary_button">
                    <div id="u622_div" className=""></div>
                    <div id="u622_text" className="text ">
                      <p><span>Redeem Now</span></p>
                    </div>
                  </div>


                  <div id="u623" className="ax_default heading_3">
                    <div id="u623_div" className=""></div>
                    <div id="u623_text" className="text ">
                      <p><span>From restaurant name</span></p>
                    </div>
                  </div>


                  <div id="u624" className="ax_default image">
                    <img id="u624_img" className="img " src="images/qr/u624.svg"/>
                    <div id="u624_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u617_state1" className="panel_state" data-label="State2" style={style_visibility_hidden}>
                <div id="u617_state1_content" className="panel_state_content">


                  <div id="u625" className="ax_default box_1">
                    <img id="u625_img" className="img " src="images/qr/u625.svg"/>
                    <div id="u625_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u626" className="ax_default box_3">
                    <img id="u626_img" className="img " src="images/qr/u626.svg"/>
                    <div id="u626_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u627" className="ax_default" data-left="176" data-top="83" data-width="141" data-height="20">


                    <div id="u628" className="ax_default heading_3">
                      <div id="u628_div" className=""></div>
                      <div id="u628_text" className="text ">
                        <p><span>Restaurant Name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u629" className="ax_default" data-left="176" data-top="125" data-width="83" data-height="23">


                    <div id="u630" className="ax_default heading_3">
                      <div id="u630_div" className=""></div>
                      <div id="u630_text" className="text ">
                        <p><span>Address</span><span> :</span></p><p><span></span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u631" className="ax_default" data-left="176" data-top="207" data-width="34" data-height="9">


                    <div id="u632" className="ax_default heading_3">
                      <div id="u632_div" className=""></div>
                      <div id="u632_text" className="text ">
                        <p><span>1234 1234</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u633" className="ax_default" data-left="176" data-top="183" data-width="48" data-height="12">


                    <div id="u634" className="ax_default heading_3">
                      <div id="u634_div" className=""></div>
                      <div id="u634_text" className="text ">
                        <p><span>Contact :</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u635" className="ax_default" data-left="176" data-top="195" data-width="65" data-height="9">


                    <div id="u636" className="ax_default heading_3">
                      <div id="u636_div" className=""></div>
                      <div id="u636_text" className="text ">
                        <p><span>Phone number: </span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u637" className="ax_default" data-left="16" data-top="229" data-width="80" data-height="16">


                    <div id="u638" className="ax_default image">
                      <img id="u638_img" className="img " src="images/main/u42.png"/>
                      <div id="u638_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u639" className="ax_default image">
                      <img id="u639_img" className="img " src="images/main/u42.png"/>
                      <div id="u639_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u640" className="ax_default image">
                      <img id="u640_img" className="img " src="images/main/u42.png"/>
                      <div id="u640_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u641" className="ax_default image">
                      <img id="u641_img" className="img " src="images/main/u42.png"/>
                      <div id="u641_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>


                  <div id="u642" className="ax_default image">
                    <img id="u642_img" className="img " src="images/main/u38.png"/>
                    <div id="u642_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u643" className="ax_default" data-left="140" data-top="233" data-width="12" data-height="12">


                    <div id="u644" className="ax_default heading_3">
                      <div id="u644_div" className=""></div>
                      <div id="u644_text" className="text ">
                        <p><span>20</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u645" className="ax_default image">
                    <img id="u645_img" className="img " src="images/qr/u645.svg"/>
                    <div id="u645_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u646" className="ax_default image">
                    <img id="u646_img" className="img " src="images/qr/u646.svg"/>
                    <div id="u646_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u647" className="ax_default line">
                    <img id="u647_img" className="img " src="images/qr/u647.svg"/>
                    <div id="u647_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u648" className="ax_default" data-left="176" data-top="139" data-width="65" data-height="32">


                    <div id="u649" className="ax_default heading_3">
                      <div id="u649_div" className=""></div>
                      <div id="u649_text" className="text ">
                        <p><span>Room 1111, Flat 11</span></p><p><span>111 street , New World</span></p><p><span>Mar</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u650" className="ax_default">
                  </div>


                  <div id="u651" className="ax_default image">
                    <img id="u651_img" className="img " src="images/qr/u624.svg"/>
                    <div id="u651_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u652" className="ax_default image">
            <IonRouterLink href="/main">
              <img id="u652_img" className="img " src="images/qr/u624.svg"/>
              <div id="u652_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
              </IonRouterLink>
            </div>
          </div>
      </IonContent>
    </IonPage>
  );
};
export default QR;
