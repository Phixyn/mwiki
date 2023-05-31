---
title: Amazon Web Services
description: Notes and resources about AWS.
date: 2021-09-24 17:23
categories: 
  - Sysadmin
  - Cloud Engineering
tags: 
  - aws
  - cloud-computing
  - cloud-services
layout: page
---

# Amazon Web Services

- [Notes](#notes)
  - [Difference between EC2 and Elastic Beanstalk](#difference-between-ec2-and-elastic-beanstalk)
- [Guides](#guides)

- - -

## Notes

### Difference between EC2 and Elastic Beanstalk

**EC2** (Elastic Compute Cloud) is Amazon's service that allows you to create a **server** (AWS calls these **instances**) in the AWS cloud. You pay by the hour and only what you use. You can do whatever you want with this instance as well as launch `n` number of instances.

**Elastic Beanstalk** is one layer of abstraction away from the EC2 layer. Elastic Beanstalk will setup an "environment" for you that can contain a number of EC2 instances, an optional database, as well as a few other AWS components such as an Elastic Load Balancer, Auto-Scaling Group and Security Group. Elastic Beanstalk will manage these items for you whenever you want to update your software running in AWS.

## Guides

[Analyze Load Balancer logs using Athena](https://aws.amazon.com/premiumsupport/knowledge-center/athena-analyze-access-logs/)  
[Athena & ALB Log Analysis | Medium](https://witoff.medium.com/athena-alb-log-analysis-b874d0958909)  
