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
import '../theme/files/pic/styles.css';
import { RouteComponentProps } from "react-router-dom";

import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet } from '@ionic/react';

const style_display_none_visibility_hidden: CSSProperties = {
  display: 'none',
  visibility: 'hidden'
}

const style_visibility_hidden: CSSProperties = {
  visibility: 'hidden'
}

interface PicPageProps extends RouteComponentProps<{
  tab: string;
}> { }

const Pic: React.FC<PicPageProps> = ({ match }) => {
  const { takePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonContent>

          <div id="base" className="">


            <div id="u653" className="ax_default">
              <div id="u653_state0" className="panel_state" data-label="State1" >
                <div id="u653_state0_content" className="panel_state_content">


                  <div id="u654" className="ax_default box_1">
                    <div id="u654_div" className=""></div>
                    <div id="u654_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u655" className="ax_default image">
                  <IonRouterLink href="/write_review_2">
                    <img id="u655_img" className="img " src="images/pic/u655.svg"/>
                    </IonRouterLink>
                    <div id="u655_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u656" className="ax_default ellipse">
                  <IonRouterLink onClick={() => takePhoto([])}>
                    <img id="u656_img" className="img " src="images/qr/u615.svg"/>
                    </IonRouterLink>
                    <div id="u656_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u657" className="ax_default image">
                    <img id="u657_img" className="img " src="images/pic/u657.svg"/>
                    <div id="u657_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u658" className="ax_default image">
                  <IonRouterLink href="/main">
                    <img id="u658_img" className="img " src="images/pic/u658.svg"/>
                    <div id="u658_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                    </IonRouterLink>
                  </div>


                  <div id="u659" className="ax_default image">
                    <img id="u659_img" className="img " src="images/pic/u659.png"/>
                    <div id="u659_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u660" className="ax_default image">
                    <img id="u660_img" className="img " src="images/pic/u660.png"/>
                    <div id="u660_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u653_state1" className="panel_state" data-label="State2" style={style_visibility_hidden}>
                <div id="u653_state1_content" className="panel_state_content">


                  <div id="u661" className="ax_default box_1">
                    <div id="u661_div" className=""></div>
                    <div id="u661_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u662" className="ax_default image">
                    <img id="u662_img" className="img " src="images/pic/u662.png"/>
                    <div id="u662_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u663" className="ax_default image">
                    <img id="u663_img" className="img " src="images/pic/u660.png"/>
                    <div id="u663_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u664" className="ax_default image">
                    <img id="u664_img" className="img " src="images/pic/u655.svg"/>
                    <div id="u664_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u665" className="ax_default image">
                    <img id="u665_img" className="img " src="images/pic/u658.svg"/>
                    <div id="u665_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u666" className="ax_default ax_default_hidden" style={style_display_none_visibility_hidden} data-left="0" data-top="0" data-width="414" data-height="736">


              <div id="u667" className="ax_default box_1">
                <img id="u667_img" className="img " src="images/pic/u667.svg"/>
                <div id="u667_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u668" className="ax_default">
                <div id="u668_state0" className="panel_state" data-label="State1" >
                  <div id="u668_state0_content" className="panel_state_content">


                    <div id="u669" className="ax_default" data-left="0" data-top="65" data-width="132" data-height="132">


                      <div id="u670" className="ax_default box_3">
                        <div id="u670_div" className=""></div>
                        <div id="u670_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u671" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u671_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u671_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u672" className="ax_default" data-left="136" data-top="65" data-width="132" data-height="132">


                      <div id="u673" className="ax_default box_3">
                        <div id="u673_div" className=""></div>
                        <div id="u673_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u674" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u674_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u674_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u675" className="ax_default" data-left="272" data-top="65" data-width="132" data-height="132">


                      <div id="u676" className="ax_default box_3">
                        <div id="u676_div" className=""></div>
                        <div id="u676_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u677" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u677_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u677_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u678" className="ax_default" data-left="0" data-top="202" data-width="132" data-height="132">


                      <div id="u679" className="ax_default box_3">
                        <div id="u679_div" className=""></div>
                        <div id="u679_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u680" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u680_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u680_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u681" className="ax_default" data-left="136" data-top="202" data-width="132" data-height="132">


                      <div id="u682" className="ax_default box_3">
                        <div id="u682_div" className=""></div>
                        <div id="u682_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u683" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u683_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u683_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u684" className="ax_default" data-left="272" data-top="202" data-width="132" data-height="132">


                      <div id="u685" className="ax_default box_3">
                        <div id="u685_div" className=""></div>
                        <div id="u685_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u686" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u686_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u686_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u687" className="ax_default" data-left="0" data-top="339" data-width="132" data-height="132">


                      <div id="u688" className="ax_default box_3">
                        <div id="u688_div" className=""></div>
                        <div id="u688_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u689" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u689_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u689_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u690" className="ax_default" data-left="136" data-top="339" data-width="132" data-height="132">


                      <div id="u691" className="ax_default box_3">
                        <div id="u691_div" className=""></div>
                        <div id="u691_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u692" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u692_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u692_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u693" className="ax_default" data-left="272" data-top="339" data-width="132" data-height="132">


                      <div id="u694" className="ax_default box_3">
                        <div id="u694_div" className=""></div>
                        <div id="u694_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u695" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u695_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u695_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u696" className="ax_default" data-left="0" data-top="476" data-width="132" data-height="132">


                      <div id="u697" className="ax_default box_3">
                        <div id="u697_div" className=""></div>
                        <div id="u697_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u698" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u698_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u698_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u699" className="ax_default" data-left="136" data-top="476" data-width="132" data-height="132">


                      <div id="u700" className="ax_default box_3">
                        <div id="u700_div" className=""></div>
                        <div id="u700_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u701" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u701_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u701_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u702" className="ax_default" data-left="272" data-top="476" data-width="132" data-height="132">


                      <div id="u703" className="ax_default box_3">
                        <div id="u703_div" className=""></div>
                        <div id="u703_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u704" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u704_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u704_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u705" className="ax_default" data-left="0" data-top="613" data-width="132" data-height="132">


                      <div id="u706" className="ax_default box_3">
                        <div id="u706_div" className=""></div>
                        <div id="u706_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u707" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u707_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u707_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u708" className="ax_default" data-left="136" data-top="613" data-width="132" data-height="132">


                      <div id="u709" className="ax_default box_3">
                        <div id="u709_div" className=""></div>
                        <div id="u709_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u710" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u710_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u710_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u711" className="ax_default" data-left="272" data-top="613" data-width="132" data-height="132">


                      <div id="u712" className="ax_default box_3">
                        <div id="u712_div" className=""></div>
                        <div id="u712_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u713" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u713_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u713_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u714" className="ax_default" data-left="0" data-top="750" data-width="132" data-height="132">


                      <div id="u715" className="ax_default box_3">
                        <div id="u715_div" className=""></div>
                        <div id="u715_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u716" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u716_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u716_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u717" className="ax_default" data-left="136" data-top="750" data-width="132" data-height="132">


                      <div id="u718" className="ax_default box_3">
                        <div id="u718_div" className=""></div>
                        <div id="u718_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u719" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u719_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u719_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u720" className="ax_default" data-left="272" data-top="750" data-width="132" data-height="132">


                      <div id="u721" className="ax_default box_3">
                        <div id="u721_div" className=""></div>
                        <div id="u721_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u722" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u722_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u722_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u723" className="ax_default" data-left="0" data-top="887" data-width="132" data-height="132">


                      <div id="u724" className="ax_default box_3">
                        <div id="u724_div" className=""></div>
                        <div id="u724_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u725" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u725_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u725_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u726" className="ax_default" data-left="136" data-top="887" data-width="132" data-height="132">


                      <div id="u727" className="ax_default box_3">
                        <div id="u727_div" className=""></div>
                        <div id="u727_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u728" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u728_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u728_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u729" className="ax_default" data-left="272" data-top="887" data-width="132" data-height="132">


                      <div id="u730" className="ax_default box_3">
                        <div id="u730_div" className=""></div>
                        <div id="u730_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u731" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u731_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u731_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u732" className="ax_default" data-left="0" data-top="1024" data-width="132" data-height="132">


                      <div id="u733" className="ax_default box_3">
                        <div id="u733_div" className=""></div>
                        <div id="u733_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u734" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u734_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u734_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u735" className="ax_default" data-left="136" data-top="1024" data-width="132" data-height="132">


                      <div id="u736" className="ax_default box_3">
                        <div id="u736_div" className=""></div>
                        <div id="u736_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u737" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u737_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u737_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u738" className="ax_default" data-left="272" data-top="1024" data-width="132" data-height="132">


                      <div id="u739" className="ax_default box_3">
                        <div id="u739_div" className=""></div>
                        <div id="u739_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u740" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u740_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u740_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u741" className="ax_default" data-left="0" data-top="1161" data-width="132" data-height="132">


                      <div id="u742" className="ax_default box_3">
                        <div id="u742_div" className=""></div>
                        <div id="u742_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u743" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u743_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u743_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u744" className="ax_default" data-left="136" data-top="1161" data-width="132" data-height="132">


                      <div id="u745" className="ax_default box_3">
                        <div id="u745_div" className=""></div>
                        <div id="u745_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u746" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u746_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u746_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u747" className="ax_default" data-left="272" data-top="1161" data-width="132" data-height="132">


                      <div id="u748" className="ax_default box_3">
                        <div id="u748_div" className=""></div>
                        <div id="u748_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u749" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u749_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u749_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u750" className="ax_default" data-left="0" data-top="1298" data-width="132" data-height="132">


                      <div id="u751" className="ax_default box_3">
                        <div id="u751_div" className=""></div>
                        <div id="u751_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u752" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u752_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u752_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u753" className="ax_default" data-left="136" data-top="1298" data-width="132" data-height="132">


                      <div id="u754" className="ax_default box_3">
                        <div id="u754_div" className=""></div>
                        <div id="u754_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u755" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u755_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u755_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u756" className="ax_default" data-left="272" data-top="1298" data-width="132" data-height="132">


                      <div id="u757" className="ax_default box_3">
                        <div id="u757_div" className=""></div>
                        <div id="u757_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u758" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u758_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u758_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u759" className="ax_default" data-left="0" data-top="1435" data-width="132" data-height="132">


                      <div id="u760" className="ax_default box_3">
                        <div id="u760_div" className=""></div>
                        <div id="u760_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u761" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u761_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u761_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u762" className="ax_default" data-left="136" data-top="1435" data-width="132" data-height="132">


                      <div id="u763" className="ax_default box_3">
                        <div id="u763_div" className=""></div>
                        <div id="u763_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u764" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u764_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u764_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u765" className="ax_default" data-left="272" data-top="1435" data-width="132" data-height="132">


                      <div id="u766" className="ax_default box_3">
                        <div id="u766_div" className=""></div>
                        <div id="u766_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u767" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u767_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u767_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u768" className="ax_default" data-left="0" data-top="1572" data-width="132" data-height="132">


                      <div id="u769" className="ax_default box_3">
                        <div id="u769_div" className=""></div>
                        <div id="u769_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u770" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u770_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u770_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u771" className="ax_default" data-left="136" data-top="1572" data-width="132" data-height="132">


                      <div id="u772" className="ax_default box_3">
                        <div id="u772_div" className=""></div>
                        <div id="u772_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u773" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u773_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u773_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u774" className="ax_default" data-left="272" data-top="1572" data-width="132" data-height="132">


                      <div id="u775" className="ax_default box_3">
                        <div id="u775_div" className=""></div>
                        <div id="u775_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u776" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u776_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u776_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u777" className="ax_default" data-left="0" data-top="1709" data-width="132" data-height="132">


                      <div id="u778" className="ax_default box_3">
                        <div id="u778_div" className=""></div>
                        <div id="u778_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u779" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u779_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u779_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u780" className="ax_default" data-left="136" data-top="1709" data-width="132" data-height="132">


                      <div id="u781" className="ax_default box_3">
                        <div id="u781_div" className=""></div>
                        <div id="u781_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u782" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u782_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u782_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u783" className="ax_default" data-left="272" data-top="1709" data-width="132" data-height="132">


                      <div id="u784" className="ax_default box_3">
                        <div id="u784_div" className=""></div>
                        <div id="u784_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u785" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u785_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u785_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u786" className="ax_default" data-left="0" data-top="1846" data-width="132" data-height="132">


                      <div id="u787" className="ax_default box_3">
                        <div id="u787_div" className=""></div>
                        <div id="u787_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u788" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u788_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u788_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u789" className="ax_default" data-left="136" data-top="1846" data-width="132" data-height="132">


                      <div id="u790" className="ax_default box_3">
                        <div id="u790_div" className=""></div>
                        <div id="u790_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u791" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u791_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u791_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u792" className="ax_default" data-left="272" data-top="1846" data-width="132" data-height="132">


                      <div id="u793" className="ax_default box_3">
                        <div id="u793_div" className=""></div>
                        <div id="u793_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u794" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u794_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u794_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u795" className="ax_default" data-left="0" data-top="1983" data-width="132" data-height="132">


                      <div id="u796" className="ax_default box_3">
                        <div id="u796_div" className=""></div>
                        <div id="u796_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u797" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u797_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u797_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u798" className="ax_default" data-left="136" data-top="1983" data-width="132" data-height="132">


                      <div id="u799" className="ax_default box_3">
                        <div id="u799_div" className=""></div>
                        <div id="u799_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u800" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u800_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u800_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>


                    <div id="u801" className="ax_default" data-left="272" data-top="1983" data-width="132" data-height="132">


                      <div id="u802" className="ax_default box_3">
                        <div id="u802_div" className=""></div>
                        <div id="u802_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>


                      <div id="u803" className="ax_default box_1 ax_default_hidden" style={style_display_none_visibility_hidden}>
                        <img id="u803_img" className="img " src="images/pic/u671.svg"/>
                        <div id="u803_text" className="text " style={style_display_none_visibility_hidden}>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div id="u804" className="ax_default box_1">
                <img id="u804_img" className="img " src="images/pic/u804.svg"/>
                <div id="u804_text" className="text ">
                  <p><span>&nbsp;</span></p>
                </div>
              </div>


              <div id="u805" className="ax_default image">
                <img id="u805_img" className="img " src="images/pic/u805.png"/>
                <div id="u805_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u806" className="ax_default heading_3">
                <div id="u806_div" className=""></div>
                <div id="u806_text" className="text ">
                  <p><span>Picture gallery</span></p>
                </div>
              </div>


              <div id="u807" className="ax_default" data-left="0" data-top="0" data-width="0" data-height="0">


                <div id="u808" className="ax_default line">
                  <img id="u808_img" className="img " src="images/pic/u808.svg"/>
                  <div id="u808_text" className="text " style={style_display_none_visibility_hidden}>
                    <p></p>
                  </div>
                </div>


                <div id="u809" className="ax_default line">
                  <img id="u809_img" className="img " src="images/pic/u809.svg"/>
                  <div id="u809_text" className="text " style={style_display_none_visibility_hidden}>
                    <p></p>
                  </div>
                </div>
              </div>


              <div id="u810" className="ax_default">
              </div>
            </div>
          </div>

      </IonContent>
    </IonPage>
  );
};
export default Pic;
