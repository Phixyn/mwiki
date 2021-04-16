---
title: minikube
description: minikube quickly sets up a local Kubernetes cluster on your machine, making it easy to test, develop and learn.
date: 2021-04-16 19:48
category: Kubernetes
tags: 
  - local-cluster
layout: page
---

# minikube

- [Overview](#overview)
- [Linux Mint and Ubuntu Installation](#linux-mint-and-ubuntu-installation)
- [Getting Started](#getting-started)

- - -

## Overview

minikube is local Kubernetes, focusing on making it easy to learn and develop for Kubernetes.

All you need is Docker (or similarly compatible) container or a Virtual Machine environment, and Kubernetes is a single command away: `minikube start`.

## Linux Mint and Ubuntu Installation

- Either use the binary download:
    
    ```sh
    curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
    sudo install minikube-linux-amd64 /usr/local/bin/minikube
    ```
- Or the Debian package manager:
    
    ```sh
    curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube_latest_amd64.deb
    sudo dpkg -i minikube_latest_amd64.deb
    ```

Verify it's installed and in `$PATH` with: `command -v minikube`.

## Getting Started

- ['Hello Minikube' Tutorial](https://kubernetes.io/docs/tutorials/hello-minikube/)
- [minikube start | minikube](https://minikube.sigs.k8s.io/docs/start/)
