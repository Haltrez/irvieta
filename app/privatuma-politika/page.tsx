import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privātuma politika — irvieta",
  description:
    "Kā irvieta apstrādā tavus personas datus, kad piesakies agrīnajai piekļuvei. Kādus datus vācam, kāpēc, cik ilgi glabājam un kādas ir tavas tiesības.",
  alternates: { canonical: "/privatuma-politika" },
};

const UPDATED_AT = "2026. gada 19. septembra";

/*
 * TODO (juridiskais): aizstāt ar reģistrētā uzņēmuma datiem, tiklīdz tie ir.
 * GDPR 13. pants prasa nosaukt pārzini un tā kontaktinformāciju.
 */
const CONTROLLER = "irvieta (SIA nosaukums, reģ. Nr. un juridiskā adrese — precizēsim pēc uzņēmuma reģistrācijas)";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privātuma politika" updatedAt={UPDATED_AT}>
      <p>
        Šī politika skaidro, kā mēs apstrādājam tavus personas datus, kad piesakies
        irvieta agrīnajai piekļuvei (waitlist) mājaslapā irvieta.lv. Rakstām to pēc
        iespējas vienkāršā valodā — bez sīkā drukas triku.
      </p>

      <p>
        <strong>Īsumā:</strong> mēs saglabājam tavu e-pastu, lai vienu reizi tev
        paziņotu, kad irvieta būs gatavs. Mēs nepārdodam un nenododam tavus datus
        reklāmdevējiem, un mēs neizmantojam sīkdatnes vai izsekošanas rīkus.
      </p>

      <h2>1. Kas ir datu pārzinis</h2>
      <p>
        Par tavu personas datu apstrādi atbild {CONTROLLER}.
      </p>
      <p>
        Jebkuros jautājumos par datiem raksti mums:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>2. Kādus datus mēs vācam</h2>
      <p>Piesakoties waitlist, mēs saglabājam tikai to, ko tu pats ievadi, un nedaudz tehniskās informācijas:</p>
      <ul>
        <li>
          <strong>E-pasta adrese</strong> — lai varētu tev paziņot par palaišanu.
        </li>
        <li>
          <strong>Izvēlētā loma</strong> — vai gribi sūtīt, braukt vai abus. Lai
          saprastu, cik liela ir katra puse.
        </li>
        <li>
          <strong>Pieteikšanās vieta lapā</strong> — vai piesacījies no lapas augšas
          vai apakšas. Tikai statistikai.
        </li>
        <li>
          <strong>Valsts</strong> — noteikta no tava interneta savienojuma, bez
          precīzas atrašanās vietas. Lai saprastu, no kurienes ir interese.
        </li>
        <li>
          <strong>Pieteikšanās laiks</strong>.
        </li>
      </ul>
      <p>
        Mēs <strong>nevācam</strong> tavu vārdu, telefona numuru, adresi vai maksājumu
        datus. Tava IP adrese tiek īslaicīgi izmantota tikai tam, lai ierobežotu
        automātisku surogātpieteikšanos, un netiek saglabāta datubāzē.
      </p>

      <h2>3. Kāpēc mēs to darām un uz kāda pamata</h2>
      <ul>
        <li>
          <strong>Tava piekrišana</strong> (VDAR 6. panta 1. punkta a) apakšpunkts) —
          iesniedzot e-pastu, tu piekrīti, ka sazināmies ar tevi par irvieta
          palaišanu. Piekrišanu vari atsaukt jebkurā brīdī.
        </li>
        <li>
          <strong>Mūsu leģitīmās intereses</strong> (VDAR 6. panta 1. punkta f)
          apakšpunkts) — lai pasargātu pieteikšanās formu no surogātpasta un
          automātiskiem robotiem, kā arī lai saprastu interesi par pakalpojumu.
        </li>
      </ul>

      <h2>4. Sīkdatnes un izsekošana</h2>
      <p>
        <strong>Mēs neizmantojam sīkdatnes.</strong> Šajā mājaslapā nav Google
        Analytics, Facebook pikseļa vai citu izsekošanas rīku, un mēs neveidojam tavu
        profilu. Tāpēc arī neredzi sīkdatņu paziņojumu — tas nav vajadzīgs.
      </p>

      <h2>5. Kam mēs nododam datus</h2>
      <p>
        Mēs nepārdodam un neiznomājam tavus datus. Datus mūsu vārdā apstrādā tikai šie
        tehniskie pakalpojumu sniedzēji:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> — datubāze, kurā glabājas pieteikumu saraksts.
        </li>
        <li>
          <strong>Vercel</strong> — mājaslapas hostings.
        </li>
      </ul>
      <p>
        Ja šie pakalpojumu sniedzēji datus apstrādā ārpus Eiropas Ekonomikas zonas,
        tas notiek, pamatojoties uz Eiropas Komisijas apstiprinātajām standarta
        līgumu klauzulām. Datus varam izpaust arī tad, ja to pieprasa likums.
      </p>

      <h2>6. Cik ilgi glabājam</h2>
      <p>
        Tavu e-pastu glabājam, līdz irvieta ir palaists un esam tev par to paziņojuši,
        vai līdz brīdim, kad tu lūdz to dzēst — atkarībā no tā, kas notiek ātrāk. Ja
        projekts netiek palaists, sarakstu dzēšam pilnībā.
      </p>

      <h2>7. Tavas tiesības</h2>
      <p>Attiecībā uz saviem datiem tev ir tiesības:</p>
      <ul>
        <li>uzzināt, kādi dati par tevi mums ir, un saņemt to kopiju;</li>
        <li>labot neprecīzus datus;</li>
        <li>lūgt datus dzēst (&bdquo;tikt aizmirstam&ldquo;);</li>
        <li>ierobežot vai iebilst pret apstrādi;</li>
        <li>saņemt savus datus pārnesamā formātā;</li>
        <li>jebkurā brīdī atsaukt savu piekrišanu.</li>
      </ul>
      <p>
        Lai izmantotu jebkuru no šīm tiesībām, pietiek ar vienu e-pastu uz{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Atbildēsim viena
        mēneša laikā. Piekrišanas atsaukšana ir bez maksas un bez paskaidrojumiem —
        vienkārši uzraksti &bdquo;dzēsiet mani&ldquo;.
      </p>
      <p>
        Ja uzskati, ka apstrādājam tavus datus nepareizi, tev ir tiesības iesniegt
        sūdzību uzraudzības iestādei — Latvijā tā ir{" "}
        <a href="https://www.dvi.gov.lv" target="_blank" rel="noopener noreferrer">
          Datu valsts inspekcija
        </a>
        . Bet vispirms — uzraksti mums, mēs ļoti ceram to atrisināt bez inspekcijas.
      </p>

      <h2>8. Datu drošība</h2>
      <p>
        Dati tiek pārraidīti šifrētā savienojumā (HTTPS) un glabāti datubāzē, kurai
        publiska piekļuve ir liegta — pieteikumu sarakstu var nolasīt tikai mūsu
        komanda. Neviena sistēma nav simtprocentīgi droša, bet mēs vācam tik maz datu,
        cik vien iespējams, tieši šī iemesla dēļ.
      </p>

      <h2>9. Bērni</h2>
      <p>
        irvieta ir paredzēts personām no 16 gadu vecuma. Mēs apzināti nevācam datus
        par jaunākiem bērniem. Ja uzzinām, ka tas noticis, datus dzēšam.
      </p>

      <h2>10. Izmaiņas šajā politikā</h2>
      <p>
        Ja politiku mainām, atjaunosim datumu lapas augšā. Ja izmaiņas būs būtiskas un
        skars tevi, paziņosim pa e-pastu.
      </p>

      <h2>11. Kontakti</h2>
      <p>
        Jautājumi, ierosinājumi vai lūgums dzēst datus —{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
