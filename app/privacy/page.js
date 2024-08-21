import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { MDXRemote } from "next-mdx-remote/rsc";

const markdown = `# Politique de Vie Privée

## 1. Collecte des informations personnelles

Nous collectons des informations lorsque vous visitez notre site, remplissez un formulaire, ou interagissez avec nos services.

Les informations collectées peuvent inclure votre nom, votre adresse e-mail, votre numéro de téléphone, et toute autre donnée que vous nous fournissez volontairement.

## 2. Utilisation des informations collectées

Les informations que nous collectons peuvent être utilisées pour :

- Améliorer notre site web et personnaliser votre expérience utilisateur
- Améliorer le service client et répondre à vos demandes de manière plus efficace
- Envoyer des emails périodiques pour vous informer des actualités, promotions, et autres informations pertinentes

## 3. Google Analytics et Hotjar

Nous utilisons Google Analytics et Hotjar pour analyser l'audience et améliorer l'expérience utilisateur de notre site.

Ces outils collectent des informations anonymes telles que votre adresse IP, le type de navigateur, les pages visitées, et le temps passé sur le site.

- **Google Analytics** : Vous pouvez consulter la [Politique de confidentialité de Google](https://policies.google.com/privacy).
- **Hotjar** : Vous pouvez consulter la [Politique de confidentialité de Hotjar](https://www.hotjar.com/legal/policies/privacy/).

## 4. Protection des informations

Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles.

Vos informations personnelles sont stockées dans des réseaux sécurisés et ne sont accessibles qu'à un nombre limité de personnes ayant des droits d'accès spéciaux à ces systèmes.

## 5. Partage des informations avec des tiers

Nous ne vendons, n'échangeons, et ne transférons pas vos informations personnelles à des tiers, sauf si cela est nécessaire pour fournir les services demandés, ou si la loi l'exige.

## 6. Consentement

En utilisant notre site, vous consentez à notre politique de vie privée.

## 7. Modifications de la politique de vie privée

Nous nous réservons le droit de modifier cette politique de vie privée à tout moment. Toute modification sera affichée sur cette page.

## 8. Contact

Pour toute question concernant cette politique de vie privée, vous pouvez nous contacter à :

- **Email** : [julien.talbot@ergonomie.re](mailto:julien.talbot@ergonomie.re)
- **Téléphone** : [+262693655544](tel:+262693655544)
- **Adresse postale** : [3 rue Debussy 97438 Sainte-Marie](https://maps.google.com/?q=3+rue+Debussy+97438+Sainte-Marie)
`;
export const metadata = getSEOTags({
  title: `Politique de confidentialité | ${config.appName}`,
  canonicalUrlRelative: "/privacy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Retour
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Politique de confidentialité pour {config.appName}
        </h1>

        <MDXRemote source={markdown} />
      </div>
    </main>
  );
};

export default PrivacyPolicy;
