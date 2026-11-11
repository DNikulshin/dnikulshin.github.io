const REPO_FIELDS = `
  name
  description
  url
  stargazerCount
  forkCount
  primaryLanguage { name color }
  updatedAt
  repositoryTopics(first: 5) { nodes { topic { name } } }
`;

/**
 * Закреплённые репозитории + несколько конкретных, которые нужны сайту,
 * но не закреплены в профиле (иначе карточка проекта пропадает из-за
 * настройки GitHub, а не из-за содержания).
 */
export const PINNED_REPOS_QUERY = `
  query ($owner: String!) {
    user(login: $owner) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository { ${REPO_FIELDS} }
        }
      }
      pcRemote: repository(name: "pc-remote") { ... on Repository { ${REPO_FIELDS} } }
    }
  }
`;
