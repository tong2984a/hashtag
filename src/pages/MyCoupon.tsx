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
import '../theme/files/my_coupon/styles.css';
import { RouteComponentProps } from "react-router-dom";

const style_display_none_visibility_hidden: CSSProperties = {
  display: 'none',
  visibility: 'hidden'
}

const style_visibility_hidden: CSSProperties = {
  visibility: 'hidden'
}

interface MyCouponPageProps extends RouteComponentProps<{
  tab: string;
}> { }

const MyCoupon: React.FC<MyCouponPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent>

          <div id="base" className="">


            <div id="u301" className="ax_default">
              <div id="u301_state0" className="panel_state" data-label="State1" >
                <div id="u301_state0_content" className="panel_state_content">


                  <div id="u302" className="ax_default" data-left="30" data-top="103" data-width="171" data-height="166">


                    <div id="u303" className="ax_default box_1">
                      <img id="u303_img" className="img " src="images/my_coupon/u303.svg"/>
                      <div id="u303_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u304" className="ax_default box_1">
                      <img id="u304_img" className="img " src="images/my_coupon/u304.svg"/>
                      <div id="u304_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u305" className="ax_default box_1">
                      <img id="u305_img" className="img " src="images/my_coupon/u305.svg"/>
                      <div id="u305_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u306" className="ax_default heading_3">
                      <div id="u306_div" className=""></div>
                      <div id="u306_text" className="text ">
                        <p><span>You got a 10% off coupon</span></p>
                      </div>
                    </div>


                    <div id="u307" className="ax_default primary_button">
                      <div id="u307_div" className=""></div>
                      <div id="u307_text" className="text ">
                        <p><span>Redeem Now</span></p>
                      </div>
                    </div>


                    <div id="u308" className="ax_default heading_3">
                      <div id="u308_div" className=""></div>
                      <div id="u308_text" className="text ">
                        <p><span>From restaurant name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u309" className="ax_default" data-left="223" data-top="103" data-width="171" data-height="166">


                    <div id="u310" className="ax_default box_1">
                      <img id="u310_img" className="img " src="images/my_coupon/u303.svg"/>
                      <div id="u310_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u311" className="ax_default box_1">
                      <img id="u311_img" className="img " src="images/my_coupon/u311.svg"/>
                      <div id="u311_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u312" className="ax_default heading_3">
                      <div id="u312_div" className=""></div>
                      <div id="u312_text" className="text ">
                        <p><span>You got a 5% off coupon</span></p>
                      </div>
                    </div>


                    <div id="u313" className="ax_default primary_button">
                      <div id="u313_div" className=""></div>
                      <div id="u313_text" className="text ">
                        <p><span>Redeem Now</span></p>
                      </div>
                    </div>


                    <div id="u314" className="ax_default heading_3">
                      <div id="u314_div" className=""></div>
                      <div id="u314_text" className="text ">
                        <p><span>From restaurant name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u315" className="ax_default" data-left="30" data-top="299" data-width="171" data-height="166">


                    <div id="u316" className="ax_default box_1">
                      <img id="u316_img" className="img " src="images/my_coupon/u316.svg"/>
                      <div id="u316_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u317" className="ax_default box_1">
                      <img id="u317_img" className="img " src="images/my_coupon/u305.svg"/>
                      <div id="u317_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u318" className="ax_default box_1">
                      <img id="u318_img" className="img " src="images/my_coupon/u303.svg"/>
                      <div id="u318_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u319" className="ax_default primary_button">
                      <div id="u319_div" className=""></div>
                      <div id="u319_text" className="text ">
                        <p><span>Redeem Now</span></p>
                      </div>
                    </div>


                    <div id="u320" className="ax_default heading_3">
                      <div id="u320_div" className=""></div>
                      <div id="u320_text" className="text ">
                        <p><span>You got a $50 coupon</span></p>
                      </div>
                    </div>


                    <div id="u321" className="ax_default heading_3">
                      <div id="u321_div" className=""></div>
                      <div id="u321_text" className="text ">
                        <p><span>From restaurant name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u322" className="ax_default" data-left="223" data-top="299" data-width="171" data-height="166">


                    <div id="u323" className="ax_default box_1">
                      <img id="u323_img" className="img " src="images/my_coupon/u303.svg"/>
                      <div id="u323_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u324" className="ax_default box_1">
                      <img id="u324_img" className="img " src="images/my_coupon/u324.svg"/>
                      <div id="u324_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u325" className="ax_default box_1">
                      <img id="u325_img" className="img " src="images/my_coupon/u305.svg"/>
                      <div id="u325_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u326" className="ax_default heading_3">
                      <div id="u326_div" className=""></div>
                      <div id="u326_text" className="text ">
                        <p><span>You got a 10% off coupon</span></p>
                      </div>
                    </div>


                    <div id="u327" className="ax_default primary_button">
                      <div id="u327_div" className=""></div>
                      <div id="u327_text" className="text ">
                        <p><span>Redeem Now</span></p>
                      </div>
                    </div>


                    <div id="u328" className="ax_default heading_3">
                      <div id="u328_div" className=""></div>
                      <div id="u328_text" className="text ">
                        <p><span>From restaurant name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u329" className="ax_default" data-left="30" data-top="495" data-width="171" data-height="166">


                    <div id="u330" className="ax_default box_1">
                      <img id="u330_img" className="img " src="images/my_coupon/u303.svg"/>
                      <div id="u330_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u331" className="ax_default box_1">
                      <img id="u331_img" className="img " src="images/my_coupon/u331.svg"/>
                      <div id="u331_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u332" className="ax_default heading_3">
                      <div id="u332_div" className=""></div>
                      <div id="u332_text" className="text ">
                        <p><span>You got a 5% off coupon</span></p>
                      </div>
                    </div>


                    <div id="u333" className="ax_default primary_button">
                      <div id="u333_div" className=""></div>
                      <div id="u333_text" className="text ">
                        <p><span>Redeem Now</span></p>
                      </div>
                    </div>


                    <div id="u334" className="ax_default heading_3">
                      <div id="u334_div" className=""></div>
                      <div id="u334_text" className="text ">
                        <p><span>From restaurant name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u335" className="ax_default" data-left="223" data-top="495" data-width="171" data-height="166">


                    <div id="u336" className="ax_default box_1">
                      <img id="u336_img" className="img " src="images/my_coupon/u303.svg"/>
                      <div id="u336_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u337" className="ax_default box_1">
                      <img id="u337_img" className="img " src="images/my_coupon/u304.svg"/>
                      <div id="u337_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u338" className="ax_default box_1">
                      <img id="u338_img" className="img " src="images/my_coupon/u305.svg"/>
                      <div id="u338_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u339" className="ax_default heading_3">
                      <div id="u339_div" className=""></div>
                      <div id="u339_text" className="text ">
                        <p><span>You got a 10% off coupon</span></p>
                      </div>
                    </div>


                    <div id="u340" className="ax_default primary_button">
                      <div id="u340_div" className=""></div>
                      <div id="u340_text" className="text ">
                        <p><span>Redeem Now</span></p>
                      </div>
                    </div>


                    <div id="u341" className="ax_default heading_3">
                      <div id="u341_div" className=""></div>
                      <div id="u341_text" className="text ">
                        <p><span>From restaurant name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u342" className="ax_default" data-left="30" data-top="691" data-width="171" data-height="166">


                    <div id="u343" className="ax_default box_1">
                      <img id="u343_img" className="img " src="images/my_coupon/u303.svg"/>
                      <div id="u343_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u344" className="ax_default box_1">
                      <img id="u344_img" className="img " src="images/my_coupon/u304.svg"/>
                      <div id="u344_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u345" className="ax_default box_1">
                      <img id="u345_img" className="img " src="images/my_coupon/u305.svg"/>
                      <div id="u345_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u346" className="ax_default heading_3">
                      <div id="u346_div" className=""></div>
                      <div id="u346_text" className="text ">
                        <p><span>You got a 10% off coupon</span></p>
                      </div>
                    </div>


                    <div id="u347" className="ax_default primary_button">
                      <div id="u347_div" className=""></div>
                      <div id="u347_text" className="text ">
                        <p><span>Redeem Now</span></p>
                      </div>
                    </div>


                    <div id="u348" className="ax_default heading_3">
                      <div id="u348_div" className=""></div>
                      <div id="u348_text" className="text ">
                        <p><span>From restaurant name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u349" className="ax_default" data-left="223" data-top="691" data-width="171" data-height="166">


                    <div id="u350" className="ax_default box_1">
                      <img id="u350_img" className="img " src="images/my_coupon/u303.svg"/>
                      <div id="u350_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u351" className="ax_default box_1">
                      <img id="u351_img" className="img " src="images/my_coupon/u311.svg"/>
                      <div id="u351_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u352" className="ax_default heading_3">
                      <div id="u352_div" className=""></div>
                      <div id="u352_text" className="text ">
                        <p><span>You got a 5% off coupon</span></p>
                      </div>
                    </div>


                    <div id="u353" className="ax_default primary_button">
                      <div id="u353_div" className=""></div>
                      <div id="u353_text" className="text ">
                        <p><span>Redeem Now</span></p>
                      </div>
                    </div>


                    <div id="u354" className="ax_default heading_3">
                      <div id="u354_div" className=""></div>
                      <div id="u354_text" className="text ">
                        <p><span>From restaurant name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u355" className="ax_default" data-left="30" data-top="887" data-width="171" data-height="166">


                    <div id="u356" className="ax_default box_1">
                      <img id="u356_img" className="img " src="images/my_coupon/u316.svg"/>
                      <div id="u356_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u357" className="ax_default box_1">
                      <img id="u357_img" className="img " src="images/my_coupon/u305.svg"/>
                      <div id="u357_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u358" className="ax_default box_1">
                      <img id="u358_img" className="img " src="images/my_coupon/u303.svg"/>
                      <div id="u358_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u359" className="ax_default primary_button">
                      <div id="u359_div" className=""></div>
                      <div id="u359_text" className="text ">
                        <p><span>Redeem Now</span></p>
                      </div>
                    </div>


                    <div id="u360" className="ax_default heading_3">
                      <div id="u360_div" className=""></div>
                      <div id="u360_text" className="text ">
                        <p><span>You got a $50 coupon</span></p>
                      </div>
                    </div>


                    <div id="u361" className="ax_default heading_3">
                      <div id="u361_div" className=""></div>
                      <div id="u361_text" className="text ">
                        <p><span>From restaurant name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u362" className="ax_default" data-left="223" data-top="887" data-width="171" data-height="166">


                    <div id="u363" className="ax_default box_1">
                      <img id="u363_img" className="img " src="images/my_coupon/u303.svg"/>
                      <div id="u363_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u364" className="ax_default box_1">
                      <img id="u364_img" className="img " src="images/my_coupon/u324.svg"/>
                      <div id="u364_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u365" className="ax_default box_1">
                      <img id="u365_img" className="img " src="images/my_coupon/u305.svg"/>
                      <div id="u365_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u366" className="ax_default heading_3">
                      <div id="u366_div" className=""></div>
                      <div id="u366_text" className="text ">
                        <p><span>You got a 10% off coupon</span></p>
                      </div>
                    </div>


                    <div id="u367" className="ax_default primary_button">
                      <div id="u367_div" className=""></div>
                      <div id="u367_text" className="text ">
                        <p><span>Redeem Now</span></p>
                      </div>
                    </div>


                    <div id="u368" className="ax_default heading_3">
                      <div id="u368_div" className=""></div>
                      <div id="u368_text" className="text ">
                        <p><span>From restaurant name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u369" className="ax_default" data-left="30" data-top="1083" data-width="171" data-height="166">


                    <div id="u370" className="ax_default box_1">
                      <img id="u370_img" className="img " src="images/my_coupon/u303.svg"/>
                      <div id="u370_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u371" className="ax_default box_1">
                      <img id="u371_img" className="img " src="images/my_coupon/u331.svg"/>
                      <div id="u371_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u372" className="ax_default heading_3">
                      <div id="u372_div" className=""></div>
                      <div id="u372_text" className="text ">
                        <p><span>You got a 5% off coupon</span></p>
                      </div>
                    </div>


                    <div id="u373" className="ax_default primary_button">
                      <div id="u373_div" className=""></div>
                      <div id="u373_text" className="text ">
                        <p><span>Redeem Now</span></p>
                      </div>
                    </div>


                    <div id="u374" className="ax_default heading_3">
                      <div id="u374_div" className=""></div>
                      <div id="u374_text" className="text ">
                        <p><span>From restaurant name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u375" className="ax_default" data-left="223" data-top="1083" data-width="171" data-height="166">


                    <div id="u376" className="ax_default box_1">
                      <img id="u376_img" className="img " src="images/my_coupon/u303.svg"/>
                      <div id="u376_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u377" className="ax_default box_1">
                      <img id="u377_img" className="img " src="images/my_coupon/u304.svg"/>
                      <div id="u377_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u378" className="ax_default box_1">
                      <img id="u378_img" className="img " src="images/my_coupon/u305.svg"/>
                      <div id="u378_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u379" className="ax_default heading_3">
                      <div id="u379_div" className=""></div>
                      <div id="u379_text" className="text ">
                        <p><span>You got a 10% off coupon</span></p>
                      </div>
                    </div>


                    <div id="u380" className="ax_default primary_button">
                      <div id="u380_div" className=""></div>
                      <div id="u380_text" className="text ">
                        <p><span>Redeem Now</span></p>
                      </div>
                    </div>


                    <div id="u381" className="ax_default heading_3">
                      <div id="u381_div" className=""></div>
                      <div id="u381_text" className="text ">
                        <p><span>From restaurant name</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u382" className="ax_default box_1">
              <img id="u382_img" className="img " src="images/main/u113.svg"/>
              <div id="u382_text" className="text ">
                <p><span>&nbsp;</span></p>
              </div>
            </div>


            <div id="u383" className="ax_default image">
              <img id="u383_img" className="img " src="images/first/u5.png"/>
              <div id="u383_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u384" className="ax_default image">
            <IonRouterLink href="/plant_based">
              <img id="u384_img" className="img " src="images/map/u192.svg"/>
              <div id="u384_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
              </IonRouterLink>
            </div>


            <div id="u385" className="ax_default ax_default_hidden" style={style_display_none_visibility_hidden} data-left="41" data-top="207" data-width="333" data-height="323">


              <div id="u386" className="ax_default box_1">
                <img id="u386_img" className="img " src="images/my_coupon/u386.svg"/>
                <div id="u386_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u387" className="ax_default box_1">
                <img id="u387_img" className="img " src="images/my_coupon/u387.svg"/>
                <div id="u387_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u388" className="ax_default box_1">
                <img id="u388_img" className="img " src="images/my_coupon/u388.svg"/>
                <div id="u388_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u389" className="ax_default heading_3">
                <div id="u389_div" className=""></div>
                <div id="u389_text" className="text ">
                  <p><span>You got a coupon</span></p>
                </div>
              </div>


              <div id="u390" className="ax_default primary_button">
                <div id="u390_div" className=""></div>
                <div id="u390_text" className="text ">
                  <p><span>Redeem Now</span></p>
                </div>
              </div>


              <div id="u391" className="ax_default heading_3">
                <div id="u391_div" className=""></div>
                <div id="u391_text" className="text ">
                  <p><span>From restaurant name</span></p>
                </div>
              </div>
            </div>
          </div>
      </IonContent>
    </IonPage>
  );
};
export default MyCoupon;
