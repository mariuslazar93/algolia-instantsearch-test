import instantsearch from 'instantsearch.js/es';
import {
  searchBox,
  hits,
  pagination
} from 'instantsearch.js/es/widgets';

const search = instantsearch({
  appId: ALGOLIA_APP_ID,
  apiKey: ALGOLIA_API_KEY,
  indexName: ALGOLIA_INDEX_NAME,
  urlSync: true,
  searchParameters: {
    hitsPerPage: 30,
  }
});

search.addWidget(
  searchBox({
    container: '#search-input',
    queryHook: (input, search) => {
      if (input.length > 1) {
        search(input);
      }
    }
  })
);

search.addWidget(
  hits({
    container: '#hits',
    templates: {
      item: `test`,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    },
  })
);

search.addWidget(
  pagination({
    container: '#pagination'
  })
);

export default search;
