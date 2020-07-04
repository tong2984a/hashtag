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
import '../theme/files/thank_you_page/styles.css';
import { RouteComponentProps } from "react-router-dom";

const style_display_none_visibility_hidden: CSSProperties = {
  display: 'none',
  visibility: 'hidden'
}

const style_visibility_hidden: CSSProperties = {
  visibility: 'hidden'
}



interface ThankYouPageProps extends RouteComponentProps<{
  tab: string;
}> { }

const ThankYou: React.FC<ThankYouPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent>

          <div id="base" className="">


            <div id="u1297" className="ax_default">
              <div id="u1297_state0" className="panel_state" data-label="State1" >
                <div id="u1297_state0_content" className="panel_state_content">


                  <div id="u1298" className="ax_default box_1">
                    <img id="u1298_img" className="img " src="images/thank_you_page/u1298.svg"/>
                    <div id="u1298_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1299" className="ax_default" data-left="34" data-top="461" data-width="347" data-height="85">


                    <div id="u1300" className="ax_default heading_1">
                      <div id="u1300_div" className=""></div>
                      <div id="u1300_text" className="text ">
                        <p><span>Balance</span></p>
                      </div>
                    </div>


                    <div id="u1301" className="ax_default heading_1">
                      <div id="u1301_div" className=""></div>
                      <div id="u1301_text" className="text ">
                        <p><span>$2</span></p>
                      </div>
                    </div>


                    <div id="u1302" className="ax_default line">
                      <img id="u1302_img" className="img " src="images/thank_you_page/u1302.svg"/>
                      <div id="u1302_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1303" className="ax_default heading_3">
                      <div id="u1303_div" className=""></div>
                      <div id="u1303_text" className="text ">
                        <p><span>Your $2 will show up in 24 hours</span></p>
                      </div>
                    </div>
                  </div>


                  <div id="u1304" className="ax_default box_3">
                    <div id="u1304_div" className=""></div>
                    <div id="u1304_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1305" className="ax_default heading_1">
                    <div id="u1305_div" className=""></div>
                    <div id="u1305_text" className="text ">
                      <p><span>Your Progress </span></p>
                    </div>
                  </div>


                  <div id="u1306" className="ax_default heading_1">
                    <img id="u1306_img" className="img " src="images/thank_you_page/u1306.svg"/>
                    <div id="u1306_text" className="text ">
                      <p><span>10 more to redeem</span></p>
                    </div>
                  </div>


                  <div id="u1307" className="ax_default box_2">
                    <div id="u1307_div" className=""></div>
                    <div id="u1307_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1308" className="ax_default box_2">
                    <div id="u1308_div" className=""></div>
                    <div id="u1308_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1309" className="ax_default heading_1">
                    <div id="u1309_div" className=""></div>
                    <div id="u1309_text" className="text ">
                      <p><span>Last Upload</span></p>
                    </div>
                  </div>


                  <div id="u1310" className="ax_default">
                    <div id="u1310_state0" className="panel_state" data-label="State1" style={style_visibility_hidden}>
                      <div id="u1310_state0_content" className="panel_state_content">


                        <div id="u1311" className="ax_default" data-left="0" data-top="0" data-width="352" data-height="45">


                          <div id="u1312" className="ax_default image">
                            <img id="u1312_img" className="img " src="images/my_favourites/u403.svg"/>
                            <div id="u1312_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1313" className="ax_default line">
                            <img id="u1313_img" className="img " src="images/thank_you_page/u1313.svg"/>
                            <div id="u1313_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1314" className="ax_default line">
                            <img id="u1314_img" className="img " src="images/thank_you_page/u1314.svg"/>
                            <div id="u1314_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1315" className="ax_default" data-left="44" data-top="2" data-width="54" data-height="11">


                            <div id="u1316" className="ax_default heading_3">
                              <div id="u1316_div" className=""></div>
                              <div id="u1316_text" className="text ">
                                <p><span>User Name</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u1317" className="ax_default" data-left="109" data-top="2" data-width="49" data-height="11">


                            <div id="u1318" className="ax_default heading_3">
                              <div id="u1318_div" className=""></div>
                              <div id="u1318_text" className="text ">
                                <p><span>1 - 1 - 2020</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u1319" className="ax_default" data-left="167" data-top="1" data-width="60" data-height="12">


                            <div id="u1320" className="ax_default image">
                              <img id="u1320_img" className="img " src="images/main/u42.png"/>
                              <div id="u1320_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1321" className="ax_default image">
                              <img id="u1321_img" className="img " src="images/main/u42.png"/>
                              <div id="u1321_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1322" className="ax_default image">
                              <img id="u1322_img" className="img " src="images/main/u42.png"/>
                              <div id="u1322_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1323" className="ax_default image">
                              <img id="u1323_img" className="img " src="images/main/u42.png"/>
                              <div id="u1323_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div id="u1324" className="ax_default" data-left="0" data-top="65" data-width="352" data-height="44">


                          <div id="u1325" className="ax_default image">
                            <img id="u1325_img" className="img " src="images/my_favourites/u403.svg"/>
                            <div id="u1325_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1326" className="ax_default line">
                            <img id="u1326_img" className="img " src="images/thank_you_page/u1326.svg"/>
                            <div id="u1326_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1327" className="ax_default line">
                            <img id="u1327_img" className="img " src="images/thank_you_page/u1327.svg"/>
                            <div id="u1327_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1328" className="ax_default" data-left="44" data-top="67" data-width="54" data-height="11">


                            <div id="u1329" className="ax_default heading_3">
                              <div id="u1329_div" className=""></div>
                              <div id="u1329_text" className="text ">
                                <p><span>User Name</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u1330" className="ax_default" data-left="109" data-top="67" data-width="53" data-height="11">


                            <div id="u1331" className="ax_default heading_3">
                              <div id="u1331_div" className=""></div>
                              <div id="u1331_text" className="text ">
                                <p><span>3 - 3 - 2020</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u1332" className="ax_default" data-left="167" data-top="66" data-width="44" data-height="12">


                            <div id="u1333" className="ax_default image">
                              <img id="u1333_img" className="img " src="images/main/u42.png"/>
                              <div id="u1333_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1334" className="ax_default image">
                              <img id="u1334_img" className="img " src="images/main/u42.png"/>
                              <div id="u1334_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1335" className="ax_default image">
                              <img id="u1335_img" className="img " src="images/main/u42.png"/>
                              <div id="u1335_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div id="u1336" className="ax_default" data-left="0" data-top="129" data-width="352" data-height="44">


                          <div id="u1337" className="ax_default" data-left="0" data-top="129" data-width="290" data-height="24">


                            <div id="u1338" className="ax_default" data-left="0" data-top="129" data-width="290" data-height="24">


                              <div id="u1339" className="ax_default image">
                                <img id="u1339_img" className="img " src="images/my_favourites/u403.svg"/>
                                <div id="u1339_text" className="text " style={style_display_none_visibility_hidden}>
                                  <p></p>
                                </div>
                              </div>


                              <div id="u1340" className="ax_default line">
                                <img id="u1340_img" className="img " src="images/thank_you_page/u1340.svg"/>
                                <div id="u1340_text" className="text " style={style_display_none_visibility_hidden}>
                                  <p></p>
                                </div>
                              </div>


                              <div id="u1341" className="ax_default" data-left="44" data-top="131" data-width="54" data-height="11">


                                <div id="u1342" className="ax_default heading_3">
                                  <div id="u1342_div" className=""></div>
                                  <div id="u1342_text" className="text ">
                                    <p><span>User Name</span></p>
                                  </div>
                                </div>
                              </div>


                              <div id="u1343" className="ax_default" data-left="109" data-top="131" data-width="53" data-height="11">


                                <div id="u1344" className="ax_default heading_3">
                                  <div id="u1344_div" className=""></div>
                                  <div id="u1344_text" className="text ">
                                    <p><span>4 - 7 - 2020</span></p>
                                  </div>
                                </div>
                              </div>


                              <div id="u1345" className="ax_default" data-left="167" data-top="130" data-width="28" data-height="12">


                                <div id="u1346" className="ax_default image">
                                  <img id="u1346_img" className="img " src="images/main/u42.png"/>
                                  <div id="u1346_text" className="text " style={style_display_none_visibility_hidden}>
                                    <p></p>
                                  </div>
                                </div>


                                <div id="u1347" className="ax_default image">
                                  <img id="u1347_img" className="img " src="images/main/u42.png"/>
                                  <div id="u1347_text" className="text " style={style_display_none_visibility_hidden}>
                                    <p></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div id="u1348" className="ax_default line">
                            <img id="u1348_img" className="img " src="images/thank_you_page/u1326.svg"/>
                            <div id="u1348_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>


                        <div id="u1349" className="ax_default" data-left="0" data-top="193" data-width="352" data-height="44">


                          <div id="u1350" className="ax_default image">
                            <img id="u1350_img" className="img " src="images/my_favourites/u403.svg"/>
                            <div id="u1350_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1351" className="ax_default line">
                            <img id="u1351_img" className="img " src="images/thank_you_page/u1326.svg"/>
                            <div id="u1351_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1352" className="ax_default line">
                            <img id="u1352_img" className="img " src="images/thank_you_page/u1327.svg"/>
                            <div id="u1352_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1353" className="ax_default" data-left="44" data-top="195" data-width="54" data-height="11">


                            <div id="u1354" className="ax_default heading_3">
                              <div id="u1354_div" className=""></div>
                              <div id="u1354_text" className="text ">
                                <p><span>User Name</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u1355" className="ax_default" data-left="109" data-top="195" data-width="53" data-height="11">


                            <div id="u1356" className="ax_default heading_3">
                              <div id="u1356_div" className=""></div>
                              <div id="u1356_text" className="text ">
                                <p><span>3 - 3 - 2020</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u1357" className="ax_default" data-left="167" data-top="194" data-width="44" data-height="12">


                            <div id="u1358" className="ax_default image">
                              <img id="u1358_img" className="img " src="images/main/u42.png"/>
                              <div id="u1358_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1359" className="ax_default image">
                              <img id="u1359_img" className="img " src="images/main/u42.png"/>
                              <div id="u1359_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1360" className="ax_default image">
                              <img id="u1360_img" className="img " src="images/main/u42.png"/>
                              <div id="u1360_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div id="u1361" className="ax_default" data-left="0" data-top="258" data-width="352" data-height="45">


                          <div id="u1362" className="ax_default image">
                            <img id="u1362_img" className="img " src="images/my_favourites/u403.svg"/>
                            <div id="u1362_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1363" className="ax_default line">
                            <img id="u1363_img" className="img " src="images/thank_you_page/u1313.svg"/>
                            <div id="u1363_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1364" className="ax_default line">
                            <img id="u1364_img" className="img " src="images/thank_you_page/u1314.svg"/>
                            <div id="u1364_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>


                          <div id="u1365" className="ax_default" data-left="44" data-top="260" data-width="54" data-height="11">


                            <div id="u1366" className="ax_default heading_3">
                              <div id="u1366_div" className=""></div>
                              <div id="u1366_text" className="text ">
                                <p><span>User Name</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u1367" className="ax_default" data-left="109" data-top="260" data-width="49" data-height="11">


                            <div id="u1368" className="ax_default heading_3">
                              <div id="u1368_div" className=""></div>
                              <div id="u1368_text" className="text ">
                                <p><span>1 - 1 - 2020</span></p>
                              </div>
                            </div>
                          </div>


                          <div id="u1369" className="ax_default" data-left="167" data-top="259" data-width="60" data-height="12">


                            <div id="u1370" className="ax_default image">
                              <img id="u1370_img" className="img " src="images/main/u42.png"/>
                              <div id="u1370_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1371" className="ax_default image">
                              <img id="u1371_img" className="img " src="images/main/u42.png"/>
                              <div id="u1371_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1372" className="ax_default image">
                              <img id="u1372_img" className="img " src="images/main/u42.png"/>
                              <div id="u1372_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>


                            <div id="u1373" className="ax_default image">
                              <img id="u1373_img" className="img " src="images/main/u42.png"/>
                              <div id="u1373_text" className="text " style={style_display_none_visibility_hidden}>
                                <p></p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div id="u1374" className="ax_default" data-left="0" data-top="323" data-width="352" data-height="44">


                          <div id="u1375" className="ax_default" data-left="0" data-top="323" data-width="290" data-height="24">


                            <div id="u1376" className="ax_default" data-left="0" data-top="323" data-width="290" data-height="24">


                              <div id="u1377" className="ax_default image">
                                <img id="u1377_img" className="img " src="images/my_favourites/u403.svg"/>
                                <div id="u1377_text" className="text " style={style_display_none_visibility_hidden}>
                                  <p></p>
                                </div>
                              </div>


                              <div id="u1378" className="ax_default line">
                                <img id="u1378_img" className="img " src="images/thank_you_page/u1340.svg"/>
                                <div id="u1378_text" className="text " style={style_display_none_visibility_hidden}>
                                  <p></p>
                                </div>
                              </div>


                              <div id="u1379" className="ax_default" data-left="44" data-top="325" data-width="54" data-height="11">


                                <div id="u1380" className="ax_default heading_3">
                                  <div id="u1380_div" className=""></div>
                                  <div id="u1380_text" className="text ">
                                    <p><span>User Name</span></p>
                                  </div>
                                </div>
                              </div>


                              <div id="u1381" className="ax_default" data-left="109" data-top="325" data-width="53" data-height="11">


                                <div id="u1382" className="ax_default heading_3">
                                  <div id="u1382_div" className=""></div>
                                  <div id="u1382_text" className="text ">
                                    <p><span>4 - 7 - 2020</span></p>
                                  </div>
                                </div>
                              </div>


                              <div id="u1383" className="ax_default" data-left="167" data-top="324" data-width="28" data-height="12">


                                <div id="u1384" className="ax_default image">
                                  <img id="u1384_img" className="img " src="images/main/u42.png"/>
                                  <div id="u1384_text" className="text " style={style_display_none_visibility_hidden}>
                                    <p></p>
                                  </div>
                                </div>


                                <div id="u1385" className="ax_default image">
                                  <img id="u1385_img" className="img " src="images/main/u42.png"/>
                                  <div id="u1385_text" className="text " style={style_display_none_visibility_hidden}>
                                    <p></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div id="u1386" className="ax_default line">
                            <img id="u1386_img" className="img " src="images/thank_you_page/u1326.svg"/>
                            <div id="u1386_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>


                        <div id="u1387" className="ax_default" data-left="0" data-top="387" data-width="352" data-height="44">


                          <div id="u1388" className="ax_default" data-left="0" data-top="387" data-width="290" data-height="24">


                            <div id="u1389" className="ax_default" data-left="0" data-top="387" data-width="290" data-height="24">


                              <div id="u1390" className="ax_default image">
                                <img id="u1390_img" className="img " src="images/my_favourites/u403.svg"/>
                                <div id="u1390_text" className="text " style={style_display_none_visibility_hidden}>
                                  <p></p>
                                </div>
                              </div>


                              <div id="u1391" className="ax_default line">
                                <img id="u1391_img" className="img " src="images/thank_you_page/u1340.svg"/>
                                <div id="u1391_text" className="text " style={style_display_none_visibility_hidden}>
                                  <p></p>
                                </div>
                              </div>


                              <div id="u1392" className="ax_default" data-left="44" data-top="389" data-width="54" data-height="11">


                                <div id="u1393" className="ax_default heading_3">
                                  <div id="u1393_div" className=""></div>
                                  <div id="u1393_text" className="text ">
                                    <p><span>User Name</span></p>
                                  </div>
                                </div>
                              </div>


                              <div id="u1394" className="ax_default" data-left="109" data-top="389" data-width="53" data-height="11">


                                <div id="u1395" className="ax_default heading_3">
                                  <div id="u1395_div" className=""></div>
                                  <div id="u1395_text" className="text ">
                                    <p><span>4 - 7 - 2020</span></p>
                                  </div>
                                </div>
                              </div>


                              <div id="u1396" className="ax_default" data-left="167" data-top="388" data-width="28" data-height="12">


                                <div id="u1397" className="ax_default image">
                                  <img id="u1397_img" className="img " src="images/main/u42.png"/>
                                  <div id="u1397_text" className="text " style={style_display_none_visibility_hidden}>
                                    <p></p>
                                  </div>
                                </div>


                                <div id="u1398" className="ax_default image">
                                  <img id="u1398_img" className="img " src="images/main/u42.png"/>
                                  <div id="u1398_text" className="text " style={style_display_none_visibility_hidden}>
                                    <p></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div id="u1399" className="ax_default line">
                            <img id="u1399_img" className="img " src="images/thank_you_page/u1326.svg"/>
                            <div id="u1399_text" className="text " style={style_display_none_visibility_hidden}>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="u1400" className="ax_default box_1">
                    <img id="u1400_img" className="img " src="images/thank_you_page/u1400.svg"/>
                    <div id="u1400_text" className="text ">
                      <p><span>Back to home page</span></p>
                    </div>
                  </div>


                  <div id="u1401" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                    <img id="u1401_img" className="img " src="images/thank_you_page/u1401.svg"/>
                    <div id="u1401_text" className="text ">
                      <p><span>Back to home page</span></p>
                    </div>
                  </div>


                  <div id="u1402" className="ax_default line">
                    <img id="u1402_img" className="img " src="images/main/u103.svg"/>
                    <div id="u1402_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u1403" className="ax_default box_1">
              <img id="u1403_img" className="img " src="images/thank_you_page/u1403.svg"/>
              <div id="u1403_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1404" className="ax_default heading_1">
              <div id="u1404_div" className=""></div>
              <div id="u1404_text" className="text ">
                <p><span>Thank you</span></p><p><span>for </span><span>your comment</span></p>
              </div>
            </div>


            <div id="u1405" className="ax_default image ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1405_img" className="img " src="images/thank_you_page/u1405.svg"/>
              <div id="u1405_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1406" className="ax_default line ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1406_img" className="img " src="images/thank_you_page/u1406.svg"/>
              <div id="u1406_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1407" className="ax_default line ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1407_img" className="img " src="images/thank_you_page/u1407.svg"/>
              <div id="u1407_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1408" className="ax_default image ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1408_img" className="img " src="images/thank_you_page/u1408.svg"/>
              <div id="u1408_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1409" className="ax_default image ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1409_img" className="img " src="images/thank_you_page/u1409.svg"/>
              <div id="u1409_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1410" className="ax_default line ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1410_img" className="img " src="images/thank_you_page/u1410.svg"/>
              <div id="u1410_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1411" className="ax_default line ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1411_img" className="img " src="images/thank_you_page/u1406.svg"/>
              <div id="u1411_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1412" className="ax_default image ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1412_img" className="img " src="images/thank_you_page/u1405.svg"/>
              <div id="u1412_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1413" className="ax_default line ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1413_img" className="img " src="images/thank_you_page/u1406.svg"/>
              <div id="u1413_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1414" className="ax_default image ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1414_img" className="img " src="images/thank_you_page/u1409.svg"/>
              <div id="u1414_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1415" className="ax_default line ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1415_img" className="img " src="images/thank_you_page/u1406.svg"/>
              <div id="u1415_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1416" className="ax_default image ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1416_img" className="img " src="images/thank_you_page/u1408.svg"/>
              <div id="u1416_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1417" className="ax_default line ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1417_img" className="img " src="images/thank_you_page/u1417.svg"/>
              <div id="u1417_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1418" className="ax_default line ax_default_hidden" style={style_display_none_visibility_hidden}>
              <img id="u1418_img" className="img " src="images/thank_you_page/u1410.svg"/>
              <div id="u1418_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1419" className="ax_default image">
            <IonRouterLink href="/main">
              <img id="u1419_img" className="img " src="images/thank_you_page/u1419.svg"/>
              <div id="u1419_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
              </IonRouterLink>
            </div>
          </div>
      </IonContent>
    </IonPage>
  );
};
export default ThankYou;
