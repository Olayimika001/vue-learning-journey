const app = Vue.createApp({
  data() {
    return {
      name: 'Makima',
      bio: 'Aspiring Frontend Developer learning Vue.js',
      location: 'Lagos, Nigeria',
      profileImage: 'profile image.jpeg',
      githubLink: 'https://github.com/Olayimika001',
      twitterLink: 'https://twitter.com/makima_dev1',
      buttonClass: 'btn-primary'
    }
  }
})

app.mount('#app')
