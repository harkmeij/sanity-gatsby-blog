export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "606337b942d442008d741873",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-a6ezaovj",
                  apiId: "213598f0-3bb7-4eb1-802c-5a369af2e9e5",
                },
                {
                  buildHookId: "606337b984194800c3bf2d5b",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-kinwj1eg",
                  apiId: "c80736dc-bc2c-443c-8741-1c54b36d867b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/harkmeij/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-kinwj1eg.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
