import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRouterLink,
  IonCheckbox,
  IonLabel,
  IonThumbnail,
  IonItem,
  IonButton,
  IonList
} from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import { CSSProperties } from "react";
import '../theme/resources/css/axure_rp_page.css';
import '../theme/data/styles.css';
import '../theme/files/write_review_2/styles.css';
import { RouteComponentProps } from "react-router-dom";

import { IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { usePhotoGallery, Photo } from '../hooks/usePhotoGallery';

const style_display_none_visibility_hidden: CSSProperties = {
  display: 'none',
  visibility: 'hidden'
}

const style_visibility_hidden: CSSProperties = {
  visibility: 'hidden'
}

const style_position_absolute_left_0px: CSSProperties = {
  position: 'absolute',
  left: '0px'
}

interface WriteReview2PageProps extends RouteComponentProps<{
  tab: string;
}> { }

const WriteReview2: React.FC<WriteReview2PageProps> = ({ match }) => {
  const { photos, takePhoto, deletePhoto, saveHashtag, saveHashtagToPhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<Photo>();
  const [photoToEdit, setPhotoToEdit] = useState<Photo>();
  const [hashtags, setHashtags] = useState<string[]>([]);

  useEffect(() => {
    console.log("useEffect");
    setPhotoToEdit(prevState => {
      console.log("setPhotoToEdit");
      if (prevState) {
        console.log("useEffect1");
        let a = [...(prevState.hashtag as string[])];
        console.log(a);
        return prevState;
      } else if (photos.length > 0) {
        console.log("useEffect2");
        let a = [...(photos[0].hashtag as string[])];
        console.log(a);
        setHashtags(a);
        return photos[0];
      } else {
        console.log("useEffect3");
        return undefined;
      }
    })
    console.log("hashtags:" + hashtags);
    console.log("useEffect4");
  }, [photos])

  const changeHashtag = <P extends keyof string>(event: CustomEvent, prop: string, value: boolean) => {
    event.preventDefault();
    console.log("changeHashtag");
    if (event.target) {
      const target = event.target as HTMLInputElement;
      if (target.checked) {
          console.log("adding" + prop);
          setHashtags(prevState => {
            if (!prevState.includes(prop)) {
              return [...prevState, prop];
            } else {
              return prevState;
            }
          });
      } else {
          console.log("minus" + prop);
          setHashtags(prevState => {
            if (prevState.includes(prop)) {
              return prevState.filter(h => h !== prop);
            } else {
              return prevState;
            }
          });
      }
    }
    console.log("changeHashtag2:" + hashtags);
  };

  const changePhoto = <P extends keyof Photo>(photo: Photo) => {
    console.log("changePhoto1");
    setPhotoToEdit(prevState => {
      if (prevState) {
        if (prevState.filepath === photo.filepath) {
          setPhotoToDelete(prevState);
          return prevState;
        } else {
          setPhotoToDelete(undefined);
          return photo;
        }
      } else {
        setPhotoToDelete(undefined);
        return photo;
      }
    });
    if (photo.hashtag) {
      setHashtags([...photo.hashtag]);
    }
  };

  return (
    <IonPage>
      <IonContent>

          <div id="base" className="">


            <div id="u1177" className="ax_default" data-left="11" data-top="767" data-width="392" data-height="284">


              <div id="u1178" className="ax_default box_1">
                <img id="u1178_img" className="img " src="images/write_review_2/u1178.svg"/>
                <div id="u1178_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1179" className="ax_default checkbox">
                <label id="u1179_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1179_img" className="img " src="images/write_review_2/u1179.svg"/>
                  <div id="u1179_text" className="text ">
                    <p><span>#containdairy</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('containdairy')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'containdairy', !hashtags.includes('containdairy'))
                  }} />
              </div>


              <div id="u1180" className="ax_default checkbox">
                <label id="u1180_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1180_img" className="img " src="images/write_review_2/u1180.svg"/>
                  <div id="u1180_text" className="text ">
                    <p><span>#containegg</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('containegg')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'containegg', !hashtags.includes('containegg'))
                  }} />
              </div>


              <div id="u1181" className="ax_default checkbox">
                <label id="u1181_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1181_img" className="img " src="images/write_review_2/u1181.svg"/>
                  <div id="u1181_text" className="text ">
                    <p><span>#dairyfree</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('dairyfree')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'dairyfree', !hashtags.includes('dairyfree'))
                  }} />
              </div>


              <div id="u1182" className="ax_default checkbox">
                <label id="u1182_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1182_img" className="img " src="images/write_review_2/u1182.svg"/>
                  <div id="u1182_text" className="text ">
                    <p><span>#eggfree</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('eggfree')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'eggfree', !hashtags.includes('eggfree'))
                  }} />
              </div>


              <div id="u1183" className="ax_default checkbox">
                <label id="u1183_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1183_img" className="img " src="images/write_review_2/u1183.svg"/>
                  <div id="u1183_text" className="text ">
                    <p><span>#nuts</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('nuts')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'nuts', !hashtags.includes('nuts'))
                  }} />
              </div>


              <div id="u1184" className="ax_default checkbox">
                <label id="u1184_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1184_img" className="img " src="images/write_review_2/u1184.svg"/>
                  <div id="u1184_text" className="text ">
                    <p><span>#garlic</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('garlic')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'garlic', !hashtags.includes('garlic'))
                  }} />
              </div>


              <div id="u1185" className="ax_default checkbox">
                <label id="u1185_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1185_img" className="img " src="images/write_review_2/u1185.svg"/>
                  <div id="u1185_text" className="text ">
                    <p><span>#onion</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('onion')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'onion', !hashtags.includes('onion'))
                  }} />
              </div>


              <div id="u1186" className="ax_default checkbox">
                <label id="u1186_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1186_img" className="img " src="images/write_review_2/u1186.svg"/>
                  <div id="u1186_text" className="text ">
                    <p><span>#glutenfree</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('glutenfree')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'glutenfree', !hashtags.includes('glutenfree'))
                  }} />
              </div>


              <div id="u1187" className="ax_default checkbox">
                <label id="u1187_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1187_img" className="img " src="images/write_review_2/u1187.svg"/>
                  <div id="u1187_text" className="text ">
                    <p><span>#soybean</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('soybean')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'soybean', !hashtags.includes('soybean'))
                  }} />
              </div>


              <div id="u1188" className="ax_default checkbox">
                <label id="u1188_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1188_img" className="img " src="images/write_review_2/u1188.svg"/>
                  <div id="u1188_text" className="text ">
                    <p><span>#organic</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('organic')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'organic', !hashtags.includes('organic'))
                  }} />
              </div>


              <div id="u1189" className="ax_default checkbox">
                <label id="u1189_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1189_img" className="img " src="images/write_review_2/u1189.svg"/>
                  <div id="u1189_text" className="text ">
                    <p><span>#localsource</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('localsource')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'localsource', !hashtags.includes('localsource'))
                  }} />
              </div>


              <div id="u1190" className="ax_default checkbox">
                <label id="u1190_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1190_img" className="img " src="images/write_review_2/u1190.svg"/>
                  <div id="u1190_text" className="text ">
                    <p><span>#honey</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('honey')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'honey', !hashtags.includes('honey'))
                  }} />
              </div>


              <div id="u1191" className="ax_default checkbox">
                <label id="u1191_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1191_img" className="img " src="images/write_review_2/u1191.svg"/>
                  <div id="u1191_text" className="text ">
                    <p><span>#separatewok</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('separatewok')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'separatewok', !hashtags.includes('separatewok'))
                  }} />
              </div>


              <div id="u1192" className="ax_default checkbox">
                <label id="u1192_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1192_img" className="img " src="images/write_review_2/u1192.svg"/>
                  <div id="u1192_text" className="text ">
                    <p><span>#samewok</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('samewok')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'samewok', !hashtags.includes('samewok'))
                  }} />
              </div>


              <div id="u1193" className="ax_default checkbox">
                <label id="u1193_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1193_img" className="img " src="images/write_review_2/u1193.svg"/>
                  <div id="u1193_text" className="text ">
                    <p><span>#oystersauce</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('oystersauce')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'oystersauce', !hashtags.includes('oystersauce'))
                  }} />
              </div>


              <div id="u1194" className="ax_default checkbox">
                <label id="u1194_input_label"  style={style_position_absolute_left_0px}>
                  <img id="u1194_img" className="img " src="images/write_review_2/u1194.svg"/>
                  <div id="u1194_text" className="text ">
                    <p><span>#MSG</span></p>
                  </div>
                </label>
                <IonCheckbox slot="none" color="light" checked={hashtags.includes('MSG')}
                  onIonChange={(e) => {
                    changeHashtag(e, 'MSG', !hashtags.includes('MSG'))
                  }} />
              </div>
            </div>


            <div id="u1195" className="ax_default" data-label="Food Pic">
              <div id="u1195_state0" className="panel_state" data-label="State1" >
                <div id="u1195_state0_content" className="panel_state_content">

                  <div id="u1196" className="ax_default box_3">
                    <IonList>

                                  {photos.map((photo, index) => (


                                    <IonItem
                                      color={photoToEdit && photoToEdit.filepath === photo.filepath ? "primary" : ""}
                                      onClick={() => changePhoto(photo)} >
                                      <IonThumbnail >
                                        <IonImg
                                          src={photo.base64 ?? photo.webviewPath}
                                          />
                                      </IonThumbnail>
                                      <IonLabel  className="ion-text-wrap">
                                        {photo && photo.hashtag ? photo.hashtag.join(", ") : ""}
                                      </IonLabel>
                                      </IonItem>

                                  ))}
                      </IonList>
                    <div id="u1196_text" className="text " style={style_display_none_visibility_hidden}>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u1204" className="ax_default box_1">
              <img id="u1204_img" className="img " src="images/pic/u804.svg"/>
              <div id="u1204_text" className="text ">
                <p><span>&nbsp;</span></p>
              </div>
            </div>


            <div id="u1205" className="ax_default image">
            <IonRouterLink href="/pic">
              <img id="u1205_img" className="img " src="images/write_review/u1171.svg"/>
              <div id="u1205_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
              </IonRouterLink>
            </div>


            <div id="u1206" className="ax_default" data-label="Silding bar">
              <div id="u1206_state0" className="panel_state" data-label="State1" >
                <div id="u1206_state0_content" className="panel_state_content">


                  <div id="u1207" className="ax_default box_3">
                    <div id="u1207_div" className=""></div>
                    <div id="u1207_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1208" className="ax_default box_3">
                    <div id="u1208_div" className=""></div>
                    <div id="u1208_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1209" className="ax_default box_3">
                    <div id="u1209_div" className=""></div>
                    <div id="u1209_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1210" className="ax_default box_3">
                    <div id="u1210_div" className=""></div>
                    <div id="u1210_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u1206_state1" className="panel_state" data-label="State2" style={style_visibility_hidden}>
                <div id="u1206_state1_content" className="panel_state_content">


                  <div id="u1211" className="ax_default box_3">
                    <div id="u1211_div" className=""></div>
                    <div id="u1211_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1212" className="ax_default box_3">
                    <div id="u1212_div" className=""></div>
                    <div id="u1212_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1213" className="ax_default box_3">
                    <div id="u1213_div" className=""></div>
                    <div id="u1213_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1214" className="ax_default box_3">
                    <div id="u1214_div" className=""></div>
                    <div id="u1214_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u1206_state2" className="panel_state" data-label="State3" style={style_visibility_hidden}>
                <div id="u1206_state2_content" className="panel_state_content">


                  <div id="u1215" className="ax_default box_3">
                    <div id="u1215_div" className=""></div>
                    <div id="u1215_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1216" className="ax_default box_3">
                    <div id="u1216_div" className=""></div>
                    <div id="u1216_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1217" className="ax_default box_3">
                    <div id="u1217_div" className=""></div>
                    <div id="u1217_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1218" className="ax_default box_3">
                    <div id="u1218_div" className=""></div>
                    <div id="u1218_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u1206_state3" className="panel_state" data-label="State4" style={style_visibility_hidden}>
                <div id="u1206_state3_content" className="panel_state_content">


                  <div id="u1219" className="ax_default box_3">
                    <div id="u1219_div" className=""></div>
                    <div id="u1219_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1220" className="ax_default box_3">
                    <div id="u1220_div" className=""></div>
                    <div id="u1220_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1221" className="ax_default box_3">
                    <div id="u1221_div" className=""></div>
                    <div id="u1221_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1222" className="ax_default box_3">
                    <div id="u1222_div" className=""></div>
                    <div id="u1222_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u1223" className="ax_default text_area">
              <div id="u1223_div" className=""></div>
              <textarea id="u1223_input" className="u1223_input">Write your review</textarea>
            </div>


            <div id="u1224" className="ax_default primary_button">


              <div id="u1224_text" className="text ">
              <IonButton color="success" onClick={() => {
                  //saveHashtag(hashtags)
                  if (photoToEdit) {
                    saveHashtagToPhoto(photoToEdit, [...hashtags])
                  }
                }} >
                <p><span>Share</span></p>
                </IonButton>
              </div>
            </div>


            <div id="u1225" className="ax_default">
              <div id="u1225_state0" className="panel_state" data-label="State1" >
                <div id="u1225_state0_content" className="panel_state_content">


                  <div id="u1226" className="ax_default" data-left="0" data-top="2" data-width="190" data-height="21">


                    <div id="u1227" className="ax_default image">
                      <img id="u1227_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1227_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1228" className="ax_default image">
                      <img id="u1228_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1228_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1229" className="ax_default image">
                      <img id="u1229_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1229_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1230" className="ax_default image">
                      <img id="u1230_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1230_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1231" className="ax_default image">
                      <img id="u1231_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1231_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1232" className="ax_default image ax_default_hidden" data-label="5.1" style={style_display_none_visibility_hidden}>
                      <img id="u1232_img" className="img " src="images/main/u42.png"/>
                      <div id="u1232_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1233" className="ax_default image ax_default_hidden" data-label="1.1" style={style_display_none_visibility_hidden}>
                      <img id="u1233_img" className="img " src="images/main/u42.png"/>
                      <div id="u1233_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1234" className="ax_default image ax_default_hidden" data-label="2.1" style={style_display_none_visibility_hidden}>
                      <img id="u1234_img" className="img " src="images/main/u42.png"/>
                      <div id="u1234_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1235" className="ax_default image ax_default_hidden" data-label="3.1" style={style_display_none_visibility_hidden}>
                      <img id="u1235_img" className="img " src="images/main/u42.png"/>
                      <div id="u1235_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1236" className="ax_default image ax_default_hidden" data-label="4.1" style={style_display_none_visibility_hidden}>
                      <img id="u1236_img" className="img " src="images/main/u42.png"/>
                      <div id="u1236_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u1225_state1" className="panel_state" data-label="State2" style={style_visibility_hidden}>
                <div id="u1225_state1_content" className="panel_state_content">


                  <div id="u1237" className="ax_default" data-left="0" data-top="2" data-width="190" data-height="21">


                    <div id="u1238" className="ax_default image">
                      <img id="u1238_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1238_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1239" className="ax_default image">
                      <img id="u1239_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1239_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1240" className="ax_default image">
                      <img id="u1240_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1240_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1241" className="ax_default image">
                      <img id="u1241_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1241_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1242" className="ax_default image">
                      <img id="u1242_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1242_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1243" className="ax_default image ax_default_hidden" data-label="5.1" style={style_display_none_visibility_hidden}>
                      <img id="u1243_img" className="img " src="images/main/u42.png"/>
                      <div id="u1243_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1244" className="ax_default image ax_default_hidden" data-label="1.1" style={style_display_none_visibility_hidden}>
                      <img id="u1244_img" className="img " src="images/main/u42.png"/>
                      <div id="u1244_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1245" className="ax_default image ax_default_hidden" data-label="2.1" style={style_display_none_visibility_hidden}>
                      <img id="u1245_img" className="img " src="images/main/u42.png"/>
                      <div id="u1245_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1246" className="ax_default image ax_default_hidden" data-label="3.1" style={style_display_none_visibility_hidden}>
                      <img id="u1246_img" className="img " src="images/main/u42.png"/>
                      <div id="u1246_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1247" className="ax_default image ax_default_hidden" data-label="4.1" style={style_display_none_visibility_hidden}>
                      <img id="u1247_img" className="img " src="images/main/u42.png"/>
                      <div id="u1247_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u1225_state2" className="panel_state" data-label="State3" style={style_visibility_hidden}>
                <div id="u1225_state2_content" className="panel_state_content">


                  <div id="u1248" className="ax_default" data-left="0" data-top="2" data-width="190" data-height="21">


                    <div id="u1249" className="ax_default image">
                      <img id="u1249_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1249_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1250" className="ax_default image">
                      <img id="u1250_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1250_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1251" className="ax_default image">
                      <img id="u1251_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1251_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1252" className="ax_default image">
                      <img id="u1252_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1252_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1253" className="ax_default image">
                      <img id="u1253_img" className="img " src="images/receipt_review/u975.png"/>
                      <div id="u1253_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1254" className="ax_default image ax_default_hidden" data-label="5.1" style={style_display_none_visibility_hidden}>
                      <img id="u1254_img" className="img " src="images/main/u42.png"/>
                      <div id="u1254_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1255" className="ax_default image ax_default_hidden" data-label="1.1" style={style_display_none_visibility_hidden}>
                      <img id="u1255_img" className="img " src="images/main/u42.png"/>
                      <div id="u1255_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1256" className="ax_default image ax_default_hidden" data-label="2.1" style={style_display_none_visibility_hidden}>
                      <img id="u1256_img" className="img " src="images/main/u42.png"/>
                      <div id="u1256_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1257" className="ax_default image ax_default_hidden" data-label="3.1" style={style_display_none_visibility_hidden}>
                      <img id="u1257_img" className="img " src="images/main/u42.png"/>
                      <div id="u1257_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1258" className="ax_default image ax_default_hidden" data-label="4.1" style={style_display_none_visibility_hidden}>
                      <img id="u1258_img" className="img " src="images/main/u42.png"/>
                      <div id="u1258_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u1259" className="ax_default">
              <div id="u1259_state0" className="panel_state" data-label="State1" >
                <div id="u1259_state0_content" className="panel_state_content">


                  <div id="u1260" className="ax_default box_1" data-label="Blu">
                    <img id="u1260_img" className="img " src="images/write_review_2/blu_u1260.svg"/>
                    <div id="u1260_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1261" className="ax_default box_1" data-label="Org">
                    <img id="u1261_img" className="img " src="images/write_review_2/org_u1261.svg"/>
                    <div id="u1261_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1262" className="ax_default box_1" data-label="Gre">
                    <img id="u1262_img" className="img " src="images/write_review_2/gre_u1262.svg"/>
                    <div id="u1262_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1263" className="ax_default box_1 ax_default_hidden" data-label="Blu X" style={style_display_none_visibility_hidden}>
                    <img id="u1263_img" className="img " src="images/write_review_2/blu_u1260.svg"/>
                    <div id="u1263_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1264" className="ax_default box_1 ax_default_hidden" data-label="Org X" style={style_display_none_visibility_hidden}>
                    <img id="u1264_img" className="img " src="images/write_review_2/org_u1261.svg"/>
                    <div id="u1264_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1265" className="ax_default box_1 ax_default_hidden" data-label="Gre X" style={style_display_none_visibility_hidden}>
                    <img id="u1265_img" className="img " src="images/write_review_2/gre_u1262.svg"/>
                    <div id="u1265_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u1259_state1" className="panel_state" data-label="State2" style={style_visibility_hidden}>
                <div id="u1259_state1_content" className="panel_state_content">


                  <div id="u1266" className="ax_default box_1" data-label="Blu">
                    <img id="u1266_img" className="img " src="images/write_review_2/blu_u1260.svg"/>
                    <div id="u1266_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1267" className="ax_default box_1" data-label="Org">
                    <img id="u1267_img" className="img " src="images/write_review_2/org_u1261.svg"/>
                    <div id="u1267_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1268" className="ax_default box_1" data-label="Gre">
                    <img id="u1268_img" className="img " src="images/write_review_2/gre_u1262.svg"/>
                    <div id="u1268_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1269" className="ax_default box_1 ax_default_hidden" data-label="Blu X" style={style_display_none_visibility_hidden}>
                    <img id="u1269_img" className="img " src="images/write_review_2/blu_u1260.svg"/>
                    <div id="u1269_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1270" className="ax_default box_1 ax_default_hidden" data-label="Org X" style={style_display_none_visibility_hidden}>
                    <img id="u1270_img" className="img " src="images/write_review_2/org_u1261.svg"/>
                    <div id="u1270_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1271" className="ax_default box_1 ax_default_hidden" data-label="Gre X" style={style_display_none_visibility_hidden}>
                    <img id="u1271_img" className="img " src="images/write_review_2/gre_u1262.svg"/>
                    <div id="u1271_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u1259_state2" className="panel_state" data-label="State3" style={style_visibility_hidden}>
                <div id="u1259_state2_content" className="panel_state_content">


                  <div id="u1272" className="ax_default box_1" data-label="Blu">
                    <img id="u1272_img" className="img " src="images/write_review_2/blu_u1260.svg"/>
                    <div id="u1272_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1273" className="ax_default box_1" data-label="Org">
                    <img id="u1273_img" className="img " src="images/write_review_2/org_u1261.svg"/>
                    <div id="u1273_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1274" className="ax_default box_1" data-label="Gre">
                    <img id="u1274_img" className="img " src="images/write_review_2/gre_u1262.svg"/>
                    <div id="u1274_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1275" className="ax_default box_1 ax_default_hidden" data-label="Blu X" style={style_display_none_visibility_hidden}>
                    <img id="u1275_img" className="img " src="images/write_review_2/blu_u1260.svg"/>
                    <div id="u1275_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1276" className="ax_default box_1 ax_default_hidden" data-label="Org X" style={style_display_none_visibility_hidden}>
                    <img id="u1276_img" className="img " src="images/write_review_2/org_u1261.svg"/>
                    <div id="u1276_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1277" className="ax_default box_1 ax_default_hidden" data-label="Gre X" style={style_display_none_visibility_hidden}>
                    <img id="u1277_img" className="img " src="images/write_review_2/gre_u1262.svg"/>
                    <div id="u1277_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="u1278" className="ax_default text_area">
              <div id="u1278_div" className=""></div>
              <textarea id="u1278_input" className="u1278_input">Title</textarea>
            </div>


            <div id="u1279" className="ax_default text_area">
              <div id="u1279_div" className=""></div>
              <textarea id="u1279_input" className="u1279_input">Review Heading</textarea>
            </div>


            <div id="u1280" className="ax_default line">
              <img id="u1280_img" className="img " src="images/write_review_2/u1280.svg"/>
              <div id="u1280_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1281" className="ax_default box_1">
              <div id="u1281_div" className=""></div>
              <div id="u1281_text" className="text ">
                <p><span>?</span></p>
              </div>
            </div>


            <div id="u1282" className="ax_default ax_default_hidden" style={style_display_none_visibility_hidden}>
              <div id="u1282_state0" className="panel_state" data-label="State1" >
                <div id="u1282_state0_content" className="panel_state_content">


                  <div id="u1283" className="ax_default box_1">
                    <img id="u1283_img" className="img " src="images/classification/u591.svg"/>
                    <div id="u1283_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1284" className="ax_default box_3">
                    <div id="u1284_div" className=""></div>
                    <div id="u1284_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1285" className="ax_default heading_3">
                    <div id="u1285_div" className=""></div>
                    <div id="u1285_text" className="text ">
                      <p><span>VEG</span></p>
                    </div>
                  </div>


                  <div id="u1286" className="ax_default image">
                    <div id="u1286_div" className=""></div>
                    <div id="u1286_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1287" className="ax_default heading_3">
                    <div id="u1287_div" className=""></div>
                    <div id="u1287_text" className="text ">
                      <p><span>R</span></p>
                    </div>
                  </div>


                  <div id="u1288" className="ax_default box_3">
                    <div id="u1288_div" className=""></div>
                    <div id="u1288_text" className="text " style={style_display_none_visibility_hidden}>
                      <p></p>
                    </div>
                  </div>


                  <div id="u1289" className="ax_default heading_3">
                    <div id="u1289_div" className=""></div>
                    <div id="u1289_text" className="text ">
                      <p><span>V</span></p>
                    </div>
                  </div>


                  <div id="u1290" className="ax_default primary_button">
                    <div id="u1290_div" className=""></div>
                    <div id="u1290_text" className="text ">
                      <p><span>Got it</span></p>
                    </div>
                  </div>


                  <div id="u1291" className="ax_default paragraph">
                    <div id="u1291_div" className=""></div>
                    <div id="u1291_text" className="text ">
                      <p><span>Regular Restaurant with Vegan / Vegetarian Option</span></p>
                    </div>
                  </div>


                  <div id="u1292" className="ax_default paragraph">
                    <div id="u1292_div" className=""></div>
                    <div id="u1292_text" className="text ">
                      <p><span>Vegetarian</span></p>
                    </div>
                  </div>


                  <div id="u1293" className="ax_default paragraph">
                    <div id="u1293_div" className=""></div>
                    <div id="u1293_text" className="text ">
                      <p><span>Vegan</span></p>
                    </div>
                  </div>


                  <div id="u1294" className="ax_default paragraph">
                    <div id="u1294_div" className=""></div>
                    <div id="u1294_text" className="text ">
                      <p><span>People who wanted to get healthy and started to eat vegetables </span></p>
                    </div>
                  </div>


                  <div id="u1295" className="ax_default paragraph">
                    <div id="u1295_div" className=""></div>
                    <div id="u1295_text" className="text ">
                      <p><span>People who abstaining from the consumption of meat , and may also include abstention from by-products of animal slaughter</span></p>
                    </div>
                  </div>


                  <div id="u1296" className="ax_default paragraph">
                    <div id="u1296_div" className=""></div>
                    <div id="u1296_text" className="text ">
                      <p><span>People who abstaining from the use of animal products</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <IonActionSheet
            isOpen={!!photoToDelete}
            buttons={[{
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                if (photoToDelete) {
                  deletePhoto(photoToDelete);
                  setPhotoToEdit(undefined);
                  setPhotoToDelete(undefined);
                }
              }
            }, {
              text: 'Cancel',
              icon: close,
              role: 'cancel'
            }]}
            onDidDismiss={() => {
              setPhotoToDelete(undefined);
            }}
          />
      </IonContent>
    </IonPage>
  );
};
export default WriteReview2;
