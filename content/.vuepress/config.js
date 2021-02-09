module.exports = {
  title: "MWiki",
  description: "Phixyn's personal wiki",
  themeConfig: {
    sidebar: [
      {
        title: "Home",
        path: "/"
      },
      {
        title: "Android",
        children: [
          "/android/adb",
          "/android/android-bookmarks",
          "/android/gradle"
        ],
      },
      {
        title: "Bookmarks",
        children: [
          "/bookmarks/ble-bookmarks",
          "/bookmarks/dev-bookmarks",
          "/bookmarks/qa-bookmarks",
          "/bookmarks/tools-bookmarks"
        ]
      },
      {
        title: "CI/CD",
        children: [
          "/continuous-integration/jenkins-bookmarks",
          "/continuous-integration/jenkins-pipeline"
        ]
      },
      {
        title: "Front-End Development",
        children: [
          "/front-end-development/gridsome",
          "/front-end-development/react",
          "/front-end-development/vue-js"
        ]
      },
      {
        title: "iOS",
        children: [
          "/ios/ios-bookmarks",
          "/ios/xctest-cheatsheet"
        ]
      },
      {
        title: "Languages",
        children: [
          "/languages/korean-notes"
        ]
      },
      {
        title: "Machine Learning",
        children: [
          "/machine-learning/fundamentals",
          "/machine-learning/models-and-algorithms",
          "/machine-learning/other",
          "/machine-learning/statistics",
          "/machine-learning/tutorials"
        ]
      },
      {
        title: "MacOS",
        children: [
          "/macos/macos-bookmarks",
          "/macos/macos-commands",
          "/macos/macos-launchd"
        ]
      },
      {
        title: "Programming",
        children: [
          "/programming/groovy-notes",
          "/programming/java-bookmarks",
          "/programming/kotlin-bookmarks",
          "/programming/kotlin",
          "/programming/python-bookmarks",
          "/programming/python",
          "/programming/shells-bookmarks",
          "/programming/shells-cheatsheet",
          "/programming/vim-cheatsheet"
        ]
      },
      {
        title: "SysAdmin",
        children: [
          "/sysadmin/nginx"
        ]
      },
      {
        title: "Version Control",
        children: [
          "/version-control/git-bookmarks",
          "/version-control/git"
        ]
      },
      {
        title: "Web Development",
        children: [
          "/web-development/foundation",
          "/web-development/node-js",
          "/web-development/web-dev-in-2020"
        ]
      }
    ]
  }
}
