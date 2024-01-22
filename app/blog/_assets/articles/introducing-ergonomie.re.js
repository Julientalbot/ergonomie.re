import Image from "next/image";
const article = ({ categories, slugs, authors, styles, author, category, categorySlugs, authorSlugs }) => ({
  // The unique slug to use in the URL. It's also used to generate the canonical URL.
  slug: "introducing-ergonomie",
  // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
  title: "Introduction d'ergonomie.re",
  // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
  description:
    "Ergonomie.re a vocation à contribuer de façon significative à l'amélioration des conditions de travail des entreprises réunionnaises, en prenant en compte tant les dimensions relevant de la santé des personnes que de celles relevant de la performance globale et durable des entreprises.",
  // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
  categories: [
    categories.find((category) => category.slug === categorySlugs.feature),
  ],
  // The author of the article. It's used to generate a link to the author's bio page.
  author: authors.find((author) => author.slug === authorSlugs.julien),
  // The date of the article. It's used to generate the meta date.
  publishedAt: "2024-01-22",
  image: {
    // The image to display in <CardArticle /> components.
    src: "/blog/introducing-ergonomie.re/header.png",
    // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
    urlRelative: "/blog/introducing-ergonomie.re/header.png",
    alt: "Image ergonomie.re",
  },
  // The actual content of the article that will be shown under the <h1> title in the article page.
  content: (
    <>
      <Image
        src={"/blog/introducing-supabase/header.png"}
        alt="Supabase and ShipFast logo combined"
        width={700}
        height={500}
        priority={true}
        className="rounded-box"
        placeholder="blur"
        blurDataURL="/blog/introducing-supabase/header.png"
      />
      <section>
        <h2 className={styles.h2}>Introduction</h2>
        <p className={styles.p}>
          Supabase is an open-source Firebase alternative. It&apos;s a great
          tool for building a backend for your app. It&apos;s now integrated
          with ShipFast!
        </p>
      </section>

      <section>
        <h3 className={styles.h3}>1. Create a supabase account</h3>
        <p className={styles.p}>
          First, go to{" "}
          <a href="https://supabase.com/" className="link link-primary">
            Supabase
          </a>{" "}
          and create an account. It&apos;s free for up to 10,000 rows per
          table.
          <br />
          Then create a new project and a new table. You can use the following
          SQL schema:
        </p>

        <pre className={styles.code}>
          <code>
            {`CREATE TABLE public.users (
  id bigint NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  email text NOT NULL,
  password text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT users_pkey PRIMARY KEY (id)
);`}
          </code>
        </pre>
      </section>

      <section>
        <h3 className={styles.h3}>2. Add your credentials to ShipFast</h3>
        <p className={styles.p}>
          Copy the <span className={styles.codeInline}>API URL</span> and{" "}
          <span className={styles.codeInline}>API Key</span> from your
          Supabase project settings and add them to your ShipFast project
          settings. Add these files to your project:
        </p>

        <ul className={styles.ul}>
          <li className={styles.li}>.env.local</li>
          <li className={styles.li}>.env.production</li>
        </ul>
      </section>
    </>
  ),
});

export default article