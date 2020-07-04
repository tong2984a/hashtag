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
import '../theme/files/profile/styles.css';
import { RouteComponentProps } from "react-router-dom";

const style_display_none_visibility_hidden: CSSProperties = {
  display: 'none',
  visibility: 'hidden'
}

const style_visibility_hidden: CSSProperties = {
  visibility: 'hidden'
}

interface ProfilePageProps extends RouteComponentProps<{
  tab: string;
}> { }

const Profile: React.FC<ProfilePageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent>

          <div id="base" className="">


            <div id="u1438" className="ax_default" data-left="180" data-top="214" data-width="38" data-height="47">


              <div id="u1439" className="ax_default heading_2">
                <img id="u1439_img" className="img " src="images/profile/u1439.svg"/>
                <div id="u1439_text" className="text ">
                  <p><span>15</span></p>
                </div>
              </div>


              <div id="u1440" className="ax_default heading_2">
              <IonRouterLink href="/plant_based">
                <img id="u1440_img" className="img " src="images/main/u171.svg"/>
                <div id="u1440_text" className="text ">
                  <p><span>Plant-base</span></p>
                </div>
                </IonRouterLink>
              </div>
            </div>


            <div id="u1441" className="ax_default image">
              <img id="u1441_img" className="img " src="images/profile/u1441.svg"/>
              <div id="u1441_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1442" className="ax_default box_1">
              <img id="u1442_img" className="img " src="images/profile/u1442.svg"/>
              <div id="u1442_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1443" className="ax_default ellipse">
              <img id="u1443_img" className="img " src="images/profile/u1443.svg"/>
              <div id="u1443_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1444" className="ax_default image">
              <img id="u1444_img" className="img " src="images/profile/u1444.svg"/>
              <div id="u1444_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1445" className="ax_default image">
            <IonRouterLink href="/main">
              <img id="u1445_img" className="img " src="images/profile/u1445.svg"/>
              <div id="u1445_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
              </IonRouterLink>
            </div>


            <div id="u1446" className="ax_default" data-left="249" data-top="214" data-width="59" data-height="47">


              <div id="u1447" className="ax_default heading_2">
                <img id="u1447_img" className="img " src="images/profile/u1447.svg"/>
                <div id="u1447_text" className="text ">
                  <p><span>100</span></p>
                </div>
              </div>


              <div id="u1448" className="ax_default heading_2">
                <img id="u1448_img" className="img " src="images/profile/u1448.svg"/>
                <div id="u1448_text" className="text ">
                  <p><span>Followers</span></p>
                </div>
              </div>
            </div>


            <div id="u1449" className="ax_default" data-left="339" data-top="214" data-width="38" data-height="47">


              <div id="u1450" className="ax_default heading_2">
                <img id="u1450_img" className="img " src="images/profile/u1450.svg"/>
                <div id="u1450_text" className="text ">
                  <p><span>35</span></p>
                </div>
              </div>


              <div id="u1451" className="ax_default heading_2">
                <img id="u1451_img" className="img " src="images/profile/u1451.svg"/>
                <div id="u1451_text" className="text ">
                  <p><span>Review</span></p>
                </div>
              </div>
            </div>


            <div id="u1452" className="ax_default" data-left="35" data-top="82" data-width="347" data-height="85">


              <div id="u1453" className="ax_default heading_1">
                <div id="u1453_div" className=""></div>
                <div id="u1453_text" className="text ">
                  <p><span>Balance</span></p>
                </div>
              </div>


              <div id="u1454" className="ax_default heading_1">
                <div id="u1454_div" className=""></div>
                <div id="u1454_text" className="text ">
                  <p><span>$0</span></p>
                </div>
              </div>


              <div id="u1455" className="ax_default line">
                <img id="u1455_img" className="img " src="images/profile/u1455.svg"/>
                <div id="u1455_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1456" className="ax_default heading_3">
                <div id="u1456_div" className=""></div>
                <div id="u1456_text" className="text ">
                  <p><span>Your $2 will show up in 24 hours</span></p>
                </div>
              </div>
            </div>


            <div id="u1457" className="ax_default image">
              <img id="u1457_img" className="img " src="images/profile/u1457.svg"/>
              <div id="u1457_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1458" className="ax_default">
              <div id="u1458_state0" className="panel_state" data-label="State1" >
                <div id="u1458_state0_content" className="panel_state_content">


                  <div id="u1459" className="ax_default box_1">
                    <div id="u1459_div" className=""></div>
                    <div id="u1459_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1460" className="ax_default box_1">
                    <div id="u1460_div" className=""></div>
                    <div id="u1460_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1461" className="ax_default box_1">
                    <div id="u1461_div" className=""></div>
                    <div id="u1461_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1462" className="ax_default box_1">
                    <div id="u1462_div" className=""></div>
                    <div id="u1462_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1463" className="ax_default box_1">
                    <div id="u1463_div" className=""></div>
                    <div id="u1463_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1464" className="ax_default box_1">
                    <img id="u1464_img" className="img " src="images/classification/u554.svg"/>
                    <div id="u1464_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1465" className="ax_default heading_3">
                    <div id="u1465_div" className=""></div>
                    <div id="u1465_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1466" className="ax_default box_3">
                    <div id="u1466_div" className=""></div>
                    <div id="u1466_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1467" className="ax_default heading_3">
                    <div id="u1467_div" className=""></div>
                    <div id="u1467_text" className="text ">
                      <p><span>9 - 8 - 2020 </span></p>
                    </div>
                  </div>


                  <div id="u1468" className="ax_default heading_3">
                    <div id="u1468_div" className=""></div>
                    <div id="u1468_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1469" className="ax_default box_3">
                    <div id="u1469_div" className=""></div>
                    <div id="u1469_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1470" className="ax_default heading_3">
                    <div id="u1470_div" className=""></div>
                    <div id="u1470_text" className="text ">
                      <p><span>21 - 5 - 2020 </span></p>
                    </div>
                  </div>


                  <div id="u1471" className="ax_default heading_3">
                    <div id="u1471_div" className=""></div>
                    <div id="u1471_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1472" className="ax_default box_3">
                    <div id="u1472_div" className=""></div>
                    <div id="u1472_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1473" className="ax_default heading_3">
                    <div id="u1473_div" className=""></div>
                    <div id="u1473_text" className="text ">
                      <p><span>1 - 3 - 2020 </span></p>
                    </div>
                  </div>


                  <div id="u1474" className="ax_default heading_3">
                    <div id="u1474_div" className=""></div>
                    <div id="u1474_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1475" className="ax_default box_3">
                    <div id="u1475_div" className=""></div>
                    <div id="u1475_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1476" className="ax_default heading_3">
                    <div id="u1476_div" className=""></div>
                    <div id="u1476_text" className="text ">
                      <p><span>9 - 10 - 2019 </span></p>
                    </div>
                  </div>


                  <div id="u1477" className="ax_default heading_3">
                    <div id="u1477_div" className=""></div>
                    <div id="u1477_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1478" className="ax_default box_3">
                    <div id="u1478_div" className=""></div>
                    <div id="u1478_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1479" className="ax_default heading_3">
                    <div id="u1479_div" className=""></div>
                    <div id="u1479_text" className="text ">
                      <p><span>21 - 5 - 2018 </span></p>
                    </div>
                  </div>


                  <div id="u1480" className="ax_default heading_3">
                    <div id="u1480_div" className=""></div>
                    <div id="u1480_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1481" className="ax_default box_3">
                    <div id="u1481_div" className=""></div>
                    <div id="u1481_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1482" className="ax_default heading_3">
                    <div id="u1482_div" className=""></div>
                    <div id="u1482_text" className="text ">
                      <p><span>1 - 5 - 2019 </span></p>
                    </div>
                  </div>


                  <div id="u1483" className="ax_default heading_3">
                    <div id="u1483_div" className=""></div>
                    <div id="u1483_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1484" className="ax_default heading_3">
                    <div id="u1484_div" className=""></div>
                    <div id="u1484_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1485" className="ax_default heading_3">
                    <div id="u1485_div" className=""></div>
                    <div id="u1485_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1486" className="ax_default heading_3">
                    <div id="u1486_div" className=""></div>
                    <div id="u1486_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1487" className="ax_default heading_3">
                    <div id="u1487_div" className=""></div>
                    <div id="u1487_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1488" className="ax_default heading_3">
                    <div id="u1488_div" className=""></div>
                    <div id="u1488_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <IonRouterLink href="/food_review">
                  <div id="u1489" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1490" className="ax_default">
                  </div>
                  </IonRouterLink>

                  <IonRouterLink href="/food_review">
                  <div id="u1491" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1492" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1493" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1494" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <div id="u1495" className="ax_default box_1">
                    <div id="u1495_div" className=""></div>
                    <div id="u1495_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1496" className="ax_default box_1">
                    <div id="u1496_div" className=""></div>
                    <div id="u1496_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1497" className="ax_default box_1">
                    <div id="u1497_div" className=""></div>
                    <div id="u1497_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1498" className="ax_default box_1">
                    <div id="u1498_div" className=""></div>
                    <div id="u1498_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1499" className="ax_default box_1">
                    <div id="u1499_div" className=""></div>
                    <div id="u1499_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1500" className="ax_default box_1">
                    <img id="u1500_img" className="img " src="images/classification/u554.svg"/>
                    <div id="u1500_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1501" className="ax_default heading_3">
                    <div id="u1501_div" className=""></div>
                    <div id="u1501_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1502" className="ax_default box_3">
                    <div id="u1502_div" className=""></div>
                    <div id="u1502_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1503" className="ax_default heading_3">
                    <div id="u1503_div" className=""></div>
                    <div id="u1503_text" className="text ">
                      <p><span>9 - 8 - 2020 </span></p>
                    </div>
                  </div>


                  <div id="u1504" className="ax_default heading_3">
                    <div id="u1504_div" className=""></div>
                    <div id="u1504_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1505" className="ax_default box_3">
                    <div id="u1505_div" className=""></div>
                    <div id="u1505_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1506" className="ax_default heading_3">
                    <div id="u1506_div" className=""></div>
                    <div id="u1506_text" className="text ">
                      <p><span>21 - 5 - 2020 </span></p>
                    </div>
                  </div>


                  <div id="u1507" className="ax_default heading_3">
                    <div id="u1507_div" className=""></div>
                    <div id="u1507_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1508" className="ax_default box_3">
                    <div id="u1508_div" className=""></div>
                    <div id="u1508_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1509" className="ax_default heading_3">
                    <div id="u1509_div" className=""></div>
                    <div id="u1509_text" className="text ">
                      <p><span>1 - 3 - 2020 </span></p>
                    </div>
                  </div>


                  <div id="u1510" className="ax_default heading_3">
                    <div id="u1510_div" className=""></div>
                    <div id="u1510_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1511" className="ax_default box_3">
                    <div id="u1511_div" className=""></div>
                    <div id="u1511_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1512" className="ax_default heading_3">
                    <div id="u1512_div" className=""></div>
                    <div id="u1512_text" className="text ">
                      <p><span>9 - 10 - 2019 </span></p>
                    </div>
                  </div>


                  <div id="u1513" className="ax_default heading_3">
                    <div id="u1513_div" className=""></div>
                    <div id="u1513_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1514" className="ax_default box_3">
                    <div id="u1514_div" className=""></div>
                    <div id="u1514_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1515" className="ax_default heading_3">
                    <div id="u1515_div" className=""></div>
                    <div id="u1515_text" className="text ">
                      <p><span>21 - 5 - 2018 </span></p>
                    </div>
                  </div>


                  <div id="u1516" className="ax_default heading_3">
                    <div id="u1516_div" className=""></div>
                    <div id="u1516_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1517" className="ax_default box_3">
                    <div id="u1517_div" className=""></div>
                    <div id="u1517_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1518" className="ax_default heading_3">
                    <div id="u1518_div" className=""></div>
                    <div id="u1518_text" className="text ">
                      <p><span>1 - 5 - 2019 </span></p>
                    </div>
                  </div>


                  <div id="u1519" className="ax_default heading_3">
                    <div id="u1519_div" className=""></div>
                    <div id="u1519_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1520" className="ax_default heading_3">
                    <div id="u1520_div" className=""></div>
                    <div id="u1520_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1521" className="ax_default heading_3">
                    <div id="u1521_div" className=""></div>
                    <div id="u1521_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1522" className="ax_default heading_3">
                    <div id="u1522_div" className=""></div>
                    <div id="u1522_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1523" className="ax_default heading_3">
                    <div id="u1523_div" className=""></div>
                    <div id="u1523_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1524" className="ax_default heading_3">
                    <div id="u1524_div" className=""></div>
                    <div id="u1524_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1525" className="ax_default box_1">
                    <div id="u1525_div" className=""></div>
                    <div id="u1525_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1526" className="ax_default box_1">
                    <div id="u1526_div" className=""></div>
                    <div id="u1526_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1527" className="ax_default box_1">
                    <div id="u1527_div" className=""></div>
                    <div id="u1527_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1528" className="ax_default box_1">
                    <div id="u1528_div" className=""></div>
                    <div id="u1528_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1529" className="ax_default box_1">
                    <div id="u1529_div" className=""></div>
                    <div id="u1529_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1530" className="ax_default box_1">
                    <img id="u1530_img" className="img " src="images/classification/u554.svg"/>
                    <div id="u1530_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1531" className="ax_default heading_3">
                    <div id="u1531_div" className=""></div>
                    <div id="u1531_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1532" className="ax_default box_3">
                    <div id="u1532_div" className=""></div>
                    <div id="u1532_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1533" className="ax_default heading_3">
                    <div id="u1533_div" className=""></div>
                    <div id="u1533_text" className="text ">
                      <p><span>9 - 8 - 2020 </span></p>
                    </div>
                  </div>


                  <div id="u1534" className="ax_default heading_3">
                    <div id="u1534_div" className=""></div>
                    <div id="u1534_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1535" className="ax_default box_3">
                    <div id="u1535_div" className=""></div>
                    <div id="u1535_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1536" className="ax_default heading_3">
                    <div id="u1536_div" className=""></div>
                    <div id="u1536_text" className="text ">
                      <p><span>21 - 5 - 2020 </span></p>
                    </div>
                  </div>


                  <div id="u1537" className="ax_default heading_3">
                    <div id="u1537_div" className=""></div>
                    <div id="u1537_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1538" className="ax_default box_3">
                    <div id="u1538_div" className=""></div>
                    <div id="u1538_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1539" className="ax_default heading_3">
                    <div id="u1539_div" className=""></div>
                    <div id="u1539_text" className="text ">
                      <p><span>1 - 3 - 2020 </span></p>
                    </div>
                  </div>


                  <div id="u1540" className="ax_default heading_3">
                    <div id="u1540_div" className=""></div>
                    <div id="u1540_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1541" className="ax_default box_3">
                    <div id="u1541_div" className=""></div>
                    <div id="u1541_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1542" className="ax_default heading_3">
                    <div id="u1542_div" className=""></div>
                    <div id="u1542_text" className="text ">
                      <p><span>9 - 10 - 2019 </span></p>
                    </div>
                  </div>


                  <div id="u1543" className="ax_default heading_3">
                    <div id="u1543_div" className=""></div>
                    <div id="u1543_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1544" className="ax_default box_3">
                    <div id="u1544_div" className=""></div>
                    <div id="u1544_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1545" className="ax_default heading_3">
                    <div id="u1545_div" className=""></div>
                    <div id="u1545_text" className="text ">
                      <p><span>21 - 5 - 2018 </span></p>
                    </div>
                  </div>


                  <div id="u1546" className="ax_default heading_3">
                    <div id="u1546_div" className=""></div>
                    <div id="u1546_text" className="text ">
                      <p><span>Restaurant Name </span></p>
                    </div>
                  </div>


                  <div id="u1547" className="ax_default box_3">
                    <div id="u1547_div" className=""></div>
                    <div id="u1547_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1548" className="ax_default heading_3">
                    <div id="u1548_div" className=""></div>
                    <div id="u1548_text" className="text ">
                      <p><span>1 - 5 - 2019 </span></p>
                    </div>
                  </div>


                  <div id="u1549" className="ax_default heading_3">
                    <div id="u1549_div" className=""></div>
                    <div id="u1549_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1550" className="ax_default heading_3">
                    <div id="u1550_div" className=""></div>
                    <div id="u1550_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1551" className="ax_default heading_3">
                    <div id="u1551_div" className=""></div>
                    <div id="u1551_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1552" className="ax_default heading_3">
                    <div id="u1552_div" className=""></div>
                    <div id="u1552_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1553" className="ax_default heading_3">
                    <div id="u1553_div" className=""></div>
                    <div id="u1553_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1554" className="ax_default heading_3">
                    <div id="u1554_div" className=""></div>
                    <div id="u1554_text" className="text ">
                      <p><span>10 Comments </span></p>
                    </div>
                  </div>


                  <div id="u1555" className="ax_default box_1">
                    <div id="u1555_div" className=""></div>
                    <div id="u1555_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1556" className="ax_default box_1">
                    <div id="u1556_div" className=""></div>
                    <div id="u1556_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1557" className="ax_default box_1">
                    <div id="u1557_div" className=""></div>
                    <div id="u1557_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1558" className="ax_default box_1">
                    <div id="u1558_div" className=""></div>
                    <div id="u1558_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1559" className="ax_default box_1">
                    <div id="u1559_div" className=""></div>
                    <div id="u1559_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1560" className="ax_default box_1">
                    <div id="u1560_div" className=""></div>
                    <div id="u1560_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1561" className="ax_default box_1">
                    <div id="u1561_div" className=""></div>
                    <div id="u1561_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1562" className="ax_default box_1">
                    <div id="u1562_div" className=""></div>
                    <div id="u1562_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1563" className="ax_default box_1">
                    <div id="u1563_div" className=""></div>
                    <div id="u1563_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1564" className="ax_default box_1">
                    <div id="u1564_div" className=""></div>
                    <div id="u1564_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1565" className="ax_default box_1">
                    <div id="u1565_div" className=""></div>
                    <div id="u1565_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1566" className="ax_default box_1">
                    <div id="u1566_div" className=""></div>
                    <div id="u1566_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1567" className="ax_default box_1">
                    <div id="u1567_div" className=""></div>
                    <div id="u1567_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1568" className="ax_default box_1">
                    <div id="u1568_div" className=""></div>
                    <div id="u1568_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1569" className="ax_default box_1">
                    <div id="u1569_div" className=""></div>
                    <div id="u1569_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1570" className="ax_default box_1">
                    <div id="u1570_div" className=""></div>
                    <div id="u1570_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1571" className="ax_default box_1">
                    <div id="u1571_div" className=""></div>
                    <div id="u1571_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1572" className="ax_default box_1">
                    <div id="u1572_div" className=""></div>
                    <div id="u1572_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <IonRouterLink href="/food_review">
                  <div id="u1573" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1574" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1575" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1576" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1577" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1578" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1579" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1580" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1581" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1582" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1583" className="ax_default">
                  </div>
                  </IonRouterLink>


                  <IonRouterLink href="/food_review">
                  <div id="u1584" className="ax_default">
                  </div>
                  </IonRouterLink>
                </div>
              </div>
            </div>


            <div id="u1585" className="ax_default image">
              <img id="u1585_img" className="img " src="images/profile/u1585.svg"/>
              <div id="u1585_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1586" className="ax_default">
              <div id="u1586_state0" className="panel_state" data-label="State1" >
                <div id="u1586_state0_content" className="panel_state_content">


                  <div id="u1587" className="ax_default image">
                  <IonRouterLink href="/pic">
                    <img id="u1587_img" className="img " src="images/profile/u1587.svg"/>
                    <div id="u1587_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                    </IonRouterLink>
                  </div>
                </div>
              </div>
            </div>


            <div id="u1588" className="ax_default ax_default_hidden" style={style_display_none_visibility_hidden} data-left="174" data-top="156" data-width="47" data-height="52">


              <div id="u1589" className="ax_default box_1">
                <img id="u1589_img" className="img " src="images/main/u173.svg"/>
                <div id="u1589_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1590" className="ax_default line">
                <img id="u1590_img" className="img " src="images/main/u174.svg"/>
                <div id="u1590_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1591" className="ax_default" data-left="0" data-top="0" data-width="0" data-height="0">


                <div id="u1592" className="ax_default line">
                  <img id="u1592_img" className="img " src="images/main/u176.svg"/>
                  <div id="u1592_text" className="text " style={style_display_none_visibility_hidden}>
                    <p></p>
                  </div>
                </div>


                <div id="u1593" className="ax_default ellipse">
                  <img id="u1593_img" className="img " src="images/main/u177.svg"/>
                  <div id="u1593_text" className="text " style={style_display_none_visibility_hidden}>
                    <p></p>
                  </div>
                </div>


                <div id="u1594" className="ax_default line">
                  <img id="u1594_img" className="img " src="images/main/u178.svg"/>
                  <div id="u1594_text" className="text " style={style_display_none_visibility_hidden}>
                    <p></p>
                  </div>
                </div>


                <div id="u1595" className="ax_default ellipse">
                  <img id="u1595_img" className="img " src="images/main/u179.svg"/>
                  <div id="u1595_text" className="text " style={style_display_none_visibility_hidden}>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>


            <div id="u1596" className="ax_default">
            <IonRouterLink href="/follow">
              <div id="u1596_state0" className="panel_state" data-label="State1" >
                <div id="u1596_state0_content" className="panel_state_content">
                </div>
              </div>
              </IonRouterLink>
            </div>
          </div>
      </IonContent>
    </IonPage>
  );
};
export default Profile;
