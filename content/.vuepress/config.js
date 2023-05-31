module.exports = {
  title: "MWiki",
  description: "Phixyn's personal wiki",
  head: [
    ["meta", { name: "robots", content: "noindex, nofollow" }]
  ],
  plugins: ['@vuepress/back-to-top'],
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
          "/programming/kotlin/kotlin-bookmarks",
          "/programming/kotlin/kotlin",
          "/programming/groovy-notes",
          "/programming/python/python-bookmarks",
          "/programming/python/python",
          "/programming/shells/shells-bookmarks",
          "/programming/shells/shells-cheatsheet",
          "/programming/vim-cheatsheet"
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
        title: "Front-End Development",
        children: [
          "/front-end-development/vue-js",
          "/front-end-development/gridsome",
          "/front-end-development/react",
          "/front-end-development/angular",
          "/front-end-development/cypress",
          "/front-end-development/foundation"
        ]
      },
      {
        title: "Web Development",
        children: [
          "/web-development/cors",
          "/web-development/node-js",
          "/web-development/web-dev-in-2020"
        ]
      },
      {
        title: "SysAdmin",
        children: [
          "/sysadmin/docker",
          "/sysadmin/nginx",
          "/sysadmin/amazon-web-services",
          "/sysadmin/google-cloud-platform"
        ]
      },
      {
        title: "Kubernetes",
        children: [
          "/kubernetes/kubernetes",
          "/kubernetes/kubectl",
          "/kubernetes/minikube"
        ]
      },
      {
        title: "Databases",
        children: [
          "databases/mongodb"
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
