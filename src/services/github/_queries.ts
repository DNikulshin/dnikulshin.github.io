export const PINNED_REPOS_QUERY = `
  query {
    user(login: "DNikulshin") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            forkCount
            primaryLanguage { name color }
            updatedAt
            repositoryTopics(first: 5) { nodes { topic { name } } }
          }
        }
      }
    }
  }
`;
