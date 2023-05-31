---
title: Google Cloud Platform
description: Notes and resources about Google Cloud Platform.
date: 2021-09-23 20:11
categories: 
  - Sysadmin
  - Cloud Engineering
tags: 
  - gcp
  - cloud-computing
  - cloud-services
layout: page
---

# Google Cloud Platform

- [Cloud SDK Cheatsheet](#cloud-sdk-cheatsheet)
- [Monitoring](#monitoring)
- [Links](#links)

- - -

## Cloud SDK Cheatsheet

List project IDs:

```sh
gcloud config list --format='text(core.project)'
```

List images in Google Container Registry:

```sh
gcloud container images list --repository=[HOSTNAME]/[PROJECT-ID]
```

`[HOSTNAME]` is listed under Location in the console. It's one of four options: gcr.io, us.gcr.io, eu.gcr.io, or asia.gcr.io.  
`[PROJECT-ID]` is your Google Cloud Console project ID. If your project ID contains a colon (:), see Domain-scoped projects.  

List tags:

```sh
gcloud container images list-tags [HOSTNAME]/[PROJECT-ID]/[IMAGE]
```

Note: `--format='get(digest)'` will print the full digest.

Adding tags to existing images:

```sh
gcloud container images add-tag \
[HOSTNAME]/[PROJECT-ID]/[IMAGE]:[TAG] \
[HOSTNAME]/[PROJECT-ID]/[IMAGE]:[NEW_TAG]
```

`[TAG]` is a tag that's already applied to the image.

https://cloud.google.com/container-registry/docs/managing#gcloud

## Monitoring

- You can create log alerts from Logs Explorer > Query results > Actions > Create Log Alert

## Links

[Ingress for External HTTP(S) Load Balancing](https://cloud.google.com/kubernetes-engine/docs/concepts/ingress-xlb)  
