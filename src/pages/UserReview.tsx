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
import '../theme/files/user_review/styles.css';
import { RouteComponentProps } from "react-router-dom";

const style_display_none_visibility_hidden: CSSProperties = {
  display: 'none',
  visibility: 'hidden'
}

const style_visibility_hidden: CSSProperties = {
  visibility: 'hidden'
}

interface UserReviewPageProps extends RouteComponentProps<{
  tab: string;
}> { }

const UserReview: React.FC<UserReviewPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent>

          <div id="base" className="">


            <div id="u2288" className="ax_default">
              <div id="u2288_state0" className="panel_state" data-label="State1" >
                <div id="u2288_state0_content" className="panel_state_content">


                  <div id="u2289" className="ax_default" data-left="0" data-top="0" data-width="400" data-height="51">


                    <div id="u2290" className="ax_default image">
                      <img id="u2290_img" className="img " src="images/food_review/u2240.svg"/>
                      <div id="u2290_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2291" className="ax_default line">
                      <img id="u2291_img" className="img " src="images/notification/u195.svg"/>
                      <div id="u2291_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2292" className="ax_default line">
                      <img id="u2292_img" className="img " src="images/notification/u196.svg"/>
                      <div id="u2292_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2293" className="ax_default" data-left="50" data-top="2" data-width="61" data-height="13">


                      <div id="u2294" className="ax_default heading_3">
                        <div id="u2294_div" className=""></div>
                        <div id="u2294_text" className="text ">
                          <p><span>User Name</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2295" className="ax_default" data-left="124" data-top="2" data-width="56" data-height="13">


                      <div id="u2296" className="ax_default heading_3">
                        <div id="u2296_div" className=""></div>
                        <div id="u2296_text" className="text ">
                          <p><span>1 - 1 - 2020</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2297" className="ax_default" data-left="190" data-top="1" data-width="68" data-height="14">


                      <div id="u2298" className="ax_default image">
                        <img id="u2298_img" className="img " src="images/main/u42.png"/>
                        <div id="u2298_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2299" className="ax_default image">
                        <img id="u2299_img" className="img " src="images/main/u42.png"/>
                        <div id="u2299_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2300" className="ax_default image">
                        <img id="u2300_img" className="img " src="images/main/u42.png"/>
                        <div id="u2300_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2301" className="ax_default image">
                        <img id="u2301_img" className="img " src="images/main/u42.png"/>
                        <div id="u2301_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="u2302" className="ax_default" data-left="0" data-top="74" data-width="400" data-height="143">


                    <div id="u2303" className="ax_default image">
                      <img id="u2303_img" className="img " src="images/food_review/u2240.svg"/>
                      <div id="u2303_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2304" className="ax_default line">
                      <img id="u2304_img" className="img " src="images/notification/u203.svg"/>
                      <div id="u2304_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2305" className="ax_default line">
                      <img id="u2305_img" className="img " src="images/notification/u204.svg"/>
                      <div id="u2305_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2306" className="ax_default" data-left="50" data-top="76" data-width="61" data-height="13">


                      <div id="u2307" className="ax_default heading_3">
                        <div id="u2307_div" className=""></div>
                        <div id="u2307_text" className="text ">
                          <p><span>User Name</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2308" className="ax_default" data-left="124" data-top="76" data-width="60" data-height="13">


                      <div id="u2309" className="ax_default heading_3">
                        <div id="u2309_div" className=""></div>
                        <div id="u2309_text" className="text ">
                          <p><span>3 - 3 - 2020</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2310" className="ax_default" data-left="190" data-top="75" data-width="50" data-height="14">


                      <div id="u2311" className="ax_default image">
                        <img id="u2311_img" className="img " src="images/main/u42.png"/>
                        <div id="u2311_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2312" className="ax_default image">
                        <img id="u2312_img" className="img " src="images/main/u42.png"/>
                        <div id="u2312_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2313" className="ax_default image">
                        <img id="u2313_img" className="img " src="images/main/u42.png"/>
                        <div id="u2313_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2314" className="ax_default">
                      <div id="u2314_state0" className="panel_state" data-label="State1" >
                        <div id="u2314_state0_content" className="panel_state_content">


                          <div id="u2315" className="ax_default box_3">
                            <div id="u2315_div" className=""></div>
                            <div id="u2315_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2316" className="ax_default box_3">
                            <div id="u2316_div" className=""></div>
                            <div id="u2316_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2317" className="ax_default box_3">
                            <div id="u2317_div" className=""></div>
                            <div id="u2317_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2318" className="ax_default box_3">
                            <div id="u2318_div" className=""></div>
                            <div id="u2318_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="u2319" className="ax_default" data-left="0" data-top="237" data-width="400" data-height="50">


                    <div id="u2320" className="ax_default" data-left="0" data-top="237" data-width="330" data-height="27">


                      <div id="u2321" className="ax_default" data-left="0" data-top="237" data-width="330" data-height="27">


                        <div id="u2322" className="ax_default image">
                          <img id="u2322_img" className="img " src="images/food_review/u2240.svg"/>
                          <div id="u2322_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u2323" className="ax_default line">
                          <img id="u2323_img" className="img " src="images/notification/u243.svg"/>
                          <div id="u2323_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u2324" className="ax_default" data-left="50" data-top="239" data-width="61" data-height="13">


                          <div id="u2325" className="ax_default heading_3">
                            <div id="u2325_div" className=""></div>
                            <div id="u2325_text" className="text ">
                              <p><span>User Name</span></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2326" className="ax_default" data-left="124" data-top="239" data-width="60" data-height="13">


                          <div id="u2327" className="ax_default heading_3">
                            <div id="u2327_div" className=""></div>
                            <div id="u2327_text" className="text ">
                              <p><span>4 - 7 - 2020</span></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2328" className="ax_default" data-left="190" data-top="238" data-width="32" data-height="14">


                          <div id="u2329" className="ax_default image">
                            <img id="u2329_img" className="img " src="images/main/u42.png"/>
                            <div id="u2329_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2330" className="ax_default image">
                            <img id="u2330_img" className="img " src="images/main/u42.png"/>
                            <div id="u2330_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div id="u2331" className="ax_default line">
                      <img id="u2331_img" className="img " src="images/notification/u203.svg"/>
                      <div id="u2331_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2332" className="ax_default" data-left="0" data-top="309" data-width="400" data-height="50">


                    <div id="u2333" className="ax_default image">
                      <img id="u2333_img" className="img " src="images/food_review/u2240.svg"/>
                      <div id="u2333_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2334" className="ax_default line">
                      <img id="u2334_img" className="img " src="images/notification/u203.svg"/>
                      <div id="u2334_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2335" className="ax_default line">
                      <img id="u2335_img" className="img " src="images/notification/u204.svg"/>
                      <div id="u2335_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2336" className="ax_default" data-left="50" data-top="312" data-width="61" data-height="13">


                      <div id="u2337" className="ax_default heading_3">
                        <div id="u2337_div" className=""></div>
                        <div id="u2337_text" className="text ">
                          <p><span>User Name</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2338" className="ax_default" data-left="124" data-top="312" data-width="60" data-height="13">


                      <div id="u2339" className="ax_default heading_3">
                        <div id="u2339_div" className=""></div>
                        <div id="u2339_text" className="text ">
                          <p><span>3 - 3 - 2020</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2340" className="ax_default" data-left="190" data-top="311" data-width="50" data-height="14">


                      <div id="u2341" className="ax_default image">
                        <img id="u2341_img" className="img " src="images/main/u42.png"/>
                        <div id="u2341_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2342" className="ax_default image">
                        <img id="u2342_img" className="img " src="images/main/u42.png"/>
                        <div id="u2342_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2343" className="ax_default image">
                        <img id="u2343_img" className="img " src="images/main/u42.png"/>
                        <div id="u2343_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="u2344" className="ax_default" data-left="0" data-top="383" data-width="400" data-height="140">


                    <div id="u2345" className="ax_default image">
                      <img id="u2345_img" className="img " src="images/food_review/u2240.svg"/>
                      <div id="u2345_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2346" className="ax_default line">
                      <img id="u2346_img" className="img " src="images/notification/u195.svg"/>
                      <div id="u2346_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2347" className="ax_default line">
                      <img id="u2347_img" className="img " src="images/notification/u196.svg"/>
                      <div id="u2347_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2348" className="ax_default" data-left="50" data-top="386" data-width="61" data-height="13">


                      <div id="u2349" className="ax_default heading_3">
                        <div id="u2349_div" className=""></div>
                        <div id="u2349_text" className="text ">
                          <p><span>User Name</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2350" className="ax_default" data-left="124" data-top="386" data-width="56" data-height="13">


                      <div id="u2351" className="ax_default heading_3">
                        <div id="u2351_div" className=""></div>
                        <div id="u2351_text" className="text ">
                          <p><span>1 - 1 - 2020</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2352" className="ax_default" data-left="190" data-top="384" data-width="68" data-height="14">


                      <div id="u2353" className="ax_default image">
                        <img id="u2353_img" className="img " src="images/main/u42.png"/>
                        <div id="u2353_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2354" className="ax_default image">
                        <img id="u2354_img" className="img " src="images/main/u42.png"/>
                        <div id="u2354_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2355" className="ax_default image">
                        <img id="u2355_img" className="img " src="images/main/u42.png"/>
                        <div id="u2355_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2356" className="ax_default image">
                        <img id="u2356_img" className="img " src="images/main/u42.png"/>
                        <div id="u2356_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2357" className="ax_default">
                      <div id="u2357_state0" className="panel_state" data-label="State1" >
                        <div id="u2357_state0_content" className="panel_state_content">


                          <div id="u2358" className="ax_default box_3">
                            <div id="u2358_div" className=""></div>
                            <div id="u2358_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2359" className="ax_default box_3">
                            <div id="u2359_div" className=""></div>
                            <div id="u2359_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2360" className="ax_default box_3">
                            <div id="u2360_div" className=""></div>
                            <div id="u2360_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2361" className="ax_default box_3">
                            <div id="u2361_div" className=""></div>
                            <div id="u2361_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="u2362" className="ax_default" data-left="0" data-top="543" data-width="400" data-height="50">


                    <div id="u2363" className="ax_default" data-left="0" data-top="543" data-width="330" data-height="27">


                      <div id="u2364" className="ax_default" data-left="0" data-top="543" data-width="330" data-height="27">


                        <div id="u2365" className="ax_default image">
                          <img id="u2365_img" className="img " src="images/food_review/u2240.svg"/>
                          <div id="u2365_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u2366" className="ax_default line">
                          <img id="u2366_img" className="img " src="images/notification/u243.svg"/>
                          <div id="u2366_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u2367" className="ax_default" data-left="50" data-top="545" data-width="61" data-height="13">


                          <div id="u2368" className="ax_default heading_3">
                            <div id="u2368_div" className=""></div>
                            <div id="u2368_text" className="text ">
                              <p><span>User Name</span></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2369" className="ax_default" data-left="124" data-top="545" data-width="60" data-height="13">


                          <div id="u2370" className="ax_default heading_3">
                            <div id="u2370_div" className=""></div>
                            <div id="u2370_text" className="text ">
                              <p><span>4 - 7 - 2020</span></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2371" className="ax_default" data-left="190" data-top="544" data-width="32" data-height="14">


                          <div id="u2372" className="ax_default image">
                            <img id="u2372_img" className="img " src="images/main/u42.png"/>
                            <div id="u2372_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2373" className="ax_default image">
                            <img id="u2373_img" className="img " src="images/main/u42.png"/>
                            <div id="u2373_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div id="u2374" className="ax_default line">
                      <img id="u2374_img" className="img " src="images/notification/u203.svg"/>
                      <div id="u2374_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2375" className="ax_default" data-left="0" data-top="616" data-width="400" data-height="50">


                    <div id="u2376" className="ax_default" data-left="0" data-top="616" data-width="330" data-height="27">


                      <div id="u2377" className="ax_default" data-left="0" data-top="616" data-width="330" data-height="27">


                        <div id="u2378" className="ax_default image">
                          <img id="u2378_img" className="img " src="images/food_review/u2240.svg"/>
                          <div id="u2378_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u2379" className="ax_default line">
                          <img id="u2379_img" className="img " src="images/notification/u243.svg"/>
                          <div id="u2379_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u2380" className="ax_default" data-left="50" data-top="618" data-width="61" data-height="13">


                          <div id="u2381" className="ax_default heading_3">
                            <div id="u2381_div" className=""></div>
                            <div id="u2381_text" className="text ">
                              <p><span>User Name</span></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2382" className="ax_default" data-left="124" data-top="618" data-width="60" data-height="13">


                          <div id="u2383" className="ax_default heading_3">
                            <div id="u2383_div" className=""></div>
                            <div id="u2383_text" className="text ">
                              <p><span>4 - 7 - 2020</span></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2384" className="ax_default" data-left="190" data-top="617" data-width="32" data-height="14">


                          <div id="u2385" className="ax_default image">
                            <img id="u2385_img" className="img " src="images/main/u42.png"/>
                            <div id="u2385_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2386" className="ax_default image">
                            <img id="u2386_img" className="img " src="images/main/u42.png"/>
                            <div id="u2386_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div id="u2387" className="ax_default line">
                      <img id="u2387_img" className="img " src="images/notification/u203.svg"/>
                      <div id="u2387_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2388" className="ax_default" data-left="0" data-top="687" data-width="400" data-height="51">


                    <div id="u2389" className="ax_default image">
                      <img id="u2389_img" className="img " src="images/food_review/u2240.svg"/>
                      <div id="u2389_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2390" className="ax_default line">
                      <img id="u2390_img" className="img " src="images/notification/u195.svg"/>
                      <div id="u2390_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2391" className="ax_default line">
                      <img id="u2391_img" className="img " src="images/notification/u196.svg"/>
                      <div id="u2391_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2392" className="ax_default" data-left="50" data-top="689" data-width="61" data-height="13">


                      <div id="u2393" className="ax_default heading_3">
                        <div id="u2393_div" className=""></div>
                        <div id="u2393_text" className="text ">
                          <p><span>User Name</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2394" className="ax_default" data-left="124" data-top="689" data-width="56" data-height="13">


                      <div id="u2395" className="ax_default heading_3">
                        <div id="u2395_div" className=""></div>
                        <div id="u2395_text" className="text ">
                          <p><span>1 - 1 - 2020</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2396" className="ax_default" data-left="190" data-top="688" data-width="68" data-height="14">


                      <div id="u2397" className="ax_default image">
                        <img id="u2397_img" className="img " src="images/main/u42.png"/>
                        <div id="u2397_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2398" className="ax_default image">
                        <img id="u2398_img" className="img " src="images/main/u42.png"/>
                        <div id="u2398_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2399" className="ax_default image">
                        <img id="u2399_img" className="img " src="images/main/u42.png"/>
                        <div id="u2399_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2400" className="ax_default image">
                        <img id="u2400_img" className="img " src="images/main/u42.png"/>
                        <div id="u2400_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="u2401" className="ax_default" data-left="0" data-top="761" data-width="400" data-height="143">


                    <div id="u2402" className="ax_default image">
                      <img id="u2402_img" className="img " src="images/food_review/u2240.svg"/>
                      <div id="u2402_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2403" className="ax_default line">
                      <img id="u2403_img" className="img " src="images/notification/u203.svg"/>
                      <div id="u2403_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2404" className="ax_default line">
                      <img id="u2404_img" className="img " src="images/notification/u204.svg"/>
                      <div id="u2404_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2405" className="ax_default" data-left="50" data-top="763" data-width="61" data-height="13">


                      <div id="u2406" className="ax_default heading_3">
                        <div id="u2406_div" className=""></div>
                        <div id="u2406_text" className="text ">
                          <p><span>User Name</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2407" className="ax_default" data-left="124" data-top="763" data-width="60" data-height="13">


                      <div id="u2408" className="ax_default heading_3">
                        <div id="u2408_div" className=""></div>
                        <div id="u2408_text" className="text ">
                          <p><span>3 - 3 - 2020</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2409" className="ax_default" data-left="190" data-top="762" data-width="50" data-height="14">


                      <div id="u2410" className="ax_default image">
                        <img id="u2410_img" className="img " src="images/main/u42.png"/>
                        <div id="u2410_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2411" className="ax_default image">
                        <img id="u2411_img" className="img " src="images/main/u42.png"/>
                        <div id="u2411_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2412" className="ax_default image">
                        <img id="u2412_img" className="img " src="images/main/u42.png"/>
                        <div id="u2412_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2413" className="ax_default">
                      <div id="u2413_state0" className="panel_state" data-label="State1" >
                        <div id="u2413_state0_content" className="panel_state_content">


                          <div id="u2414" className="ax_default box_3">
                            <div id="u2414_div" className=""></div>
                            <div id="u2414_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2415" className="ax_default box_3">
                            <div id="u2415_div" className=""></div>
                            <div id="u2415_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2416" className="ax_default box_3">
                            <div id="u2416_div" className=""></div>
                            <div id="u2416_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2417" className="ax_default box_3">
                            <div id="u2417_div" className=""></div>
                            <div id="u2417_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="u2418" className="ax_default" data-left="0" data-top="924" data-width="400" data-height="50">


                    <div id="u2419" className="ax_default" data-left="0" data-top="924" data-width="330" data-height="27">


                      <div id="u2420" className="ax_default" data-left="0" data-top="924" data-width="330" data-height="27">


                        <div id="u2421" className="ax_default image">
                          <img id="u2421_img" className="img " src="images/food_review/u2240.svg"/>
                          <div id="u2421_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u2422" className="ax_default line">
                          <img id="u2422_img" className="img " src="images/notification/u243.svg"/>
                          <div id="u2422_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u2423" className="ax_default" data-left="50" data-top="926" data-width="61" data-height="13">


                          <div id="u2424" className="ax_default heading_3">
                            <div id="u2424_div" className=""></div>
                            <div id="u2424_text" className="text ">
                              <p><span>User Name</span></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2425" className="ax_default" data-left="124" data-top="926" data-width="60" data-height="13">


                          <div id="u2426" className="ax_default heading_3">
                            <div id="u2426_div" className=""></div>
                            <div id="u2426_text" className="text ">
                              <p><span>4 - 7 - 2020</span></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2427" className="ax_default" data-left="190" data-top="925" data-width="32" data-height="14">


                          <div id="u2428" className="ax_default image">
                            <img id="u2428_img" className="img " src="images/main/u42.png"/>
                            <div id="u2428_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2429" className="ax_default image">
                            <img id="u2429_img" className="img " src="images/main/u42.png"/>
                            <div id="u2429_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div id="u2430" className="ax_default line">
                      <img id="u2430_img" className="img " src="images/notification/u203.svg"/>
                      <div id="u2430_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2431" className="ax_default" data-left="0" data-top="1001" data-width="400" data-height="50">


                    <div id="u2432" className="ax_default image">
                      <img id="u2432_img" className="img " src="images/food_review/u2240.svg"/>
                      <div id="u2432_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2433" className="ax_default line">
                      <img id="u2433_img" className="img " src="images/notification/u203.svg"/>
                      <div id="u2433_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2434" className="ax_default line">
                      <img id="u2434_img" className="img " src="images/notification/u204.svg"/>
                      <div id="u2434_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2435" className="ax_default" data-left="50" data-top="1004" data-width="61" data-height="13">


                      <div id="u2436" className="ax_default heading_3">
                        <div id="u2436_div" className=""></div>
                        <div id="u2436_text" className="text ">
                          <p><span>User Name</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2437" className="ax_default" data-left="124" data-top="1004" data-width="60" data-height="13">


                      <div id="u2438" className="ax_default heading_3">
                        <div id="u2438_div" className=""></div>
                        <div id="u2438_text" className="text ">
                          <p><span>3 - 3 - 2020</span></p>
                        </div>
                      </div>
                    </div>


                    <div id="u2439" className="ax_default" data-left="190" data-top="1003" data-width="50" data-height="14">


                      <div id="u2440" className="ax_default image">
                        <img id="u2440_img" className="img " src="images/main/u42.png"/>
                        <div id="u2440_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2441" className="ax_default image">
                        <img id="u2441_img" className="img " src="images/main/u42.png"/>
                        <div id="u2441_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u2442" className="ax_default image">
                        <img id="u2442_img" className="img " src="images/main/u42.png"/>
                        <div id="u2442_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="u2443" className="ax_default">
                    <div id="u2443_state0" className="panel_state" data-label="State1" >
                      <div id="u2443_state0_content" className="panel_state_content">


                        <div id="u2444" className="ax_default" data-left="0" data-top="0" data-width="39" data-height="39">


                          <div id="u2445" className="ax_default ellipse">
                            <img id="u2445_img" className="img " src="images/notification/u299.svg"/>
                            <div id="u2445_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2446" className="ax_default shape">
                            <img id="u2446_img" className="img " src="images/notification/u300.svg"/>
                            <div id="u2446_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u2447" className="ax_default box_1">
              <img id="u2447_img" className="img " src="images/main/u113.svg"/>
              <div id="u2447_text" className="text ">
                <p><span>&nbsp;</span></p>
              </div>
            </div>


            <div id="u2448" className="ax_default image">
              <img id="u2448_img" className="img " src="images/first/u5.png"/>
              <div id="u2448_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2449" className="ax_default image">
            <IonRouterLink href="/user_review">
              <img id="u2449_img" className="img " src="images/restaurant_review/u2182.svg"/>
              <div id="u2449_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
              </IonRouterLink>
            </div>
          </div>
      </IonContent>
    </IonPage>
  );
};
export default UserReview;
