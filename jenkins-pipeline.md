# Jenkins Pipeline Cheatsheet

## Archiving Artifacts

```groovy
archiveArtifacts artifacts: "**/${env.RESULTS_ARCHIVE}"
```

_**Note:** Always use double quotes with string interpolation._

## Variables

### Global Variables

```groovy
VAR="value"
pipeline {
    // ...
}
```

Global and mutable variables need to be outside of the pipeline.

### Environment Variables

```groovy
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

Environment variables can only be modified temporarily with a `withEnv` block.

### Variables Inside Script Block (?)

```groovy
var = sh([script: "echo 'Variable value'", returnStdout: true]).trim()
```
