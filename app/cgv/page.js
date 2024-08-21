import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { MDXRemote } from "next-mdx-remote/rsc";

const markdown = `# Conditions Générales de Vente

## 1. Objet

Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Julien Talbot, expert en ergonomie, et ses clients dans le cadre des prestations de services proposées sur le site ${config.appName}.

## 2. Services proposés

Julien Talbot propose des services d'expertise en ergonomie. Le détail des prestations est disponible sur le site web.

## 3. Prix et paiement

Les prix des services sont indiqués en euros et sont susceptibles d'être modifiés à tout moment. Le paiement s'effectue selon les modalités précisées lors de la commande.

## 4. Responsabilité

Julien Talbot s'engage à exécuter ses prestations avec le plus grand soin. Cependant, sa responsabilité ne pourra être engagée qu'en cas de faute prouvée.

## 5. Propriété intellectuelle

Tous les éléments fournis dans le cadre des prestations restent la propriété de Julien Talbot jusqu'au paiement intégral du prix.

## 6. Protection des données personnelles

Les données personnelles collectées sont traitées conformément à la politique de confidentialité disponible sur le site.

## 7. Droit applicable et litiges

Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.

## 8. Contact

Pour toute question relative aux présentes CGV, vous pouvez contacter Julien Talbot :

- **Email** : [julien.talbot@ergonomie.re](mailto:julien.talbot@ergonomie.re)
- **Téléphone** : [+262693655544](tel:+262693655544)
- **Adresse postale** : [3 rue Debussy 97438 Sainte-Marie](https://maps.google.com/?q=3+rue+Debussy+97438+Sainte-Marie)
`;

export const metadata = getSEOTags({
  title: `Conditions Générales de Vente | ${config.appName}`,
  canonicalUrlRelative: "/terms-of-service",
});

const TermsOfService = () => {
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
          Conditions Générales de Vente pour {config.appName}
        </h1>

        <MDXRemote source={markdown} />
      </div>
    </main>
  );
};

export default TermsOfService;
