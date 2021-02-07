---
title: Nginx
description: Notes about Nginx.
date: 2020-11-03 21:15
category: Sysadmin
tag: 
  - servers
  - web-server
  - linux
layout: page
---

# Nginx

- [Docs](#docs)
    - [Module Docs](#module-docs)
- [Tutorials and Articles](#tutorials-and-articles)
- [Basic Commands](#basic-commands)
- [Modular Configuration](#modular-configuration)
- [Document Root Directory](#document-root-directory)
- [Configuration](#configuration)
    - [server_name](#server_name)

- - -

## Docs

[How nginx processes a request](https://nginx.org/en/docs/http/request_processing.html)  
[Pitfalls and Common Mistakes | NGINX](https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/)  
[Configuring HTTPS servers](https://nginx.org/en/docs/http/configuring_https_servers.html)  

### Module Docs

[Core functionality](https://nginx.org/en/docs/ngx_core_module.html)  
[Module `ngx_http_core_module`](https://nginx.org/en/docs/http/ngx_http_core_module.html)  

## Tutorials and Articles

[https://owasp.org/www-project-secure-headers/](https://owasp.org/www-project-secure-headers/)

## Basic Commands

These may require root previleges.

Start (without systemd or equivalent):

```sh
nginx
```

Manage (by sending signals):

```
nginx -s [signal]
```

Available signals:
- `stop`: fast shutdown
- `quit`: graceful shutdown (wait for workers to finish their processes)
- `reload`: reload the configuration file
- `reopen`: reopen the log files

## Modular Configuration

> TL;DR: multiple site configuration files should be stored in `/etc/nginx/conf.d/` as `example.com.conf`, or `example.com.disabled`.

As use of the NGINX web server has grown, NGINX, Inc. has worked to distance NGINX from configurations and terminology that were used in the past when trying to ease adoption for people already accustomed to Apache.

If you're familiar with Apache, you'll know that multiple site configurations (called _Virtual Hosts_ in Apache terminology) are stored at `/etc/apache/sites-available/`, which symlink to files in `/etc/apache/sites-enabled/`. However, many guides and blog posts for NGINX recommend this same configuration. As you could expect, this has led to some confusion, and the assumption that NGINX regularly uses the `../sites-available/` and `../sites-enabled/` directories, and the `www-data` user. It does not.

Sure, it can. The NGINX packages in Debian and Ubuntu repositories have changed their configurations to this for quite a while now, so serving sites whose configuration files are stored in `/sites-available/` and symlinked to `/sites-enabled/` is certainly a working setup. **However it is unnecessary**, and the Debian Linux family is the only one which does it. **Do not force Apache configurations onto NGINX.**

Instead, multiple site configuration files should be stored in `/etc/nginx/conf.d/` as `example.com.conf`, or `example.com.disabled`. Do not add `server` blocks directly to `/etc/nginx/nginx.conf` either, even if your configuration is relatively simple. This file is for configuring the server process, not individual websites.

The NGINX process also runs as the username `ngnix` in the `nginx` group, so keep that in mind when adjusting permissions for website directories. For more information, see [Creating NGNIX Plus Configuration Files](https://www.nginx.com/resources/admin-guide/configuration-files/).

Finally, as the [NGINX docs](https://www.nginx.com/resources/wiki/start/topics/examples/server_blocks/) point out, the term _Virtual Host_ is an Apache term, even though it's used in the `nginx.conf` file supplied from the Debian and Ubuntu repositories, and some of NGINX's old documentation. A _Server Block_ is the NGINX equivalent, so that is the phrase you'll see in this series on NGINX.

_Source: [https://www.linode.com/docs/guides/nginx-installation-and-basic-setup/](https://www.linode.com/docs/guides/nginx-installation-and-basic-setup/)_

## Document Root Directory

> TL;DR: Store sites in a directory such as `/var/www/your-site`

NGINX packages that exist in Ubuntu, Debian, or other operating systems, as an easy-to-install package will often provide a ‘default’ configuration file as an example of configuration methods, and will often include a document root to hold a basic HTML file.

Most of these packaging systems do not check to see if files are modified or exist within the default document root, which can result in code loss when the packages are upgraded. Experienced system administrators know that there is no expectation of the data inside the default document root to remain untouched during upgrades.

You should not use the default document root for any site-critical files. There is no expectation that the default document root will be left untouched by the system and there is an extremely high possibility that your site-critical data may be lost upon updates and upgrades to the NGINX packages for your operating system.

_Source: [https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/#using-the-default-document-root](https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/#using-the-default-document-root)_

- - -

Some directories in any file system should never be used for hosting data from. These include `/` and `root`. You should never use these as your document root.

Doing this leaves you open to a request outside of your expected area returning private data.

The [File System Hierarchy](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard) defines where data should exist. You should definitely read it. The short version is that you want your web content to exist in either `/var/www/`, `/srv`, `/usr/share/www`.

_Source: [https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/#not-using-standard-document-root-locations](https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/#not-using-standard-document-root-locations)_

- - -

It is good practice to follow a standard naming convention. For example, if the domain name is `example.com`, then the configuration file should be named `example.com.conf`:

**Config:** `/etc/nginx/conf.d/example.com.conf`
**Site dir:** `/var/www/example.com/`

## Configuration

> Notes and obscure things about Nginx configs.

### server_name

In catch-all server examples the strange name `_` can be seen:

```nginx
    server {
        listen       80  default_server;
        server_name  _;
        return       444;
    }
```

There is nothing special about this name, it is just one of a myriad of invalid domain names which never intersect with any real name. Other invalid names like `--` and `!@#` may equally be used.

_Source: [https://nginx.org/en/docs/http/server_names.html](https://nginx.org/en/docs/http/server_names.html)_

- - -

If someone makes a request using an IP address instead of a server name, the "Host" request header field will contain the IP address and the request can be handled using the IP address as the server name:

```nginx
server {
    listen       80;
    server_name  example.org
                 www.example.org
                 ""
                 192.168.1.1
                 ;
    ...
}
```

**See also:**

[https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name](https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name)  
[https://nginx.org/en/docs/http/server_names.html](https://nginx.org/en/docs/http/server_names.html)  
