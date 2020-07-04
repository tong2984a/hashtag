import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { camera, trash, close } from 'ionicons/icons';
import { IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { usePhotoGallery, Photo } from '../hooks/usePhotoGallery';
import { IonCheckbox, IonLabel, IonItem } from '@ionic/react';

const Tab2: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
  const [checked, setChecked] = useState(false);
  const [photoToDelete, setPhotoToDelete] = useState<Photo>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg
                  onClick={() => setPhotoToDelete(photo)}
                  src={photo.base64 ?? photo.webviewPath} />
                {photo.hashtag}
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonItem>
          <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
          <IonCheckbox checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
        </IonItem>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => {
              takePhoto([JSON.stringify(checked)])
            }}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[{
            text: 'Delete',
            role: 'destructive',
            icon: trash,
            handler: () => {
              if (photoToDelete) {
                deletePhoto(photoToDelete);
                setPhotoToDelete(undefined);
              }
            }
          }, {
            text: 'Cancel',
            icon: close,
            role: 'cancel'
          }]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
