module.exports = {
    publishers: [
      {
        name: '@electron-forge/publisher-github',
        config: {
          repository: {
            owner: 'DaChats',
            name: 'app'
          },
          prerelease: false,
          draft: true
        }
      }
    ]
  }