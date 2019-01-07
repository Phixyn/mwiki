# Groovy Cheatsheet

## Archiving Artifacts

```groovy
// Always use double quotes with string interpolation
archiveArtifacts artifacts: "**/${env.RESULTS_ARCHIVE}"
```

## Variables

### Global Variables

```groovy
// Global and mutable variables need to be outside of the pipeline

VAR="value"
pipeline {
    // ...
}
```

### Environment Variables

```groovy
// Environment variables can only be modified temporarily with a "withEnv" block

pipeline {
    environment {
        VAR="VALUE"
    }
    stage {
        steps {
            VAR = "NEW VALUE"  // won't work
            withEnv(['VAR="NEW NEW VALUE"']) {
                // VAR will only be "NEW NEW VALUE" in this block
                // Not helpful for setting a global to be used later
            }
        }
    }
}
```

### Variables Inside Script Block (?)

```groovy
var = sh([script: "echo 'Variable value'", returnStdout: true]).trim()
```
