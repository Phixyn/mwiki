---
title: kubectl
description: Command-line tool used to control Kubernetes clusters.
date: 2021-04-16 19:45
category: Kubernetes
tags: 
  - cluster-management
layout: page
---

# kubectl

- [Overview](#overview)
- [Linux Mint and Ubuntu Installation](#linux-mint-and-ubuntu-installation)

- - -

## Overview

The **kubectl** command line tool lets you control Kubernetes clusters. For configuration, `kubectl` looks for a file named `config` in the `$HOME/.kube` directory. You can specify other [kubeconfig](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/) files by setting the `KUBECONFIG` environment variable or by setting the [`--kubeconfig`](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/) flag.

## Linux Mint and Ubuntu Installation

1. Update the `apt` package index and install packages to allow `apt` to use a repository over HTTPS:

    ```sh
    sudo apt-get update
    sudo apt-get install apt-transport-https ca-certificates curl
    ```
2. Download the Google Cloud public signing key:

    ```sh
    curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/kubernetes-archive-keyring.gpg
    ```
3. Add the Kubernetes `apt` repository:
    
    **Note:** `kubernetes-xenial` is the latest in the directory at the time of writing. However, this is subject to change.  
    To ensure that the latest releases are added, browse the folder list in [https://packages.cloud.google.com/apt/dists](https://packages.cloud.google.com/apt/dists) and replace `kubernetes-xenial` below with the folder name of the latest Ubuntu codename that is available (e.g. `kubernetes-focal`, which is not yet available at the time of writing). This applies to both Linux Mint and Ubuntu.
    
    ```sh
    echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
    ```
4. Update `apt` package index with the new repository and install `kubectl`:

    ```sh
    sudo apt-get update
    sudo apt-get install kubectl
    ```

Verify it's installed and in `$PATH` with: `command -v kubectl`.

- - -

Other installation options: [https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
