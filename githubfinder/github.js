class Github {
  constructor() {
    this.client_id = 'a853856c42c22e6005db';
    this.client_secret = '9fe7f05566b02f60a586b02751f3452bb20f449c';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
      );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,   // it is the same as doing profile: profile
      repos
    }; 
  }
}
