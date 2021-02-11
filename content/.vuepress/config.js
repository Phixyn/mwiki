module.exports = {
  title: "MWiki",
  description: "Phixyn's personal wiki",
  head: [
    ["meta", { name: "robots", content: "noindex, nofollow" }]
  ],
  themeConfig: {
    searchPlaceholder: "Search...",
    lastUpdated: "Last updated",
    nav: [
      { text: "Phixyn", link: "https://phixyn.com/" },
      { text: "GitHub", link: "https://github.com/Phixyn/mwiki" }
    ],
    sidebar: [
      {
        title: "Home",
        path: "/"
      },
      {
        title: "Programming",
        children: [
          "/programming/java-bookmarks",
          "/programming/kotlin-bookmarks",
          "/programming/kotlin",
          "/programming/groovy-notes",
          "/programming/python-bookmarks",
          "/programming/python",
          "/programming/shells-bookmarks",
          "/programming/shells-cheatsheet",
          "/programming/vim-cheatsheet"
        ]
      },
      {
        title: "Front-End Development",
        children: [
          "/front-end-development/vue-js",
          "/front-end-development/gridsome",
          "/front-end-development/react"
        ]
      },
      {
        title: "Web Development",
        children: [
          "/web-development/foundation",
          "/web-development/node-js",
          "/web-development/web-dev-in-2020"
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
        title: "CI/CD",
        children: [
          "/continuous-integration/jenkins-bookmarks",
          "/continuous-integration/jenkins-pipeline"
        ]
      },
      {
        title: "SysAdmin",
        children: [
          "/sysadmin/nginx"
        ]
      },
      {
        title: "Android",
        children: [
          "/android/android-bookmarks",
          "/android/adb",
          "/android/gradle"
        ],
      },
      {
        title: "iOS",
        children: [
          "/ios/ios-bookmarks",
          "/ios/xctest-cheatsheet"
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
        title: "Machine Learning",
        children: [
          "/machine-learning/fundamentals",
          "/machine-learning/models-and-algorithms",
          "/machine-learning/tutorials",
          "/machine-learning/statistics",
          "/machine-learning/other"
        ]
      },
      {
        title: "Bookmarks",
        children: [
          "/bookmarks/dev-bookmarks",
          "/bookmarks/qa-bookmarks",
          "/bookmarks/tools-bookmarks",
          "/bookmarks/ble-bookmarks"
        ]
      },
      {
        title: "Languages",
        children: [
          "/languages/korean-notes"
        ]
      }
    ]
  }
}
