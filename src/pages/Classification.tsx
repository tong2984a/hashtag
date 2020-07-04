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
import '../theme/files/classification/styles.css';
import { RouteComponentProps } from "react-router-dom";

const style_display_none_visibility_hidden: CSSProperties = {
  display: 'none',
  visibility: 'hidden'
}

const style_visibility_hidden: CSSProperties = {
  visibility: 'hidden'
}

interface ClassificationPageProps extends RouteComponentProps<{
  tab: string;
}> { }

const Classification: React.FC<ClassificationPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent>

          <div id="base" className="">


            <div id="u485" className="ax_default box_1">
              <img id="u485_img" className="img " src="images/classification/u485.svg"/>
              <div id="u485_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u486" className="ax_default box_1">
              <img id="u486_img" className="img " src="images/main/u113.svg"/>
              <div id="u486_text" className="text ">
                <p><span>&nbsp;</span></p>
              </div>
            </div>


            <div id="u487" className="ax_default image">
              <img id="u487_img" className="img " src="images/first/u5.png"/>
              <div id="u487_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u488" className="ax_default image">
            <IonRouterLink href="/main">
              <img id="u488_img" className="img " src="images/map/u192.svg"/>
              <div id="u488_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
              </IonRouterLink>
            </div>


            <div id="u489" className="ax_default">
              <div id="u489_state0" className="panel_state" data-label="State1" >
                <div id="u489_state0_content" className="panel_state_content">


                  <div id="u490" className="ax_default new_style">
                    <img id="u490_img" className="img " src="images/classification/u490.svg"/>
                    <div id="u490_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u491" className="ax_default new_style1">
                    <div id="u491_div" className=""></div>
                    <div id="u491_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u492" className="ax_default new_style">
                    <img id="u492_img" className="img " src="images/classification/u490.svg"/>
                    <div id="u492_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u493" className="ax_default new_style1">
                    <div id="u493_div" className=""></div>
                    <div id="u493_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u494" className="ax_default new_style">
                    <img id="u494_img" className="img " src="images/classification/u490.svg"/>
                    <div id="u494_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u495" className="ax_default new_style1">
                    <div id="u495_div" className=""></div>
                    <div id="u495_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u496" className="ax_default new_style">
                    <img id="u496_img" className="img " src="images/classification/u490.svg"/>
                    <div id="u496_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u497" className="ax_default new_style">
                    <img id="u497_img" className="img " src="images/classification/u490.svg"/>
                    <div id="u497_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u498" className="ax_default" data-left="0" data-top="30" data-width="234" data-height="234">


                    <div id="u499" className="ax_default box_3">
                      <div id="u499_div" className=""></div>
                      <div id="u499_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u500" className="ax_default image">
                      <img id="u500_img" className="img " src="images/classification/u500.svg"/>
                      <div id="u500_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u501" className="ax_default" data-left="9" data-top="221" data-width="85" data-height="20">


                      <div id="u502" className="ax_default heading_3">
                        <div id="u502_div" className=""></div>
                        <div id="u502_text" className="text ">
                          <p><span>Restaurant Name</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u503" className="ax_default" data-left="30" data-top="250" data-width="10" data-height="14">


                      <div id="u504" className="ax_default heading_3">
                        <div id="u504_div" className=""></div>
                        <div id="u504_text" className="text ">
                          <p><span>123</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u505" className="ax_default image">
                      <img id="u505_img" className="img " src="images/main/u42.png"/>
                      <div id="u505_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u506" className="ax_default image">
                      <img id="u506_img" className="img " src="images/main/u42.png"/>
                      <div id="u506_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u507" className="ax_default image">
                      <img id="u507_img" className="img " src="images/main/u42.png"/>
                      <div id="u507_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u508" className="ax_default image">
                      <img id="u508_img" className="img " src="images/main/u42.png"/>
                      <div id="u508_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>


                  <div id="u509" className="ax_default" data-left="252" data-top="30" data-width="234" data-height="234">


                    <div id="u510" className="ax_default box_3">
                      <img id="u510_img" className="img " src="images/classification/u510.svg"/>
                      <div id="u510_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u511" className="ax_default image">
                      <img id="u511_img" className="img " src="images/classification/u511.svg"/>
                      <div id="u511_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u512" className="ax_default" data-left="261" data-top="221" data-width="85" data-height="20">


                      <div id="u513" className="ax_default heading_3">
                        <div id="u513_div" className=""></div>
                        <div id="u513_text" className="text ">
                          <p><span>Restaurant Name</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u514" className="ax_default" data-left="282" data-top="250" data-width="7" data-height="14">


                      <div id="u515" className="ax_default heading_3">
                        <div id="u515_div" className=""></div>
                        <div id="u515_text" className="text ">
                          <p><span>41</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u516" className="ax_default image">
                      <img id="u516_img" className="img " src="images/main/u42.png"/>
                      <div id="u516_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u517" className="ax_default image">
                      <img id="u517_img" className="img " src="images/main/u42.png"/>
                      <div id="u517_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>


                  <div id="u518" className="ax_default" data-left="504" data-top="30" data-width="234" data-height="234">


                    <div id="u519" className="ax_default box_3">
                      <img id="u519_img" className="img " src="images/classification/u519.svg"/>
                      <div id="u519_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u520" className="ax_default image">
                      <img id="u520_img" className="img " src="images/classification/u511.svg"/>
                      <div id="u520_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u521" className="ax_default" data-left="512" data-top="221" data-width="85" data-height="20">


                      <div id="u522" className="ax_default heading_3">
                        <div id="u522_div" className=""></div>
                        <div id="u522_text" className="text ">
                          <p><span>Restaurant Name</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u523" className="ax_default" data-left="534" data-top="250" data-width="9" data-height="14">


                      <div id="u524" className="ax_default heading_3">
                        <div id="u524_div" className=""></div>
                        <div id="u524_text" className="text ">
                          <p><span>66</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u525" className="ax_default image">
                      <img id="u525_img" className="img " src="images/main/u42.png"/>
                      <div id="u525_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u526" className="ax_default image">
                      <img id="u526_img" className="img " src="images/main/u42.png"/>
                      <div id="u526_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u527" className="ax_default image">
                      <img id="u527_img" className="img " src="images/main/u42.png"/>
                      <div id="u527_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>


                  <div id="u528" className="ax_default" data-left="755" data-top="30" data-width="234" data-height="234">


                    <div id="u529" className="ax_default box_3">
                      <img id="u529_img" className="img " src="images/classification/u519.svg"/>
                      <div id="u529_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u530" className="ax_default image">
                      <img id="u530_img" className="img " src="images/classification/u511.svg"/>
                      <div id="u530_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u531" className="ax_default" data-left="764" data-top="221" data-width="85" data-height="20">


                      <div id="u532" className="ax_default heading_3">
                        <div id="u532_div" className=""></div>
                        <div id="u532_text" className="text ">
                          <p><span>Restaurant Name</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u533" className="ax_default" data-left="786" data-top="250" data-width="7" data-height="14">


                      <div id="u534" className="ax_default heading_3">
                        <div id="u534_div" className=""></div>
                        <div id="u534_text" className="text ">
                          <p><span>41</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u535" className="ax_default image">
                      <img id="u535_img" className="img " src="images/main/u42.png"/>
                      <div id="u535_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u536" className="ax_default image">
                      <img id="u536_img" className="img " src="images/main/u42.png"/>
                      <div id="u536_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>


                  <div id="u537" className="ax_default" data-left="1007" data-top="30" data-width="234" data-height="234">


                    <div id="u538" className="ax_default box_3">
                      <img id="u538_img" className="img " src="images/classification/u538.svg"/>
                      <div id="u538_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u539" className="ax_default image">
                      <img id="u539_img" className="img " src="images/classification/u511.svg"/>
                      <div id="u539_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u540" className="ax_default" data-left="1016" data-top="221" data-width="85" data-height="20">


                      <div id="u541" className="ax_default heading_3">
                        <div id="u541_div" className=""></div>
                        <div id="u541_text" className="text ">
                          <p><span>Restaurant Name</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u542" className="ax_default" data-left="1038" data-top="250" data-width="9" data-height="14">


                      <div id="u543" className="ax_default heading_3">
                        <div id="u543_div" className=""></div>
                        <div id="u543_text" className="text ">
                          <p><span>66</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u544" className="ax_default image">
                      <img id="u544_img" className="img " src="images/main/u42.png"/>
                      <div id="u544_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u545" className="ax_default image">
                      <img id="u545_img" className="img " src="images/main/u42.png"/>
                      <div id="u545_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u546" className="ax_default image">
                      <img id="u546_img" className="img " src="images/main/u42.png"/>
                      <div id="u546_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>


                  <div id="u547" className="ax_default new_style1">
                    <div id="u547_div" className=""></div>
                    <div id="u547_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u548" className="ax_default new_style1">
                    <div id="u548_div" className=""></div>
                    <div id="u548_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u549" className="ax_default" data-left="103" data-top="99" data-width="209" data-height="23">


              <div id="u550" className="ax_default heading_3">
                <div id="u550_div" className=""></div>
                <div id="u550_text" className="text ">
                  <p><span>Suggested restaurant</span></p>
                </div>
              </div>
            </div>


            <div id="u551" className="ax_default">
              <div id="u551_state0" className="panel_state" data-label="State1" >
                <div id="u551_state0_content" className="panel_state_content">


                  <div id="u552" className="ax_default box_1">
                    <div id="u552_div" className=""></div>
                    <div id="u552_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u553" className="ax_default box_1">
                    <div id="u553_div" className=""></div>
                    <div id="u553_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u554" className="ax_default box_1">
                    <img id="u554_img" className="img " src="images/classification/u554.svg"/>
                    <div id="u554_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u555" className="ax_default heading_3">
                    <div id="u555_div" className=""></div>
                    <div id="u555_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u556" className="ax_default box_3">
                    <div id="u556_div" className=""></div>
                    <div id="u556_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u557" className="ax_default heading_3">
                    <div id="u557_div" className=""></div>
                    <div id="u557_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u558" className="ax_default box_3">
                    <div id="u558_div" className=""></div>
                    <div id="u558_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u559" className="ax_default heading_3">
                    <div id="u559_div" className=""></div>
                    <div id="u559_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u560" className="ax_default box_3">
                    <div id="u560_div" className=""></div>
                    <div id="u560_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u561" className="ax_default heading_3">
                    <div id="u561_div" className=""></div>
                    <div id="u561_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u562" className="ax_default heading_3">
                    <div id="u562_div" className=""></div>
                    <div id="u562_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u563" className="ax_default heading_3">
                    <div id="u563_div" className=""></div>
                    <div id="u563_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u564" className="ax_default">
                  </div>


                  <div id="u565" className="ax_default">
                  </div>


                  <div id="u566" className="ax_default">
                  </div>


                  <div id="u567" className="ax_default box_1">
                    <div id="u567_div" className=""></div>
                    <div id="u567_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u568" className="ax_default box_1">
                    <div id="u568_div" className=""></div>
                    <div id="u568_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u569" className="ax_default box_1">
                    <img id="u569_img" className="img " src="images/classification/u554.svg"/>
                    <div id="u569_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u570" className="ax_default heading_3">
                    <div id="u570_div" className=""></div>
                    <div id="u570_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u571" className="ax_default box_3">
                    <div id="u571_div" className=""></div>
                    <div id="u571_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u572" className="ax_default heading_3">
                    <div id="u572_div" className=""></div>
                    <div id="u572_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u573" className="ax_default box_3">
                    <div id="u573_div" className=""></div>
                    <div id="u573_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u574" className="ax_default heading_3">
                    <div id="u574_div" className=""></div>
                    <div id="u574_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u575" className="ax_default box_3">
                    <div id="u575_div" className=""></div>
                    <div id="u575_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u576" className="ax_default heading_3">
                    <div id="u576_div" className=""></div>
                    <div id="u576_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u577" className="ax_default heading_3">
                    <div id="u577_div" className=""></div>
                    <div id="u577_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u578" className="ax_default heading_3">
                    <div id="u578_div" className=""></div>
                    <div id="u578_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u579" className="ax_default">
                  </div>


                  <div id="u580" className="ax_default">
                  </div>


                  <div id="u581" className="ax_default">
                  </div>


                  <div id="u582" className="ax_default box_1">
                    <div id="u582_div" className=""></div>
                    <div id="u582_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u583" className="ax_default box_1">
                    <div id="u583_div" className=""></div>
                    <div id="u583_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u584" className="ax_default box_1">
                    <div id="u584_div" className=""></div>
                    <div id="u584_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u585" className="ax_default box_1">
                    <div id="u585_div" className=""></div>
                    <div id="u585_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u586" className="ax_default box_1">
                    <div id="u586_div" className=""></div>
                    <div id="u586_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u587" className="ax_default box_1">
                    <div id="u587_div" className=""></div>
                    <div id="u587_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u588" className="ax_default" data-left="147" data-top="473" data-width="120" data-height="23">


              <div id="u589" className="ax_default heading_3">
                <div id="u589_div" className=""></div>
                <div id="u589_text" className="text ">
                  <p><span>Food Review</span></p>
                </div>
              </div>
            </div>


            <div id="u590" className="ax_default ax_default_hidden" style={style_display_none_visibility_hidden}>
              <div id="u590_state0" className="panel_state" data-label="State1" >
                <div id="u590_state0_content" className="panel_state_content">


                  <div id="u591" className="ax_default box_1">
                    <img id="u591_img" className="img " src="images/classification/u591.svg"/>
                    <div id="u591_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u592" className="ax_default box_3">
                    <div id="u592_div" className=""></div>
                    <div id="u592_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u593" className="ax_default paragraph">
                    <div id="u593_div" className=""></div>
                    <div id="u593_text" className="text ">
                      <p><span>Regular Restaurant with Vegan / Vegetarian Option</span></p>
                    </div>
                  </div>


                  <div id="u594" className="ax_default heading_3">
                    <div id="u594_div" className=""></div>
                    <div id="u594_text" className="text ">
                      <p><span>VEG</span></p>
                    </div>
                  </div>


                  <div id="u595" className="ax_default image">
                    <div id="u595_div" className=""></div>
                    <div id="u595_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u596" className="ax_default paragraph">
                    <div id="u596_div" className=""></div>
                    <div id="u596_text" className="text ">
                      <p><span>Vegetarian</span></p>
                    </div>
                  </div>


                  <div id="u597" className="ax_default heading_3">
                    <div id="u597_div" className=""></div>
                    <div id="u597_text" className="text ">
                      <p><span>R</span></p>
                    </div>
                  </div>


                  <div id="u598" className="ax_default box_3">
                    <div id="u598_div" className=""></div>
                    <div id="u598_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u599" className="ax_default paragraph">
                    <div id="u599_div" className=""></div>
                    <div id="u599_text" className="text ">
                      <p><span>Vegan</span></p>
                    </div>
                  </div>


                  <div id="u600" className="ax_default heading_3">
                    <div id="u600_div" className=""></div>
                    <div id="u600_text" className="text ">
                      <p><span>V</span></p>
                    </div>
                  </div>


                  <div id="u601" className="ax_default primary_button">
                    <div id="u601_div" className=""></div>
                    <div id="u601_text" className="text ">
                      <p><span>Got it</span></p>
                    </div>
                  </div>


                  <div id="u602" className="ax_default paragraph">
                    <div id="u602_div" className=""></div>
                    <div id="u602_text" className="text ">
                      <p><span>People who wanted to get healthy and started to eat vegetables </span></p>
                    </div>
                  </div>


                  <div id="u603" className="ax_default paragraph">
                    <div id="u603_div" className=""></div>
                    <div id="u603_text" className="text ">
                      <p><span>People who abstaining from the consumption of meat , and may also include abstention from by-products of animal slaughter</span></p>
                    </div>
                  </div>


                  <div id="u604" className="ax_default paragraph">
                    <div id="u604_div" className=""></div>
                    <div id="u604_text" className="text ">
                      <p><span>People who abstaining from the use of animal products</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </IonContent>
    </IonPage>
  );
};
export default Classification;
