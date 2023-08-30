---
title: Docker
description: Docker setup and basics.
date: 2021-04-16 19:43
categories: 
  - Sysadmin
  - Containerization
tags: 
  - dockerfile
  - containers
layout: page
---

# Docker

- [Linux Mint and Ubuntu Installation](#linux-mint-and-ubuntu-installation)
    - [Installation](#installation)
    - [Post-Installation](#post-installation)
    - [Upgrading](#upgrading)
    - [Uninstalling](#uninstalling)
- [Basics](#basics)
    - [How Dockerfile Steps Work](#how-dockerfile-steps-work)
- [Pruning Unused Images](#pruning-unused-images)
- [Docker Compose on Linux](#docker-compose-on-linux)
- [Building Images + Running Containers](#building-images--running-containers)
- [Interacting With Containers](#interacting-with-containers)
- [Compose](#compose)
- [Portainer](#portainer)
    - [Server](#server)
    - [Agent](#agent)

- - -

## Linux Mint and Ubuntu Installation

### Installation

1. Remove old versions if any:

    ```sh
    sudo apt-get remove docker docker.io containerd runc
    ```
2. Update the `apt` package index and install packages to allow `apt` to use a repository over HTTPS:

    ```sh
    sudo apt-get update
    sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release
    ```
3. Add Docker's official GPG key into the APT keyring:

    ```sh
    # This didn't seem to work, and it was from another tutorial. But worth a try on Ubuntu.
    # curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    ```
4. Set up the **stable** repository:
    1. If using Linux Mint:
    ```sh
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release; echo $UBUNTU_CODENAME) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```
    2. If using Ubuntu:
    ```sh
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```
5. Install the **latest** version of Docker Engine and containerd:

    ```sh
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io
    ```
6. Verify that Docker Engine is installed correctly by running the `hello-world` image:

    ```sh
    sudo docker run hello-world
    ```   

### Post-Installation

The Docker daemon binds to a Unix socket instead of a TCP port. By default that Unix socket is owned by the user root and other users can only access it using sudo. The Docker daemon always runs as the root user.

To run Docker without `sudo`, follow these steps.

1. Create a new user group called docker:

    ```sh
    sudo groupadd docker
    ```
2. Add your user to the docker group:

    ```sh
    sudo usermod -aG docker $USER
    ```
3. Log out and log back in so that your group membership is re-evaluated. You can also try the following command instead to activate changes to groups:

    ```sh
    newgrp docker
    ```
4. Restart the docker daemon:

    ```sh
    sudo service docker restart
    ```

    If you are on Ubuntu 14.04-15.10, use `docker.io` instead:

    ```sh
    sudo service docker.io restart
    ```

For more information, see: [Post-installation steps for Linux | Docker Documentation](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)

### Upgrading

1. Run:

    ```sh
    sudo apt-get update
    ```
2. List the available versions in the repo:

    ```sh
    apt-cache madison docker-ce
    ```
3. Install the latest version using the version string from the first row, **second column**. For example, the current latest is `5:20.10.6~3-0~ubuntu-focal`:

    ```sh
    sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
    ```

### Uninstalling

See: [Uninstall Docker Engine](https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine)

## Basics

### How Dockerfile Steps Work

Each step in a Dockerfile:

1. Creates a container
2. Changes it in some way
3. Commits the result (usually) to create a new image
4. Removes the container
5. Uses the new image in the next step

Given this `Dockerfile`: 

```dockerfile
ADD buzz /tmp/            # change the container to have this new file
RUN cd /tmp/              # don't change the container at all and then save the results
RUN python /tmp/setup.py install
```

The `cd` command on line 2 does nothing and does not affect lines after it.  
This is an unfortunate side effect of making `Dockerfile`s look too much like shell scripts, which they are not.

Instead, we _could_ put the `cd` command on the same line that needs to use it:

```dockerfile
RUN cd /tmp/ && python /tmp/setup.py install &&  python /tmp/buzz/scripts/setuprabbit.py
```

But this is bad practice, so use [`WORKDIR`](https://docs.docker.com/engine/reference/builder/#workdir) instead:

```dockerfile
ADD buzz /tmp/
WORKDIR /tmp/
RUN python /tmp/setup.py install
```

## Pruning Unused Images

TODO  
https://docs.docker.com/engine/reference/commandline/image_prune/

```sh
docker image prune --all
```

checking env vars of existing container:

docker inspect <container_name>
or
docker exec <container_name> printenv

## Docker Compose on Linux

```sh
sudo apt install docker-compose
```

## Building Images + Running Containers

> TODO: WIP

Run Docker image built with env vars:

```sh
docker run --detach --name container_name --publish 14000:8080 --env-file <path/to/.env> image-name:tag-name
# Subsequent runs (start same container)
docker start container_name
# Check env vars
docker inspect container_name
```

To update the image, build it with

```sh
docker build --tag image-name:tag-name .
```

## Interacting With Containers

```sh
docker exec -it <container-id> /bin/bash
```

## Compose

```sh
docker-compose build --no-cache <service-1> <service-2>
# At next docker-compose up, containers using old images will be re-created
# with the new image.
```

## Portainer

[https://github.com/portainer/portainer](https://github.com/portainer/portainer)

> Portainer Community Edition is a lightweight service delivery platform for containerized applications that can be used to manage Docker, Swarm, Kubernetes and ACI environments. It is designed to be as simple to deploy as it is to use. The application allows you to manage all your orchestrator resources (containers, images, volumes, networks and more) through a ‘smart’ GUI and/or an extensive API.

### Server

[https://docs.portainer.io/start/install-ce/server/docker/linux](https://docs.portainer.io/start/install-ce/server/docker/linux)

Create the volume that Portainer Server will use to store its database:
```sh
docker volume create portainer_data
# Verify
docker volume ls
```

Download and install the Portainer Server container:
```sh
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```

[https://localhost:9443](https://localhost:9443)

### Agent

[https://docs.portainer.io/admin/environments/add/docker/agent](https://docs.portainer.io/admin/environments/add/docker/agent)

Open [https://localhost:9443](https://localhost:9443), set up account and then click Get Started to use local Docker environment. Or add another Docker environment by clicking the other button :D
