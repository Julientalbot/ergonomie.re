import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { MDXRemote } from "next-mdx-remote/rsc";

const markdown = `# Mentions Légales

## 1. Identification de l'éditeur du site

- **Nom** : [Julien Talbot](https://www.linkedin.com/in/julien-talbot-ergonome)
- **Profession** : Expert en ergonomie
- **Adresse** : [3 rue Debussy 97438 Sainte-Marie](https://maps.google.com/?q=3+rue+Debussy+97438+Sainte-Marie)
- **Site web** : [www.ergonomie.re](https://www.ergonomie.re)

## 2. Propriété intellectuelle

Le contenu du site ergonomie.re est protégé par les lois en vigueur sur la propriété intellectuelle.

Toute reproduction, même partielle, sans autorisation écrite préalable est strictement interdite.

## 3. Données personnelles

Les informations collectées sur ce site sont destinées à Julien Talbot dans le cadre des services proposés.

Conformément à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de modification, et de suppression de vos données personnelles.

Pour exercer ce droit, contactez-nous à l'adresse suivante : [julien.talbot@ergonomie.re].

## 4. Responsabilité

Julien Talbot s'efforce de fournir des informations exactes et mises à jour.

Cependant, il ne peut garantir l'exactitude, la complétude, ou l'actualité des informations diffusées sur le site.

## 5. Contact

- **Email** : [julien.talbot@ergonomie.re](mailto:julien.talbot@ergonomie.re)
- **Téléphone** : [+262693655544](tel:+262693655544)
- **Adresse postale** : [3 rue Debussy 97438 Sainte-Marie](https://maps.google.com/?q=3+rue+Debussy+97438+Sainte-Marie)
`;

export const metadata = getSEOTags({
  title: `Mentions légales | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
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
          Mentions légales pour {config.appName}
        </h1>

        <MDXRemote source={markdown} />
      </div>
    </main>
  );
};

export default PrivacyPolicy;
