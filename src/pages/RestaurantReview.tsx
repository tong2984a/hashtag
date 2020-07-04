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
import '../theme/files/restaurant_review/styles.css';
import { RouteComponentProps } from "react-router-dom";

const style_display_none_visibility_hidden: CSSProperties = {
  display: 'none',
  visibility: 'hidden'
}

const style_visibility_hidden: CSSProperties = {
  visibility: 'hidden'
}

interface RestaurantReviewPageProps extends RouteComponentProps<{
  tab: string;
}> { }

const RestaurantReview: React.FC<RestaurantReviewPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent>

          <div id="base" className="">


            <div id="u1936" className="ax_default">
              <div id="u1936_state0" className="panel_state" data-label="State1" >
                <div id="u1936_state0_content" className="panel_state_content">


                  <div id="u1937" className="ax_default box_1">
                    <img id="u1937_img" className="img " src="images/restaurant_review/u1937.svg"/>
                    <div id="u1937_text" className="text ">
                      <p><span>&nbsp;&nbsp; &nbsp;&nbsp; </span></p>
                    </div>
                  </div>


                  <div id="u1938" className="ax_default">
                    <div id="u1938_state0" className="panel_state" data-label="State1" >
                      <div id="u1938_state0_content" className="panel_state_content">


                        <div id="u1939" className="ax_default" data-left="24" data-top="24" data-width="101" data-height="121">


                          <div id="u1940" className="ax_default box_2">
                            <div id="u1940_div" className=""></div>
                            <div id="u1940_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1941" className="ax_default box_3">
                          <IonRouterLink href="food_review">
                            <img id="u1941_img" className="img " src="images/restaurant_review/u1941.svg"/>
                            <div id="u1941_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                            </IonRouterLink>
                          </div>


                          <div id="u1942" className="ax_default image">
                            <img id="u1942_img" className="img " src="images/restaurant_review/u1942.svg"/>
                            <div id="u1942_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1943" className="ax_default heading_3">
                            <div id="u1943_div" className=""></div>
                            <div id="u1943_text" className="text ">
                              <p><span>Username </span></p>
                            </div>
                          </div>


                          <div id="u1944" className="ax_default" data-left="30" data-top="111" data-width="71" data-height="11">


                            <div id="u1945" className="ax_default image">
                              <img id="u1945_img" className="img " src="images/main/u42.png"/>
                              <div id="u1945_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1946" className="ax_default image">
                              <img id="u1946_img" className="img " src="images/main/u42.png"/>
                              <div id="u1946_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1947" className="ax_default image">
                              <img id="u1947_img" className="img " src="images/main/u42.png"/>
                              <div id="u1947_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1948" className="ax_default image">
                              <img id="u1948_img" className="img " src="images/main/u42.png"/>
                              <div id="u1948_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1949" className="ax_default image">
                              <img id="u1949_img" className="img " src="images/main/u42.png"/>
                              <div id="u1949_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div id="u1950" className="ax_default" data-left="140" data-top="24" data-width="101" data-height="121">


                          <div id="u1951" className="ax_default box_2">
                            <div id="u1951_div" className=""></div>
                            <div id="u1951_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1952" className="ax_default box_3">
                          <IonRouterLink href="food_review">
                            <img id="u1952_img" className="img " src="images/restaurant_review/u1952.svg"/>
                            <div id="u1952_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                            </IonRouterLink>
                          </div>


                          <div id="u1953" className="ax_default image">
                            <img id="u1953_img" className="img " src="images/restaurant_review/u1942.svg"/>
                            <div id="u1953_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1954" className="ax_default heading_3">
                            <div id="u1954_div" className=""></div>
                            <div id="u1954_text" className="text ">
                              <p><span>Username </span></p>
                            </div>
                          </div>
                        </div>


                        <div id="u1955" className="ax_default" data-left="255" data-top="24" data-width="101" data-height="121">


                          <div id="u1956" className="ax_default box_2">
                            <div id="u1956_div" className=""></div>
                            <div id="u1956_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1957" className="ax_default box_3">
                          <IonRouterLink href="food_review">
                            <img id="u1957_img" className="img " src="images/restaurant_review/u1957.svg"/>
                            <div id="u1957_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                            </IonRouterLink>
                          </div>


                          <div id="u1958" className="ax_default image">
                            <img id="u1958_img" className="img " src="images/restaurant_review/u1942.svg"/>
                            <div id="u1958_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1959" className="ax_default heading_3">
                            <div id="u1959_div" className=""></div>
                            <div id="u1959_text" className="text ">
                              <p><span>Username </span></p>
                            </div>
                          </div>


                          <div id="u1960" className="ax_default" data-left="261" data-top="111" data-width="71" data-height="11">


                            <div id="u1961" className="ax_default image">
                              <img id="u1961_img" className="img " src="images/main/u42.png"/>
                              <div id="u1961_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1962" className="ax_default image">
                              <img id="u1962_img" className="img " src="images/main/u42.png"/>
                              <div id="u1962_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1963" className="ax_default image">
                              <img id="u1963_img" className="img " src="images/main/u42.png"/>
                              <div id="u1963_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1964" className="ax_default image">
                              <img id="u1964_img" className="img " src="images/main/u42.png"/>
                              <div id="u1964_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1965" className="ax_default image">
                              <img id="u1965_img" className="img " src="images/main/u42.png"/>
                              <div id="u1965_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div id="u1966" className="ax_default" data-left="371" data-top="24" data-width="101" data-height="121">


                          <div id="u1967" className="ax_default box_2">
                            <div id="u1967_div" className=""></div>
                            <div id="u1967_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1968" className="ax_default box_3">
                          <IonRouterLink href="food_review">
                            <img id="u1968_img" className="img " src="images/restaurant_review/u1968.svg"/>
                            <div id="u1968_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                            </IonRouterLink>
                          </div>


                          <div id="u1969" className="ax_default image">
                            <img id="u1969_img" className="img " src="images/restaurant_review/u1942.svg"/>
                            <div id="u1969_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1970" className="ax_default heading_3">
                            <div id="u1970_div" className=""></div>
                            <div id="u1970_text" className="text ">
                              <p><span>Username </span></p>
                            </div>
                          </div>


                          <div id="u1971" className="ax_default" data-left="377" data-top="111" data-width="26" data-height="11">


                            <div id="u1972" className="ax_default image">
                              <img id="u1972_img" className="img " src="images/main/u42.png"/>
                              <div id="u1972_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1973" className="ax_default image">
                              <img id="u1973_img" className="img " src="images/main/u42.png"/>
                              <div id="u1973_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div id="u1974" className="ax_default" data-left="486" data-top="24" data-width="101" data-height="121">


                          <div id="u1975" className="ax_default box_2">
                            <div id="u1975_div" className=""></div>
                            <div id="u1975_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1976" className="ax_default box_3">
                          <IonRouterLink href="food_review">
                            <img id="u1976_img" className="img " src="images/restaurant_review/u1976.svg"/>
                            <div id="u1976_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                            </IonRouterLink>
                          </div>


                          <div id="u1977" className="ax_default image">
                            <img id="u1977_img" className="img " src="images/restaurant_review/u1942.svg"/>
                            <div id="u1977_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1978" className="ax_default heading_3">
                            <div id="u1978_div" className=""></div>
                            <div id="u1978_text" className="text ">
                              <p><span>Username </span></p>
                            </div>
                          </div>


                          <div id="u1979" className="ax_default" data-left="492" data-top="111" data-width="71" data-height="11">


                            <div id="u1980" className="ax_default image">
                              <img id="u1980_img" className="img " src="images/main/u42.png"/>
                              <div id="u1980_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1981" className="ax_default image">
                              <img id="u1981_img" className="img " src="images/main/u42.png"/>
                              <div id="u1981_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1982" className="ax_default image">
                              <img id="u1982_img" className="img " src="images/main/u42.png"/>
                              <div id="u1982_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1983" className="ax_default image">
                              <img id="u1983_img" className="img " src="images/main/u42.png"/>
                              <div id="u1983_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1984" className="ax_default image">
                              <img id="u1984_img" className="img " src="images/main/u42.png"/>
                              <div id="u1984_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div id="u1985" className="ax_default" data-left="602" data-top="24" data-width="101" data-height="121">


                          <div id="u1986" className="ax_default box_2">
                            <div id="u1986_div" className=""></div>
                            <div id="u1986_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1987" className="ax_default box_3">
                          <IonRouterLink href="food_review">
                            <img id="u1987_img" className="img " src="images/restaurant_review/u1987.svg"/>
                            <div id="u1987_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                            </IonRouterLink>
                          </div>


                          <div id="u1988" className="ax_default image">
                            <img id="u1988_img" className="img " src="images/restaurant_review/u1942.svg"/>
                            <div id="u1988_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1989" className="ax_default heading_3">
                            <div id="u1989_div" className=""></div>
                            <div id="u1989_text" className="text ">
                              <p><span>Username </span></p>
                            </div>
                          </div>


                          <div id="u1990" className="ax_default" data-left="608" data-top="111" data-width="56" data-height="11">


                            <div id="u1991" className="ax_default image">
                              <img id="u1991_img" className="img " src="images/main/u42.png"/>
                              <div id="u1991_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1992" className="ax_default image">
                              <img id="u1992_img" className="img " src="images/main/u42.png"/>
                              <div id="u1992_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1993" className="ax_default image">
                              <img id="u1993_img" className="img " src="images/main/u42.png"/>
                              <div id="u1993_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1994" className="ax_default image">
                              <img id="u1994_img" className="img " src="images/main/u42.png"/>
                              <div id="u1994_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div id="u1995" className="ax_default box_1">
                          <div id="u1995_div" className=""></div>
                          <div id="u1995_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u1996" className="ax_default box_1">
                          <div id="u1996_div" className=""></div>
                          <div id="u1996_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u1997" className="ax_default box_1">
                          <div id="u1997_div" className=""></div>
                          <div id="u1997_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u1998" className="ax_default box_1">
                          <div id="u1998_div" className=""></div>
                          <div id="u1998_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u1999" className="ax_default box_1">
                          <div id="u1999_div" className=""></div>
                          <div id="u1999_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u2000" className="ax_default box_1">
                          <div id="u2000_div" className=""></div>
                          <div id="u2000_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="u2001" className="ax_default box_1">
                    <img id="u2001_img" className="img " src="images/restaurant_review/u2001.svg"/>
                    <div id="u2001_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2002" className="ax_default box_3">
                    <img id="u2002_img" className="img " src="images/restaurant_review/u2002.svg"/>
                    <div id="u2002_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2003" className="ax_default" data-left="226" data-top="111" data-width="170" data-height="24">


                    <div id="u2004" className="ax_default heading_3">
                      <div id="u2004_div" className=""></div>
                      <div id="u2004_text" className="text ">
                        <p><span>Restaurant Name</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2005" className="ax_default" data-left="226" data-top="162" data-width="100" data-height="47">


                    <div id="u2006" className="ax_default heading_3">
                      <div id="u2006_div" className=""></div>
                      <div id="u2006_text" className="text ">
                        <p><span>Address</span><span> :</span></p><p><span>Room 1111, Flat 11</span></p><p><span>111 street , New World</span></p><p><span>Mars</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2007" className="ax_default" data-left="226" data-top="261" data-width="41" data-height="11">


                    <div id="u2008" className="ax_default heading_3">
                      <div id="u2008_div" className=""></div>
                      <div id="u2008_text" className="text ">
                        <p><span>1234 1234</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2009" className="ax_default" data-left="226" data-top="227" data-width="55" data-height="14">


                    <div id="u2010" className="ax_default heading_3">
                      <div id="u2010_div" className=""></div>
                      <div id="u2010_text" className="text ">
                        <p><span>Contact :</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2011" className="ax_default" data-left="226" data-top="246" data-width="78" data-height="11">


                    <div id="u2012" className="ax_default heading_3">
                      <div id="u2012_div" className=""></div>
                      <div id="u2012_text" className="text ">
                        <p><span>Phone number: </span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2013" className="ax_default" data-left="32" data-top="288" data-width="97" data-height="19">


                    <div id="u2014" className="ax_default image">
                      <img id="u2014_img" className="img " src="images/main/u42.png"/>
                      <div id="u2014_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2015" className="ax_default image">
                      <img id="u2015_img" className="img " src="images/main/u42.png"/>
                      <div id="u2015_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2016" className="ax_default image">
                      <img id="u2016_img" className="img " src="images/main/u42.png"/>
                      <div id="u2016_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u2017" className="ax_default image">
                      <img id="u2017_img" className="img " src="images/main/u42.png"/>
                      <div id="u2017_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2018" className="ax_default image">
                    <img id="u2018_img" className="img " src="images/main/u38.png"/>
                    <div id="u2018_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2019" className="ax_default" data-left="182" data-top="292" data-width="14" data-height="14">


                    <div id="u2020" className="ax_default heading_3">
                      <div id="u2020_div" className=""></div>
                      <div id="u2020_text" className="text ">
                        <p><span>20</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2021" className="ax_default image">
                    <img id="u2021_img" className="img " src="images/restaurant_review/u2021.svg"/>
                    <div id="u2021_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2022" className="ax_default image">
                    <img id="u2022_img" className="img " src="images/restaurant_review/u2022.svg"/>
                    <div id="u2022_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2023" className="ax_default line">
                    <img id="u2023_img" className="img " src="images/restaurant_review/u2023.svg"/>
                    <div id="u2023_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2024" className="ax_default">
                    <div id="u2024_state0" className="panel_state" data-label="State1" >
                      <div id="u2024_state0_content" className="panel_state_content">


                        <div id="u2025" className="ax_default" data-left="0" data-top="0" data-width="352" data-height="45">


                          <div id="u2026" className="ax_default image">
                          <IonRouterLink href="/profile">
                            <img id="u2026_img" className="img " src="images/my_favourites/u403.svg"/>
                            <div id="u2026_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                            </IonRouterLink>
                          </div>


                          <div id="u2027" className="ax_default line">
                            <img id="u2027_img" className="img " src="images/thank_you_page/u1313.svg"/>
                            <div id="u2027_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2028" className="ax_default line">
                            <img id="u2028_img" className="img " src="images/thank_you_page/u1314.svg"/>
                            <div id="u2028_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2029" className="ax_default" data-left="44" data-top="2" data-width="54" data-height="11">


                            <div id="u2030" className="ax_default heading_3">
                              <div id="u2030_div" className=""></div>
                              <div id="u2030_text" className="text ">
                                <p><span>User Name</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2031" className="ax_default" data-left="109" data-top="2" data-width="49" data-height="11">


                            <div id="u2032" className="ax_default heading_3">
                              <div id="u2032_div" className=""></div>
                              <div id="u2032_text" className="text ">
                                <p><span>1 - 1 - 2020</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2033" className="ax_default" data-left="167" data-top="1" data-width="60" data-height="12">


                            <div id="u2034" className="ax_default image">
                              <img id="u2034_img" className="img " src="images/main/u42.png"/>
                              <div id="u2034_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u2035" className="ax_default image">
                              <img id="u2035_img" className="img " src="images/main/u42.png"/>
                              <div id="u2035_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u2036" className="ax_default image">
                              <img id="u2036_img" className="img " src="images/main/u42.png"/>
                              <div id="u2036_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u2037" className="ax_default image">
                              <img id="u2037_img" className="img " src="images/main/u42.png"/>
                              <div id="u2037_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div id="u2038" className="ax_default" data-left="0" data-top="65" data-width="352" data-height="44">


                          <div id="u2039" className="ax_default image">
                          <IonRouterLink href="/profile">
                            <img id="u2039_img" className="img " src="images/my_favourites/u403.svg"/>
                            <div id="u2039_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                            </IonRouterLink>
                          </div>


                          <div id="u2040" className="ax_default line">
                            <img id="u2040_img" className="img " src="images/thank_you_page/u1326.svg"/>
                            <div id="u2040_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2041" className="ax_default line">
                            <img id="u2041_img" className="img " src="images/thank_you_page/u1327.svg"/>
                            <div id="u2041_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2042" className="ax_default" data-left="44" data-top="67" data-width="54" data-height="11">


                            <div id="u2043" className="ax_default heading_3">
                              <div id="u2043_div" className=""></div>
                              <div id="u2043_text" className="text ">
                                <p><span>User Name</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2044" className="ax_default" data-left="109" data-top="67" data-width="53" data-height="11">


                            <div id="u2045" className="ax_default heading_3">
                              <div id="u2045_div" className=""></div>
                              <div id="u2045_text" className="text ">
                                <p><span>3 - 3 - 2020</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2046" className="ax_default" data-left="167" data-top="66" data-width="44" data-height="12">


                            <div id="u2047" className="ax_default image">
                              <img id="u2047_img" className="img " src="images/main/u42.png"/>
                              <div id="u2047_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u2048" className="ax_default image">
                              <img id="u2048_img" className="img " src="images/main/u42.png"/>
                              <div id="u2048_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u2049" className="ax_default image">
                              <img id="u2049_img" className="img " src="images/main/u42.png"/>
                              <div id="u2049_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div id="u2050" className="ax_default" data-left="0" data-top="129" data-width="352" data-height="44">


                          <div id="u2051" className="ax_default" data-left="0" data-top="129" data-width="290" data-height="24">


                            <div id="u2052" className="ax_default" data-left="0" data-top="129" data-width="290" data-height="24">


                              <div id="u2053" className="ax_default image">
                              <IonRouterLink href="/profile">
                                <img id="u2053_img" className="img " src="images/my_favourites/u403.svg"/>
                                <div id="u2053_text" className="text " style={style_display_none_visibility_hidden}>
                                  <p></p>
                                </div>
                                </IonRouterLink>
                              </div>


                              <div id="u2054" className="ax_default line">
                                <img id="u2054_img" className="img " src="images/thank_you_page/u1340.svg"/>
                                <div id="u2054_text" className="text " style={style_display_none_visibility_hidden}>
                                  <p></p>
                                </div>
                              </div>


                              <div id="u2055" className="ax_default" data-left="44" data-top="131" data-width="54" data-height="11">


                                <div id="u2056" className="ax_default heading_3">
                                  <div id="u2056_div" className=""></div>
                                  <div id="u2056_text" className="text ">
                                    <p><span>User Name</span></p>
                                  </div>
                                </div>
                              </div>


                              <div id="u2057" className="ax_default" data-left="109" data-top="131" data-width="53" data-height="11">


                                <div id="u2058" className="ax_default heading_3">
                                  <div id="u2058_div" className=""></div>
                                  <div id="u2058_text" className="text ">
                                    <p><span>4 - 7 - 2020</span></p>
                                  </div>
                                </div>
                              </div>


                              <div id="u2059" className="ax_default" data-left="167" data-top="130" data-width="28" data-height="12">


                                <div id="u2060" className="ax_default image">
                                  <img id="u2060_img" className="img " src="images/main/u42.png"/>
                                  <div id="u2060_text" className="text " style={style_display_none_visibility_hidden}>
                                    <p></p>
                                  </div>
                                </div>


                                <div id="u2061" className="ax_default image">
                                  <img id="u2061_img" className="img " src="images/main/u42.png"/>
                                  <div id="u2061_text" className="text " style={style_display_none_visibility_hidden}>
                                    <p></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div id="u2062" className="ax_default line">
                            <img id="u2062_img" className="img " src="images/thank_you_page/u1326.svg"/>
                            <div id="u2062_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2063" className="ax_default" data-left="0" data-top="193" data-width="352" data-height="44">


                          <div id="u2064" className="ax_default image">
                          <IonRouterLink href="/profile">
                            <img id="u2064_img" className="img " src="images/my_favourites/u403.svg"/>
                            <div id="u2064_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                            </IonRouterLink>
                          </div>


                          <div id="u2065" className="ax_default line">
                            <img id="u2065_img" className="img " src="images/thank_you_page/u1326.svg"/>
                            <div id="u2065_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2066" className="ax_default line">
                            <img id="u2066_img" className="img " src="images/thank_you_page/u1327.svg"/>
                            <div id="u2066_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2067" className="ax_default" data-left="44" data-top="195" data-width="54" data-height="11">


                            <div id="u2068" className="ax_default heading_3">
                              <div id="u2068_div" className=""></div>
                              <div id="u2068_text" className="text ">
                                <p><span>User Name</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2069" className="ax_default" data-left="109" data-top="195" data-width="53" data-height="11">


                            <div id="u2070" className="ax_default heading_3">
                              <div id="u2070_div" className=""></div>
                              <div id="u2070_text" className="text ">
                                <p><span>3 - 3 - 2020</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2071" className="ax_default" data-left="167" data-top="194" data-width="44" data-height="12">


                            <div id="u2072" className="ax_default image">
                              <img id="u2072_img" className="img " src="images/main/u42.png"/>
                              <div id="u2072_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u2073" className="ax_default image">
                              <img id="u2073_img" className="img " src="images/main/u42.png"/>
                              <div id="u2073_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u2074" className="ax_default image">
                              <img id="u2074_img" className="img " src="images/main/u42.png"/>
                              <div id="u2074_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div id="u2075" className="ax_default" data-left="0" data-top="258" data-width="352" data-height="45">


                          <div id="u2076" className="ax_default image">
                          <IonRouterLink href="/profile">
                            <img id="u2076_img" className="img " src="images/my_favourites/u403.svg"/>
                            <div id="u2076_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                            </IonRouterLink>
                          </div>


                          <div id="u2077" className="ax_default line">
                            <img id="u2077_img" className="img " src="images/thank_you_page/u1313.svg"/>
                            <div id="u2077_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2078" className="ax_default line">
                            <img id="u2078_img" className="img " src="images/thank_you_page/u1314.svg"/>
                            <div id="u2078_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2079" className="ax_default" data-left="44" data-top="260" data-width="54" data-height="11">


                            <div id="u2080" className="ax_default heading_3">
                              <div id="u2080_div" className=""></div>
                              <div id="u2080_text" className="text ">
                                <p><span>User Name</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2081" className="ax_default" data-left="109" data-top="260" data-width="49" data-height="11">


                            <div id="u2082" className="ax_default heading_3">
                              <div id="u2082_div" className=""></div>
                              <div id="u2082_text" className="text ">
                                <p><span>1 - 1 - 2020</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2083" className="ax_default" data-left="167" data-top="259" data-width="60" data-height="12">


                            <div id="u2084" className="ax_default image">
                              <img id="u2084_img" className="img " src="images/main/u42.png"/>
                              <div id="u2084_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u2085" className="ax_default image">
                              <img id="u2085_img" className="img " src="images/main/u42.png"/>
                              <div id="u2085_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u2086" className="ax_default image">
                              <img id="u2086_img" className="img " src="images/main/u42.png"/>
                              <div id="u2086_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u2087" className="ax_default image">
                              <img id="u2087_img" className="img " src="images/main/u42.png"/>
                              <div id="u2087_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div id="u2088" className="ax_default" data-left="0" data-top="323" data-width="352" data-height="44">


                          <div id="u2089" className="ax_default" data-left="0" data-top="323" data-width="290" data-height="24">


                            <div id="u2090" className="ax_default" data-left="0" data-top="323" data-width="290" data-height="24">


                              <div id="u2091" className="ax_default image">
                              <IonRouterLink href="/profile">
                                <img id="u2091_img" className="img " src="images/my_favourites/u403.svg"/>
                                <div id="u2091_text" className="text " style={style_display_none_visibility_hidden}>
                                  <p></p>
                                </div>
                                </IonRouterLink>
                              </div>


                              <div id="u2092" className="ax_default line">
                                <img id="u2092_img" className="img " src="images/thank_you_page/u1340.svg"/>
                                <div id="u2092_text" className="text " style={style_display_none_visibility_hidden}>
                                  <p></p>
                                </div>
                              </div>


                              <div id="u2093" className="ax_default" data-left="44" data-top="325" data-width="54" data-height="11">


                                <div id="u2094" className="ax_default heading_3">
                                  <div id="u2094_div" className=""></div>
                                  <div id="u2094_text" className="text ">
                                    <p><span>User Name</span></p>
                                  </div>
                                </div>
                              </div>


                              <div id="u2095" className="ax_default" data-left="109" data-top="325" data-width="53" data-height="11">


                                <div id="u2096" className="ax_default heading_3">
                                  <div id="u2096_div" className=""></div>
                                  <div id="u2096_text" className="text ">
                                    <p><span>4 - 7 - 2020</span></p>
                                  </div>
                                </div>
                              </div>


                              <div id="u2097" className="ax_default" data-left="167" data-top="324" data-width="28" data-height="12">


                                <div id="u2098" className="ax_default image">
                                  <img id="u2098_img" className="img " src="images/main/u42.png"/>
                                  <div id="u2098_text" className="text " style={style_display_none_visibility_hidden}>
                                    <p></p>
                                  </div>
                                </div>


                                <div id="u2099" className="ax_default image">
                                  <img id="u2099_img" className="img " src="images/main/u42.png"/>
                                  <div id="u2099_text" className="text " style={style_display_none_visibility_hidden}>
                                    <p></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div id="u2100" className="ax_default line">
                            <img id="u2100_img" className="img " src="images/thank_you_page/u1326.svg"/>
                            <div id="u2100_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2101" className="ax_default" data-left="0" data-top="387" data-width="352" data-height="44">


                          <div id="u2102" className="ax_default" data-left="0" data-top="387" data-width="290" data-height="24">


                            <div id="u2103" className="ax_default" data-left="0" data-top="387" data-width="290" data-height="24">


                              <div id="u2104" className="ax_default image">
                              <IonRouterLink href="/profile">
                                <img id="u2104_img" className="img " src="images/my_favourites/u403.svg"/>
                                <div id="u2104_text" className="text " style={style_display_none_visibility_hidden}>
                                  <p></p>
                                </div>
                                </IonRouterLink>
                              </div>


                              <div id="u2105" className="ax_default line">
                                <img id="u2105_img" className="img " src="images/thank_you_page/u1340.svg"/>
                                <div id="u2105_text" className="text " style={style_display_none_visibility_hidden}>
                                  <p></p>
                                </div>
                              </div>


                              <div id="u2106" className="ax_default" data-left="44" data-top="389" data-width="54" data-height="11">


                                <div id="u2107" className="ax_default heading_3">
                                  <div id="u2107_div" className=""></div>
                                  <div id="u2107_text" className="text ">
                                    <p><span>User Name</span></p>
                                  </div>
                                </div>
                              </div>


                              <div id="u2108" className="ax_default" data-left="109" data-top="389" data-width="53" data-height="11">


                                <div id="u2109" className="ax_default heading_3">
                                  <div id="u2109_div" className=""></div>
                                  <div id="u2109_text" className="text ">
                                    <p><span>4 - 7 - 2020</span></p>
                                  </div>
                                </div>
                              </div>


                              <div id="u2110" className="ax_default" data-left="167" data-top="388" data-width="28" data-height="12">


                                <div id="u2111" className="ax_default image">
                                  <img id="u2111_img" className="img " src="images/main/u42.png"/>
                                  <div id="u2111_text" className="text " style={style_display_none_visibility_hidden}>
                                    <p></p>
                                  </div>
                                </div>


                                <div id="u2112" className="ax_default image">
                                  <img id="u2112_img" className="img " src="images/main/u42.png"/>
                                  <div id="u2112_text" className="text " style={style_display_none_visibility_hidden}>
                                    <p></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div id="u2113" className="ax_default line">
                            <img id="u2113_img" className="img " src="images/thank_you_page/u1326.svg"/>
                            <div id="u2113_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="u2114" className="ax_default" data-left="32" data-top="504" data-width="41" data-height="14">


                    <div id="u2115" className="ax_default heading_3">
                      <div id="u2115_div" className=""></div>
                      <div id="u2115_text" className="text ">
                        <p><span>Review</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2116" className="ax_default" data-left="304" data-top="511" data-width="80" data-height="11">


                    <div id="u2117" className="ax_default heading_3">
                    <IonRouterLink href="/user_review">
                      <div id="u2117_div" className=""></div>
                      <div id="u2117_text" className="text ">
                        <p><span>Check all Reviews</span></p>
                      </div>
                      </IonRouterLink>
                    </div>
                  </div>


                  <div id="u2118" className="ax_default" data-left="32" data-top="743" data-width="127" data-height="14">


                    <div id="u2119" className="ax_default heading_3">
                      <div id="u2119_div" className=""></div>
                      <div id="u2119_text" className="text ">
                        <p><span>Suggested restaurant</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u2120" className="ax_default">
                    <div id="u2120_state0" className="panel_state" data-label="State1" >
                      <div id="u2120_state0_content" className="panel_state_content">


                        <div id="u2121" className="ax_default" data-left="0" data-top="7" data-width="131" data-height="131">


                          <div id="u2122" className="ax_default box_3">
                            <img id="u2122_img" className="img " src="images/restaurant_review/u2122.svg"/>
                            <div id="u2122_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2123" className="ax_default image">
                            <img id="u2123_img" className="img " src="images/restaurant_review/u2123.svg"/>
                            <div id="u2123_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2124" className="ax_default" data-left="5" data-top="114" data-width="85" data-height="11">


                            <div id="u2125" className="ax_default heading_3">
                              <div id="u2125_div" className=""></div>
                              <div id="u2125_text" className="text ">
                                <p><span>Restaurant Name</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2126" className="ax_default" data-left="17" data-top="130" data-width="10" data-height="8">


                            <div id="u2127" className="ax_default heading_3">
                              <div id="u2127_div" className=""></div>
                              <div id="u2127_text" className="text ">
                                <p><span>123</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2128" className="ax_default image">
                            <img id="u2128_img" className="img " src="images/main/u42.png"/>
                            <div id="u2128_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2129" className="ax_default image">
                            <img id="u2129_img" className="img " src="images/main/u42.png"/>
                            <div id="u2129_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2130" className="ax_default image">
                            <img id="u2130_img" className="img " src="images/main/u42.png"/>
                            <div id="u2130_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2131" className="ax_default image">
                            <img id="u2131_img" className="img " src="images/main/u42.png"/>
                            <div id="u2131_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2132" className="ax_default" data-left="141" data-top="7" data-width="131" data-height="131">


                          <div id="u2133" className="ax_default box_3">
                            <img id="u2133_img" className="img " src="images/restaurant_review/u2133.svg"/>
                            <div id="u2133_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2134" className="ax_default image">
                            <img id="u2134_img" className="img " src="images/restaurant_review/u2123.svg"/>
                            <div id="u2134_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2135" className="ax_default" data-left="146" data-top="114" data-width="85" data-height="11">


                            <div id="u2136" className="ax_default heading_3">
                              <div id="u2136_div" className=""></div>
                              <div id="u2136_text" className="text ">
                                <p><span>Restaurant Name</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2137" className="ax_default" data-left="158" data-top="130" data-width="7" data-height="8">


                            <div id="u2138" className="ax_default heading_3">
                              <div id="u2138_div" className=""></div>
                              <div id="u2138_text" className="text ">
                                <p><span>41</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2139" className="ax_default image">
                            <img id="u2139_img" className="img " src="images/main/u42.png"/>
                            <div id="u2139_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2140" className="ax_default image">
                            <img id="u2140_img" className="img " src="images/main/u42.png"/>
                            <div id="u2140_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2141" className="ax_default" data-left="282" data-top="7" data-width="131" data-height="131">


                          <div id="u2142" className="ax_default box_3">
                            <img id="u2142_img" className="img " src="images/restaurant_review/u2142.svg"/>
                            <div id="u2142_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2143" className="ax_default image">
                            <img id="u2143_img" className="img " src="images/restaurant_review/u2123.svg"/>
                            <div id="u2143_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2144" className="ax_default" data-left="287" data-top="114" data-width="85" data-height="11">


                            <div id="u2145" className="ax_default heading_3">
                              <div id="u2145_div" className=""></div>
                              <div id="u2145_text" className="text ">
                                <p><span>Restaurant Name</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2146" className="ax_default" data-left="299" data-top="130" data-width="9" data-height="8">


                            <div id="u2147" className="ax_default heading_3">
                              <div id="u2147_div" className=""></div>
                              <div id="u2147_text" className="text ">
                                <p><span>66</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2148" className="ax_default image">
                            <img id="u2148_img" className="img " src="images/main/u42.png"/>
                            <div id="u2148_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2149" className="ax_default image">
                            <img id="u2149_img" className="img " src="images/main/u42.png"/>
                            <div id="u2149_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2150" className="ax_default image">
                            <img id="u2150_img" className="img " src="images/main/u42.png"/>
                            <div id="u2150_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2151" className="ax_default" data-left="423" data-top="7" data-width="131" data-height="131">


                          <div id="u2152" className="ax_default box_3">
                            <img id="u2152_img" className="img " src="images/restaurant_review/u2142.svg"/>
                            <div id="u2152_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2153" className="ax_default image">
                            <img id="u2153_img" className="img " src="images/restaurant_review/u2123.svg"/>
                            <div id="u2153_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2154" className="ax_default" data-left="428" data-top="114" data-width="85" data-height="11">


                            <div id="u2155" className="ax_default heading_3">
                              <div id="u2155_div" className=""></div>
                              <div id="u2155_text" className="text ">
                                <p><span>Restaurant Name</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2156" className="ax_default" data-left="440" data-top="130" data-width="7" data-height="8">


                            <div id="u2157" className="ax_default heading_3">
                              <div id="u2157_div" className=""></div>
                              <div id="u2157_text" className="text ">
                                <p><span>41</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2158" className="ax_default image">
                            <img id="u2158_img" className="img " src="images/main/u42.png"/>
                            <div id="u2158_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2159" className="ax_default image">
                            <img id="u2159_img" className="img " src="images/main/u42.png"/>
                            <div id="u2159_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2160" className="ax_default" data-left="564" data-top="7" data-width="131" data-height="131">


                          <div id="u2161" className="ax_default box_3">
                            <img id="u2161_img" className="img " src="images/restaurant_review/u2161.svg"/>
                            <div id="u2161_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2162" className="ax_default image">
                            <img id="u2162_img" className="img " src="images/restaurant_review/u2123.svg"/>
                            <div id="u2162_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2163" className="ax_default" data-left="569" data-top="114" data-width="85" data-height="11">


                            <div id="u2164" className="ax_default heading_3">
                              <div id="u2164_div" className=""></div>
                              <div id="u2164_text" className="text ">
                                <p><span>Restaurant Name</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2165" className="ax_default" data-left="581" data-top="130" data-width="9" data-height="8">


                            <div id="u2166" className="ax_default heading_3">
                              <div id="u2166_div" className=""></div>
                              <div id="u2166_text" className="text ">
                                <p><span>66</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u2167" className="ax_default image">
                            <img id="u2167_img" className="img " src="images/main/u42.png"/>
                            <div id="u2167_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2168" className="ax_default image">
                            <img id="u2168_img" className="img " src="images/main/u42.png"/>
                            <div id="u2168_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u2169" className="ax_default image">
                            <img id="u2169_img" className="img " src="images/main/u42.png"/>
                            <div id="u2169_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>


                        <div id="u2170" className="ax_default box_1">
                          <div id="u2170_div" className=""></div>
                          <div id="u2170_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u2171" className="ax_default box_1">
                          <div id="u2171_div" className=""></div>
                          <div id="u2171_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u2172" className="ax_default box_1">
                          <div id="u2172_div" className=""></div>
                          <div id="u2172_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u2173" className="ax_default box_1">
                          <div id="u2173_div" className=""></div>
                          <div id="u2173_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>


                        <div id="u2174" className="ax_default box_1">
                          <div id="u2174_div" className=""></div>
                          <div id="u2174_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="u2175" className="ax_default">
                    <iframe id="u2175_input" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d923.0098322045382!2d114.174733!3d22.276500000000002!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1592984853088!5m2!1sen!2sus" width="600" height="450" aria-hidden="false"></iframe>
                  </div>


                  <div id="u2176" className="ax_default line">
                    <img id="u2176_img" className="img " src="images/restaurant_review/u2176.svg"/>
                    <div id="u2176_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u2177" className="ax_default">
                    <div id="u2177_state0" className="panel_state" data-label="State1" >
                      <div id="u2177_state0_content" className="panel_state_content">


                        <div id="u2178" className="ax_default image">
                        <IonRouterLink href="/pic">
                          <img id="u2178_img" className="img " src="images/profile/u1587.svg"/>
                          <div id="u2178_text" className="text " style={style_display_none_visibility_hidden}>
                            <p></p>
                          </div>
                          </IonRouterLink>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="u2179" className="ax_default box_1">
                    <div id="u2179_div" className=""></div>
                    <div id="u2179_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u2180" className="ax_default box_1">
              <img id="u2180_img" className="img " src="images/main/u113.svg"/>
              <div id="u2180_text" className="text ">
                <p><span>&nbsp;</span></p>
              </div>
            </div>


            <div id="u2181" className="ax_default image">
              <img id="u2181_img" className="img " src="images/first/u5.png"/>
              <div id="u2181_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u2182" className="ax_default image">
            <IonRouterLink href="/main">
              <img id="u2182_img" className="img " src="images/restaurant_review/u2182.svg"/>
              <div id="u2182_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
              </IonRouterLink>
            </div>
          </div>
      </IonContent>
    </IonPage>
  );
};
export default RestaurantReview;
