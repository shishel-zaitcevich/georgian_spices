import { memo } from 'react';

import styles from './CollaborationModal.module.scss';

const CollaborationModal: React.FC = () => {
  return (
    <div className={styles.modal}>
      <h2>Yhteistyö ravintoloille</h2>
      <h3>Mitä saat työskennellessäsi kanssamme?</h3>
      <p>
        Erotu aidolla georgialaisella keittiöllä Autamme ravintolaasi luomaan ainutlaatuisen
        identiteetin eksklusiivisten reseptien avulla Georgian eri alueilta: Kakhetiasta,
        Megreliasta ja Svanetiasta. Kyse ei ole vain mausteista, vaan kokonaisesta makukokemuksesta
        ja tarinasta.
      </p>
      <h3>Reseptit, jotka puhuttelevat nykypäivän asiakkaita</h3>
      <p>Vegaaniset ja kasvispainotteiset salaatit georgialaisella twistillä</p>
      <p>
        Hatšapuri adjarialaiseen tapaan (cheese boat) – ikoninen annos tarinalla ja legendalla, joka
        rikastuttaa ruokalistaa
      </p>
      <p>
        Jaettavat annokset ja alkupalat, kuten paistettu leipä vihreällä adjikalla ja
        suluguni-juustolla
      </p>
      <h3>Koulutus ja osaamisen siirto</h3>
      <p>
        Järjestämme käytännönläheisiä master class -koulutuksia georgialaisen keittiön resepteistä
        ja opastamme mausteiden oikeaan käyttöön.
      </p>
      <h3>Tuki suoraan keittiössäsi</h3>
      <p>
        Toimitamme tuotenäytteet keittiöösi ja koulutamme kokkisi valmistamaan ruokia aidosti
        georgialaiseen tapaan.
      </p>
      <p>Lisäarvoa liiketoimintaasi</p>
      <p>Uuden asiakaskunnan tavoittaminen</p>
      <p>Elämyksellinen ja erottuva ruokalista</p>
      <p>Keskimääräisen ostoksen ja myynnin kasvu</p>
    </div>
  );
};

export default memo(CollaborationModal);
