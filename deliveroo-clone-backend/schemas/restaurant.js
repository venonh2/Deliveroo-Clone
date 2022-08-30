export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Restaurant name",
      type: "string",
      validators: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      title: "Image of the restaurant",
      type: "image",
    },
    {
      name: "lat",
      title: "Latitude of the restaurant",
      type: "number",
    },
    {
      name: "long",
      title: "Longitude of the restaurant",
      type: "number",
    },
    {
      name: "address",
      title: "Adress of the restaurant",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Enter a Rating from (1-5 Starts)",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dishies",
      title: "Dishies",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
