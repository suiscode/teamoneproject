import algoliasearch from "algoliasearch";

const client = algoliasearch("COIPHHX732", "65046df8a09409d24641c8ef47e99c6f");

export const algoliaIndex = client.initIndex("test_CAR");

algoliaIndex.setSettings({
  searchableAttributes: [
    "name",
    "unordered(description)",
    "unordered(type)",
    "unordered(price)",
    "unordered(salePrice)",
    "unordered(gasoline)",
    "unordered(steering)",
    "unordered(capacity)",
  ],
});
