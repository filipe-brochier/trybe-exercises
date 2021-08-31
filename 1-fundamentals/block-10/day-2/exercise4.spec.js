const { getRepos } = require('./exercise4.js');

test('if sd-01-week4-5-project-todo-list and sd-01-week4-5-project-meme-generator are in the repo list', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  return getRepos(url)
    .then(list => {
      expect(list).toContain('sd-01-week4-5-project-todo-list');
      expect(list).toContain('sd-01-week4-5-project-meme-generator');
    })
})