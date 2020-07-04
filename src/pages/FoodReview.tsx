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
import '../theme/files/food_review/styles.css';
import { RouteComponentProps } from "react-router-dom";

const style_display_none_visibility_hidden: CSSProperties = {
  display: 'none',
  visibility: 'hidden'
}

const style_visibility_hidden: CSSProperties = {
  visibility: 'hidden'
}

interface FoodReviewPageProps extends RouteComponentProps<{
  tab: string;
}> { }

const FoodReview: React.FC<FoodReviewPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent>

          <div id="base" className="">


            <div id="u2183" className="ax_default" data-label="Food Pic">
              <div id="u2183_state0" className="panel_state" data-label="State1" >
                <div id="u2183_state0_content" className="panel_state_content">


                  <div id="u2184" className="ax_default box_3">
                    <div id="u2184_div" className=""></div>
                    <div id="u2184_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u2183_state1" className="panel_state" data-label="State2" style={style_visibility_hidden}>
                <div id="u2183_state1_content" className="panel_state_content">


                  <div id="u2185" className="ax_default box_2">
                    <div id="u2185_div" className=""></div>
                    <div id="u2185_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u2183_state2" className="panel_state" data-label="State3" style={style_visibility_hidden}>
                <div id="u2183_state2_content" className="panel_state_content">


                  <div id="u2186" className="ax_default box_3">
                    <div id="u2186_div" className=""></div>
                    <div id="u2186_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u2187" className="ax_default box_1">
              <img id="u2187_img" className="img " src="images/main/u113.svg"/>
              <div id="u2187_text" className="text ">
                <p><span>&nbsp;</span></p>
              </div>
            </div>


            <div id="u2188" className="ax_default image">
              <img id="u2188_img" className="img " src="images/first/u5.png"/>
              <div id="u2188_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2189" className="ax_default image">
            <IonRouterLink href="/restaurant_review">
              <img id="u2189_img" className="img " src="images/food_review/u2189.svg"/>
              <div id="u2189_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
              </IonRouterLink>
            </div>


            <div id="u2190" className="ax_default" data-label="Silding bar">
              <div id="u2190_state0" className="panel_state" data-label="State1" >
                <div id="u2190_state0_content" className="panel_state_content">


                  <div id="u2191" className="ax_default box_3">
                    <div id="u2191_div" className=""></div>
                    <div id="u2191_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2192" className="ax_default box_3">
                    <div id="u2192_div" className=""></div>
                    <div id="u2192_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2193" className="ax_default box_3">
                    <div id="u2193_div" className=""></div>
                    <div id="u2193_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u2190_state1" className="panel_state" data-label="State2" style={style_visibility_hidden}>
                <div id="u2190_state1_content" className="panel_state_content">


                  <div id="u2194" className="ax_default box_3">
                    <div id="u2194_div" className=""></div>
                    <div id="u2194_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2195" className="ax_default box_3">
                    <div id="u2195_div" className=""></div>
                    <div id="u2195_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2196" className="ax_default box_3">
                    <div id="u2196_div" className=""></div>
                    <div id="u2196_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u2190_state2" className="panel_state" data-label="State3" style={style_visibility_hidden}>
                <div id="u2190_state2_content" className="panel_state_content">


                  <div id="u2197" className="ax_default box_3">
                    <div id="u2197_div" className=""></div>
                    <div id="u2197_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2198" className="ax_default box_3">
                    <div id="u2198_div" className=""></div>
                    <div id="u2198_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2199" className="ax_default box_3">
                    <div id="u2199_div" className=""></div>
                    <div id="u2199_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u2200" className="ax_default heading_3">
              <div id="u2200_div" className=""></div>
              <div id="u2200_text" className="text ">
                <p><span>9 - 8 - 2020 </span></p>
              </div>
            </div>


            <div id="u2201" className="ax_default image">
              <img id="u2201_img" className="img " src="images/food_review/u2201.svg"/>
              <div id="u2201_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2202" className="ax_default heading_3">
              <div id="u2202_div" className=""></div>
              <div id="u2202_text" className="text ">
                <p><span>Review Heading</span></p>
              </div>
            </div>


            <div id="u2203" className="ax_default box_1">
              <img id="u2203_img" className="img " src="images/food_review/u2203.svg"/>
              <div id="u2203_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2204" className="ax_default">
              <div id="u2204_state0" className="panel_state" data-label="State1" >
                <div id="u2204_state0_content" className="panel_state_content">


                  <div id="u2205" className="ax_default" data-left="0" data-top="0" data-width="108" data-height="17">


                    <div id="u2206" className="ax_default image">
                      <img id="u2206_img" className="img " src="images/main/u42.png"/>
                      <div id="u2206_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2207" className="ax_default image">
                      <img id="u2207_img" className="img " src="images/main/u42.png"/>
                      <div id="u2207_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2208" className="ax_default image">
                      <img id="u2208_img" className="img " src="images/main/u42.png"/>
                      <div id="u2208_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2209" className="ax_default image">
                      <img id="u2209_img" className="img " src="images/main/u42.png"/>
                      <div id="u2209_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2210" className="ax_default image">
                      <img id="u2210_img" className="img " src="images/food_review/u2210.svg"/>
                      <div id="u2210_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u2204_state1" className="panel_state" data-label="State2" style={style_visibility_hidden}>
                <div id="u2204_state1_content" className="panel_state_content">


                  <div id="u2211" className="ax_default" data-left="0" data-top="0" data-width="108" data-height="17">


                    <div id="u2212" className="ax_default image">
                      <img id="u2212_img" className="img " src="images/main/u42.png"/>
                      <div id="u2212_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2213" className="ax_default image">
                      <img id="u2213_img" className="img " src="images/main/u42.png"/>
                      <div id="u2213_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2214" className="ax_default image">
                      <img id="u2214_img" className="img " src="images/main/u42.png"/>
                      <div id="u2214_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2215" className="ax_default image">
                      <img id="u2215_img" className="img " src="images/food_review/u2210.svg"/>
                      <div id="u2215_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2216" className="ax_default image">
                      <img id="u2216_img" className="img " src="images/food_review/u2210.svg"/>
                      <div id="u2216_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u2204_state2" className="panel_state" data-label="State3" style={style_visibility_hidden}>
                <div id="u2204_state2_content" className="panel_state_content">


                  <div id="u2217" className="ax_default" data-left="0" data-top="0" data-width="108" data-height="17">


                    <div id="u2218" className="ax_default image">
                      <img id="u2218_img" className="img " src="images/main/u42.png"/>
                      <div id="u2218_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2219" className="ax_default image">
                      <img id="u2219_img" className="img " src="images/main/u42.png"/>
                      <div id="u2219_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2220" className="ax_default image">
                      <img id="u2220_img" className="img " src="images/main/u42.png"/>
                      <div id="u2220_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2221" className="ax_default image">
                      <img id="u2221_img" className="img " src="images/main/u42.png"/>
                      <div id="u2221_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2222" className="ax_default image">
                      <img id="u2222_img" className="img " src="images/food_review/u2210.svg"/>
                      <div id="u2222_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u2223" className="ax_default line">
              <img id="u2223_img" className="img " src="images/food_review/u2223.svg"/>
              <div id="u2223_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2224" className="ax_default line">
              <img id="u2224_img" className="img " src="images/food_review/u2223.svg"/>
              <div id="u2224_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2225" className="ax_default line">
              <img id="u2225_img" className="img " src="images/food_review/u2223.svg"/>
              <div id="u2225_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2226" className="ax_default line">
              <img id="u2226_img" className="img " src="images/food_review/u2226.svg"/>
              <div id="u2226_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2227" className="ax_default line">
              <img id="u2227_img" className="img " src="images/food_review/u2223.svg"/>
              <div id="u2227_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2228" className="ax_default line">
              <img id="u2228_img" className="img " src="images/food_review/u2223.svg"/>
              <div id="u2228_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2229" className="ax_default line">
              <img id="u2229_img" className="img " src="images/food_review/u2229.svg"/>
              <div id="u2229_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2230" className="ax_default line">
              <img id="u2230_img" className="img " src="images/food_review/u2230.svg"/>
              <div id="u2230_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2231" className="ax_default line">
              <img id="u2231_img" className="img " src="images/food_review/u2231.svg"/>
              <div id="u2231_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2232" className="ax_default line">
              <img id="u2232_img" className="img " src="images/food_review/u2232.svg"/>
              <div id="u2232_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2233" className="ax_default line">
              <img id="u2233_img" className="img " src="images/food_review/u2233.svg"/>
              <div id="u2233_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2234" className="ax_default line">
              <img id="u2234_img" className="img " src="images/food_review/u2230.svg"/>
              <div id="u2234_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2235" className="ax_default image">
              <img id="u2235_img" className="img " src="images/food_review/u2235.svg"/>
              <div id="u2235_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2236" className="ax_default image">
              <img id="u2236_img" className="img " src="images/food_review/u2236.png"/>
              <div id="u2236_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2237" className="ax_default line">
              <img id="u2237_img" className="img " src="images/food_review/u2237.svg"/>
              <div id="u2237_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2238" className="ax_default heading_3">
              <div id="u2238_div" className=""></div>
              <div id="u2238_text" className="text ">
                <p><span>5 Comments</span></p>
              </div>
            </div>


            <div id="u2239" className="ax_default ax_default_hidden" style={style_display_none_visibility_hidden}>
              <div id="u2239_state0" className="panel_state" data-label="State1" >
                <div id="u2239_state0_content" className="panel_state_content">


                  <div id="u2240" className="ax_default image">
                    <img id="u2240_img" className="img " src="images/food_review/u2240.svg"/>
                    <div id="u2240_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2241" className="ax_default line">
                    <img id="u2241_img" className="img " src="images/food_review/u2241.svg"/>
                    <div id="u2241_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2242" className="ax_default line">
                    <img id="u2242_img" className="img " src="images/food_review/u2242.svg"/>
                    <div id="u2242_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2243" className="ax_default" data-left="50" data-top="3" data-width="61" data-height="13">


                    <div id="u2244" className="ax_default heading_3">
                      <div id="u2244_div" className=""></div>
                      <div id="u2244_text" className="text ">
                        <p><span>User Name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2245" className="ax_default" data-left="124" data-top="3" data-width="60" data-height="13">


                    <div id="u2246" className="ax_default heading_3">
                      <div id="u2246_div" className=""></div>
                      <div id="u2246_text" className="text ">
                        <p><span>3 - 3 - 2020</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2247" className="ax_default image">
                    <img id="u2247_img" className="img " src="images/food_review/u2240.svg"/>
                    <div id="u2247_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2248" className="ax_default line">
                    <img id="u2248_img" className="img " src="images/food_review/u2248.svg"/>
                    <div id="u2248_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2249" className="ax_default" data-left="50" data-top="71" data-width="61" data-height="13">


                    <div id="u2250" className="ax_default heading_3">
                      <div id="u2250_div" className=""></div>
                      <div id="u2250_text" className="text ">
                        <p><span>User Name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2251" className="ax_default" data-left="124" data-top="71" data-width="60" data-height="13">


                    <div id="u2252" className="ax_default heading_3">
                      <div id="u2252_div" className=""></div>
                      <div id="u2252_text" className="text ">
                        <p><span>3 - 3 - 2020</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2253" className="ax_default line">
                    <img id="u2253_img" className="img " src="images/food_review/u2241.svg"/>
                    <div id="u2253_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2254" className="ax_default image">
                    <img id="u2254_img" className="img " src="images/food_review/u2240.svg"/>
                    <div id="u2254_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2255" className="ax_default line">
                    <img id="u2255_img" className="img " src="images/food_review/u2255.svg"/>
                    <div id="u2255_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2256" className="ax_default" data-left="50" data-top="139" data-width="61" data-height="13">


                    <div id="u2257" className="ax_default heading_3">
                      <div id="u2257_div" className=""></div>
                      <div id="u2257_text" className="text ">
                        <p><span>User Name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2258" className="ax_default" data-left="124" data-top="139" data-width="60" data-height="13">


                    <div id="u2259" className="ax_default heading_3">
                      <div id="u2259_div" className=""></div>
                      <div id="u2259_text" className="text ">
                        <p><span>3 - 3 - 2020</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2260" className="ax_default line">
                    <img id="u2260_img" className="img " src="images/food_review/u2241.svg"/>
                    <div id="u2260_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2261" className="ax_default image">
                    <img id="u2261_img" className="img " src="images/food_review/u2240.svg"/>
                    <div id="u2261_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2262" className="ax_default line">
                    <img id="u2262_img" className="img " src="images/notification/u204.svg"/>
                    <div id="u2262_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2263" className="ax_default" data-left="50" data-top="207" data-width="61" data-height="13">


                    <div id="u2264" className="ax_default heading_3">
                      <div id="u2264_div" className=""></div>
                      <div id="u2264_text" className="text ">
                        <p><span>User Name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2265" className="ax_default" data-left="124" data-top="207" data-width="60" data-height="13">


                    <div id="u2266" className="ax_default heading_3">
                      <div id="u2266_div" className=""></div>
                      <div id="u2266_text" className="text ">
                        <p><span>3 - 3 - 2020</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2267" className="ax_default line">
                    <img id="u2267_img" className="img " src="images/food_review/u2241.svg"/>
                    <div id="u2267_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2268" className="ax_default image">
                    <img id="u2268_img" className="img " src="images/food_review/u2240.svg"/>
                    <div id="u2268_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2269" className="ax_default line">
                    <img id="u2269_img" className="img " src="images/food_review/u2269.svg"/>
                    <div id="u2269_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2270" className="ax_default" data-left="50" data-top="274" data-width="61" data-height="13">


                    <div id="u2271" className="ax_default heading_3">
                      <div id="u2271_div" className=""></div>
                      <div id="u2271_text" className="text ">
                        <p><span>User Name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2272" className="ax_default" data-left="124" data-top="274" data-width="60" data-height="13">


                    <div id="u2273" className="ax_default heading_3">
                      <div id="u2273_div" className=""></div>
                      <div id="u2273_text" className="text ">
                        <p><span>3 - 3 - 2020</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2274" className="ax_default line">
                    <img id="u2274_img" className="img " src="images/food_review/u2274.svg"/>
                    <div id="u2274_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u2275" className="ax_default ax_default_hidden" data-label="35" style={style_display_none_visibility_hidden}>
              <div id="u2275_state0" className="panel_state" data-label="State1" >
                <div id="u2275_state0_content" className="panel_state_content">


                  <div id="u2276" className="ax_default" data-left="2" data-top="7" data-width="47" data-height="52">


                    <div id="u2277" className="ax_default box_1">
                      <img id="u2277_img" className="img " src="images/food_review/u2277.svg"/>
                      <div id="u2277_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2278" className="ax_default heading_3">
                      <div id="u2278_div" className=""></div>
                      <div id="u2278_text" className="text ">
                        <p><span>35</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u2279" className="ax_default heading_3">
              <div id="u2279_div" className=""></div>
              <div id="u2279_text" className="text ">
                <p><span>#</span></p>
              </div>
            </div>


            <div id="u2280" className="ax_default heading_3">
              <div id="u2280_div" className=""></div>
              <div id="u2280_text" className="text ">
                <p><span>#</span></p>
              </div>
            </div>


            <div id="u2281" className="ax_default heading_3">
              <div id="u2281_div" className=""></div>
              <div id="u2281_text" className="text ">
                <p><span>#</span></p>
              </div>
            </div>


            <div id="u2282" className="ax_default heading_3">
              <div id="u2282_div" className=""></div>
              <div id="u2282_text" className="text ">
                <p><span>#</span></p>
              </div>
            </div>


            <div id="u2283" className="ax_default heading_3">
              <div id="u2283_div" className=""></div>
              <div id="u2283_text" className="text ">
                <p><span>#</span></p>
              </div>
            </div>


            <div id="u2284" className="ax_default">
              <div id="u2284_state0" className="panel_state" data-label="State1" >
                <div id="u2284_state0_content" className="panel_state_content">


                  <div id="u2285" className="ax_default box_1">
                    <img id="u2285_img" className="img " src="images/food_review/u2285.svg"/>
                    <div id="u2285_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u2284_state1" className="panel_state" data-label="State2" style={style_visibility_hidden}>
                <div id="u2284_state1_content" className="panel_state_content">


                  <div id="u2286" className="ax_default box_1">
                    <img id="u2286_img" className="img " src="images/food_review/u2286.svg"/>
                    <div id="u2286_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u2284_state2" className="panel_state" data-label="State3" style={style_visibility_hidden}>
                <div id="u2284_state2_content" className="panel_state_content">


                  <div id="u2287" className="ax_default box_1">
                    <img id="u2287_img" className="img " src="images/food_review/u2287.svg"/>
                    <div id="u2287_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
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
export default FoodReview;
