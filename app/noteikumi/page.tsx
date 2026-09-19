import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lietošanas noteikumi — irvieta",
  description:
    "irvieta.lv mājaslapas un agrīnās piekļuves pieteikšanās lietošanas noteikumi.",
  alternates: { canonical: "/noteikumi" },
};

const UPDATED_AT = "2026. gada 19. septembra";

export default function TermsPage() {
  return (
    <LegalPage title="Lietošanas noteikumi" updatedAt={UPDATED_AT}>
      <p>
        Šie noteikumi attiecas uz mājaslapu irvieta.lv un pieteikšanos agrīnajai
        piekļuvei. Tie <strong>neattiecas</strong> uz pašu irvieta platformu — kad tā
        būs gatava, publicēsim atsevišķus platformas lietošanas noteikumus, un tev būs
        iespēja ar tiem iepazīties pirms reģistrācijas.
      </p>

      <h2>1. Ko mēs šobrīd piedāvājam</h2>
      <p>
        Šobrīd irvieta.lv ir informatīva mājaslapa ar iespēju pieteikties gaidīšanas
        sarakstam. Platforma vēl nedarbojas: šeit nevar ievietot sludinājumus, atrast
        braucējus vai veikt maksājumus. Vienīgais, ko var izdarīt, — atstāt savu
        e-pastu, lai uzzinātu par palaišanu.
      </p>

      <h2>2. Pieteikšanās gaidīšanas sarakstam</h2>
      <ul>
        <li>Norādi savu e-pasta adresi — tādu, kas tev pieder un ir derīga.</li>
        <li>Pieteikšanās ir bez maksas un neuzliek tev nekādas saistības.</li>
        <li>
          Pieteikšanās negarantē vietu, piekļuvi vai kādus īpašus nosacījumus pēc
          palaišanas.
        </li>
        <li>Pakalpojums paredzēts personām no 16 gadu vecuma.</li>
      </ul>

      <h2>3. Ko nedrīkst darīt</h2>
      <p>Lūdzam neizmantot šo mājaslapu, lai:</p>
      <ul>
        <li>pieteiktu svešas e-pasta adreses bez to īpašnieku ziņas;</li>
        <li>veiktu automatizētu vai masveida pieteikšanos (boti, skripti);</li>
        <li>traucētu mājaslapas darbību vai mēģinātu piekļūt datiem bez atļaujas;</li>
        <li>kopētu mājaslapas saturu komerciālai izmantošanai bez mūsu piekrišanas.</li>
      </ul>
      <p>
        Mēs paturam tiesības dzēst pieteikumus, kas neatbilst šiem noteikumiem, un
        ierobežot piekļuvi, ja mājaslapa tiek izmantota ļaunprātīgi.
      </p>

      <h2>4. Informācija mājaslapā nav piedāvājums</h2>
      <p>
        Mājaslapā aprakstītās funkcijas, cenas (tostarp 4.90&nbsp;€ mēnesī braucējiem)
        un plānotais palaišanas laiks ir <strong>informatīvi un provizoriski</strong>.
        Tie var mainīties, līdz platforma tiek palaista, un nav uzskatāmi par
        publisku piedāvājumu vai saistošu solījumu. Mēs necenšamies tevi maldināt —
        vienkārši produkts vēl top.
      </p>

      <h2>5. Mēs negarantējam nepārtrauktu darbību</h2>
      <p>
        Mājaslapa tiek piedāvāta tāda, kāda tā ir. Mēs cenšamies, lai tā darbotos
        droši un bez pārtraukumiem, bet negarantējam, ka tā vienmēr būs pieejama vai
        bez kļūdām. Mājaslapu jebkurā brīdī varam mainīt, apturēt vai slēgt.
      </p>

      <h2>6. Atbildība</h2>
      <p>
        Ciktāl to pieļauj likums, mēs neatbildam par netiešiem zaudējumiem, kas
        radušies no mājaslapas lietošanas vai nepieejamības. Šie noteikumi neierobežo
        tiesības, kas tev ir kā patērētājam saskaņā ar Latvijas Republikas likumiem.
      </p>

      <h2>7. Intelektuālais īpašums</h2>
      <p>
        Nosaukums &bdquo;irvieta&ldquo;, mājaslapas dizains, teksti un grafiskie
        elementi pieder mums. Tos drīkst citēt ar atsauci, bet ne izmantot tā, lai
        radītu iespaidu, ka tavs pakalpojums ir saistīts ar irvieta.
      </p>

      <h2>8. Personas dati</h2>
      <p>
        Kā apstrādājam tavu e-pastu, aprakstīts{" "}
        <a href="/privatuma-politika">privātuma politikā</a>.
      </p>

      <h2>9. Piemērojamie likumi</h2>
      <p>
        Šiem noteikumiem piemērojami Latvijas Republikas likumi. Strīdus vispirms
        cenšamies atrisināt sarunājoties; ja nesanāk — tos izskata Latvijas Republikas
        tiesa.
      </p>

      <h2>10. Izmaiņas noteikumos</h2>
      <p>
        Noteikumus varam papildināt. Aktuālā versija vienmēr būs pieejama šajā lapā,
        un datums lapas augšā rādīs, kad tā pēdējoreiz mainīta.
      </p>

      <h2>11. Kontakti</h2>
      <p>
        Jautājumi par noteikumiem —{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
