(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"U/mO":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return r}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var n=t("7ljp"),i=t("013z");t("qKvR");function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l={},s={_frontmatter:l},c=i.a;function r(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.b)(c,o({},s,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The solution is using different IBM product packaging, but most of them are exposed in Operator catalog on OpenShift and can be installed in few clicks. At the lower level of the stack OpenShift delivers the uniform management and orchestration of the different applications running on it. It can run on most of the cloud providers on the market. "),Object(n.b)("p",null," ",Object(n.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"687px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.63888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABgUlEQVQoz02RTavTQBSG83NdXFwU3LhxIQgqfoELF64F0aIiLlz5Dy4i3Itt0iRN2zQzaT6adPKdPE6ixc7h4Z1zznuGGcZwg5gbJ+DWFSy9kN9rMeVd39MNPfYu0nWJ48e6JyduHTFp3bYMOnrtO2O8fPeDO4/ec/X4A/dff2X24jNXT+bUXUvTdTx8+517r77w4M03Zs/m3H06196PzJ5/IkxzxjVchHH96wZfCBxvw8bfY5orLGuFECF105LnirpuETJksTApihKlCqqqoWm6iaKsJm/Tdhgbd4O/9VnbLvudxFu6ePrQwN4RbfXzr38Sej7lIScJJHvHQ6y3nMIUJY/UmULqvorSaW8MZUFfKEZtTznCdcmlhLpiUIpOnRjyDJJk8gSuQx6G9FlGFx0o04StZZJJQa+9RnKMSI4xo6ZZzCGWmKsFlmNiuxaWvWSp8xHzjK6F2nc8pdNcnB5I9GyaJRiXP3Sm1Lcbqf5pWZV/GWtNPdXbvvs/c/HTfwCekQUGyzZojQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/vaccine-solution-main/static/f8a2125306dfb86e9d4a05e6e5b10f37/4dcbc/env-1.png",srcSet:["/vaccine-solution-main/static/f8a2125306dfb86e9d4a05e6e5b10f37/7fc1e/env-1.png 288w","/vaccine-solution-main/static/f8a2125306dfb86e9d4a05e6e5b10f37/a5df1/env-1.png 576w","/vaccine-solution-main/static/f8a2125306dfb86e9d4a05e6e5b10f37/4dcbc/env-1.png 687w"],sizes:"(max-width: 687px) 100vw, 687px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",null,"The microservices developed for this MVP solution (Reefer IoT simulator, Reefer Manager, Cold Chain montoring agent, Order managers) are developed, and continuously deployed with Cloud Pak for Application capabilities. Most of those services are event driven, leveraging Event Streams as Kafka based event backbone. API can be exposed and managed with API management, and integration with existing system can also be done with MQ queues. The business process to engage human to do the reefer maintenance runs on BPM product as part of the cloud pak for automation."),Object(n.b)("p",null,"The data governance is controlled by the cloud pak for data product portfolio, and the anomaly detection is developed with Watson Studio and deployed with Watson ML pipeline. "),Object(n.b)("p",null,"Finally the multi cloud management platform ensures the deployment of the products and the solutions on multi cloud providers. "),Object(n.b)("h2",null,"Pre-requisites"),Object(n.b)("h3",null,"Work using Cloud Shell"),Object(n.b)("p",null,"You are going to use IBM Cloud Shell with all the tools required to support the deployment of the solution."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Start your IBM Cloud Shell by pointing your browser to ",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/shell"}),"https://cloud.ibm.com/shell")),Object(n.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACAklEQVQ4y52SS28SYRSG56dwCbeZ4X4ZaAt1wXAJ/AIECgKWxEUNl0UJKAsjsXHrpYmaWOhCbn+DsOA3uHEjbcQUFwZrXjkfKRdrjDLJk/fMOd958+Wd4cafPmI8nWA2+4mr6TfMflyDnu+za3y+mODyyxUu5pCOL78y3WAynbN65zrtD+j1emidn+PFy1d4fXqKN2/fodlq4f1ZE2fN1gbdbhf9fp/tEJ1Oh/WIdrsN7m7yHnL5B8hms4jH40gmk4xEInGLXC435z4OD/PIZDJIpVLLnYODRc09evIcx48beNpo4OTkGer1OqrVKmq1GtMVNVQqFZRKJZTLZRSLRRQKBRwdPWRK0Izz7u1gd8cDl8sFs9kMQRCg1Wqh1+thMplgMBig0+kYNNNoNFAoFFAqlQyVSrWsqc8FQ0HIsgw5ICMQCCwJhUIIh8MbvUgkgmAwyGbRaJTVfr+fzcjDaDSC29v1wumQ4JYWt5QkCR6PB263m9WEw+GA0+lkUL0+s9lsS/V6veB8sgv7AQk+v4T9Oz522G63s0U6aLVaIYriBnST9XeKSq1WI5/PgxNNPESTAYJICCyzGyhHUp7n/wqZUobpdBoczwtYwbPgt4F26SNyiwZ/a/ivJr/3uP8x+JMZ6XpMWxve7FF+FotlydaGZEQ/dSwWw2g0wmAwwHA4xC+IBx9VlHt57AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"shell",title:"shell",src:"/vaccine-solution-main/static/8b4cc3d6ec3d2ea71da45dc510804a45/3cbba/shell-v10.png",srcSet:["/vaccine-solution-main/static/8b4cc3d6ec3d2ea71da45dc510804a45/7fc1e/shell-v10.png 288w","/vaccine-solution-main/static/8b4cc3d6ec3d2ea71da45dc510804a45/a5df1/shell-v10.png 576w","/vaccine-solution-main/static/8b4cc3d6ec3d2ea71da45dc510804a45/3cbba/shell-v10.png 1152w","/vaccine-solution-main/static/8b4cc3d6ec3d2ea71da45dc510804a45/0b124/shell-v10.png 1728w","/vaccine-solution-main/static/8b4cc3d6ec3d2ea71da45dc510804a45/e957c/shell-v10.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Download the IBM Cloud Pak CLI - ",Object(n.b)("inlineCode",{parentName:"p"},"curl -L https://github.com/IBM/cloud-pak-cli/releases/latest/download/cloudctl-linux-amd64.tar.gz -o cloudctl-linux-amd64.tar.gz"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Untar it - ",Object(n.b)("inlineCode",{parentName:"p"},"tar -xvf cloudctl-linux-amd64.tar.gz"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Rename it for ease of use - ",Object(n.b)("inlineCode",{parentName:"p"},"mv cloudctl-linux-amd64 cloudctl"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Include it to the PATH environment variable - ",Object(n.b)("inlineCode",{parentName:"p"},"export PATH=$PATH:$PWD"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Make sure your IBM Cloud Pak CLI is in the path- ",Object(n.b)("inlineCode",{parentName:"p"},"which cloudctl"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Make sure your IBM Cloud Pak CLI works - ",Object(n.b)("inlineCode",{parentName:"p"},"cloudctl help")),Object(n.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"95.4861111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAABYlAAAWJQFJUiTwAAACfElEQVQ4y3WUyU4bYRCE52EQO3jBnvGGxx578I6DhJIoQkqUC0eeBhEUsVjCVi55xoq/dtoZLOfQ+vfq6q6aCaKopqTdVa1aUz6XV6FQULFYtCgUirZmZF1d3mk0GqrX68t5VWdnZxalUknlctnuBj8Wr/r5a6bF71fNF3O9vRFvFvP5XIvFYr0mXl5eNJvN9PT0pMfHRz08POj5+dnG+/t7BaWwqLAaqlKL1Gw2ValUVKutmDAnMwET9mGxt7eng4ODd7G/v6/d3V0Fw+FAadpVr9fT+fm58vm8ut2ugfT7fYuLiwsD94QAHB8f6+jo6F2wF0y/VzX5Furya12tJFbcjNXpdNRutxXHsQFw0VnBZDPYPzw8NNBg9Lmh6U2s0aemBsO+ptOpRqORgbZaLSudUmHP3EUhSMgZotAKQIPLL219uOlo/LGltJcuL7WMVS6Xe6e4K7pSvbDeY356erpuQUCZlaUo5bCkqBJZNvrIZR7RS/bcGj76uTNbl5y0E/NUFEbGLIpWI3uMrrQDcM765ORkuyj0yfvA5TAMDYygT+yTncvOZFsAiHABjfUysEeSJJbAmQGMEMxdTQfIBmrf3d0pcLXw2NXVlYbDofmQNUqTwFryt1QXApAsMOz4kgIeYglYjcdjAwCQJHiROW1wQejdNlPD8Pb29h8gTPEgALBAaUok86aJN8OZ7uzsrABhR1mTycRKTtPU2FEypXqZ7sWsN521Cxd4f3jA6HZhdHGyD7dFtp9mG34MMKN07w/ud1/6v4+SeZhVe1N1s8319bUFtgGAz45D/jQkGwwGNndvAr5pnTVDyoIlPWHDy0BV34M1jP9XZnb+B8y2gk1TLpdZAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"shell2",title:"shell2",src:"/vaccine-solution-main/static/60e97a38100e48a5ef64dbf40f475c8a/3cbba/shell2-v10.png",srcSet:["/vaccine-solution-main/static/60e97a38100e48a5ef64dbf40f475c8a/7fc1e/shell2-v10.png 288w","/vaccine-solution-main/static/60e97a38100e48a5ef64dbf40f475c8a/a5df1/shell2-v10.png 576w","/vaccine-solution-main/static/60e97a38100e48a5ef64dbf40f475c8a/3cbba/shell2-v10.png 1152w","/vaccine-solution-main/static/60e97a38100e48a5ef64dbf40f475c8a/0b124/shell2-v10.png 1728w","/vaccine-solution-main/static/60e97a38100e48a5ef64dbf40f475c8a/e957c/shell2-v10.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Download the Event Streams plugin for IBM Cloud Pak CLI - ",Object(n.b)("inlineCode",{parentName:"p"},"curl -L http://ibm.biz/es-cli-linux -o es-plugin"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Install it - ",Object(n.b)("inlineCode",{parentName:"p"},"cloudctl plugin install es-plugin"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Make sure it works - ",Object(n.b)("inlineCode",{parentName:"p"},"cloudctl es help")),Object(n.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABPklEQVQoz5WS3W6CQBCFeRKMAa2KgPwpQlJDjQQoEqomfQ+NEW/QplC9aJ/5lJ2KadPUpBdfzmZ29uzMznKr1TPixxhhECAMwx9EUYSwIrrAYkmSYLlcVqyQpiniOMZ8PidYDvfy/obTxxmv5QlFWaIoCpQXzfMcx+MRh8OB1rXu93vsdjtst1us12tsNhsiyzJwowcZhmdAdzTohgpN06AoCjqdDkRRJG2322i1Wt/0rlIBzWYDjcYXPM9TPhc8jTG+1+A6NhxnDMMwIcvyv+n3+9B1HdxwNISiKhXqdYOpJEno9XoEW/9Fvd/tdjEYDMCZpkVtmqZBN9g2q9SBZVlQq0tY+7dMfxlOp1MKCIJAZmxqvu/TRCeTCb1hfehWxVdD9g1msxlV5bouFosFmbI4M/U8jzpgB261Xht+AlkeEbh4JRS1AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"shell3",title:"shell3",src:"/vaccine-solution-main/static/8f4b12c8a2eaff22d44dd16cbb159ea3/3cbba/shell3-v10.png",srcSet:["/vaccine-solution-main/static/8f4b12c8a2eaff22d44dd16cbb159ea3/7fc1e/shell3-v10.png 288w","/vaccine-solution-main/static/8f4b12c8a2eaff22d44dd16cbb159ea3/a5df1/shell3-v10.png 576w","/vaccine-solution-main/static/8f4b12c8a2eaff22d44dd16cbb159ea3/3cbba/shell3-v10.png 1152w","/vaccine-solution-main/static/8f4b12c8a2eaff22d44dd16cbb159ea3/0b124/shell3-v10.png 1728w","/vaccine-solution-main/static/8f4b12c8a2eaff22d44dd16cbb159ea3/4ea69/shell3-v10.png 2304w","/vaccine-solution-main/static/8f4b12c8a2eaff22d44dd16cbb159ea3/94175/shell3-v10.png 2360w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h4",null,"Git"),Object(n.b)("p",null,"IBM Cloud Shell comes with Git already installed out of the box."),Object(n.b)("h4",null,"Vi"),Object(n.b)("p",null,"IBM Cloud Shell comes with Vi already installed out of the box."),Object(n.b)("h2",null,"Development accelerator tools"),Object(n.b)("p",null,"Cloud Pak for Application is used to support the development process. Starting from the Solution Builder to defined each component of the solution. The Cloud Pak for application installation instructions follow ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSCSJL_4.2.x/install-icpa.html"}),"the product documentation")),Object(n.b)("p",null,"The Accelerator technology preview is an optional part of the Cloud Pak for Applications v4.2 installation."),Object(n.b)("p",null,"A key feature of Accelerators for cloud-native solutions is the implementation of a GitOps configuration to support the cloud infrastructure for an application. GitOps provides a declarative configuration that enables an operator to provision the running application with all the required services in place. "),Object(n.b)("h2",null,"Integration"),Object(n.b)("p",null,"As most of the services developed in this solution are publishing and consuming events, we are using Event Streams (IBM packaging of Apache Kafka) on Cloud Pak for Integration. The components and Kafka relationships are detailed in the diagram below:"),Object(n.b)("p",null," ",Object(n.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"676px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.65277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACN0lEQVQoz02Ry2sTURTG87+I4D8guNOtrkQFcePChS4rvoogrgQVVKQP2kUR0Y1QHyBtRURBqkZrUmsfWtI2j2ZmkkySSSbzfmR+3rlJiwc+5sw53/nOd+/NxK4DSQhEg+9eTgyhR2J3JHC62C2d0OpBPxhyBGKfQNTSeuzYZNxul4cvFrk6NsfEy29Mvc5ybWye0ckF3i5ucHt6jiuPXjHyYJZCWSWN6TffuTGxwPXxeWY/rcpamCSEtkXGahscvzzDodP3OTP6lLM3n3Hg5F0OnrrHnScfODEyw7FLUxy5MM6O2pLD52495+jFSQ6ff8zo+NxAsB8PBFObpm1TLCt0TBPbdamqddRaAy/waXe6KLUmVa2G7/uEUUi3Z1FVaihaQ/IjUQvjiEgeudPBDQIcIRqEAf2kjx949EyLIAgFOSIUfVNcjef6OI5Lr+vgOgOhWDhL54I9QV3TWdrUeL+0jul40n5BafAxv0kUx3LB/1EUbheya8JR2kuEYF9yYoZ3mHguhuWQ2yjIbWkodZ3NUlXmSRJjiRe0LFP+a3qT5b9b9PvRcEUyhHjzVLBRb5MrNVnbNcgXdYkfBY3cdp1f5Raff2/zLrvK/NcVvqyXyO/ospfbaezzU/wsNukYJpmeYaDWm2jiKFq9RS1FoyXyQW23qrG69of88grliiI5aa+2x5UYzNpCK2O7PXwBbwjfszDaDSrlbTS1gqpUKJe2KBW3UKolVIHqblG40SV3f07Asrv8A2451RDUxzUrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/vaccine-solution-main/static/20b949d7a39f8efd175e2b7a3013b193/71afc/solution-integration.png",srcSet:["/vaccine-solution-main/static/20b949d7a39f8efd175e2b7a3013b193/7fc1e/solution-integration.png 288w","/vaccine-solution-main/static/20b949d7a39f8efd175e2b7a3013b193/a5df1/solution-integration.png 576w","/vaccine-solution-main/static/20b949d7a39f8efd175e2b7a3013b193/71afc/solution-integration.png 676w"],sizes:"(max-width: 676px) 100vw, 676px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"OpenShift is the container orchestration platform to run on any cloud providers")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_20.2/welcome.html"}),"Cloud Pak for integration")," is the common layer to define the IBM middleware product catalog and offers a set of common services. From an existing OpenShift cluster it is possible to ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_20.2/install/install_online_catalog_sources.html"}),"add the IBM Operator Catalog")," and the IBM Common Services Catalog to your cluster and using OLM to install the IBM operators. Once the catalog is integrated, you can ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_20.2/install/entitlement_key.html"}),"get an entitlement key")," to run licensed software.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In cloud pak for integration we can deploy a Kafka Cluster via ",Object(n.b)("a",o({parentName:"p"},{href:"https://ibm.github.io/event-streams/about/overview/"}),"IBM Event Streams")," operator. Event Streams is an operator-based release and uses custom resources to define your Event Streams configurations. The Event Streams operator uses the custom resources to deploy and manage the entire lifecycle of your Event Streams instances. Custom resources are presented as YAML configuration documents that define instances of the EventStreams custom resource type. The installation instructions are in the ",Object(n.b)("a",o({parentName:"p"},{href:"https://ibm.github.io/event-streams/installing/installing/"}),"product documentation"),"."),Object(n.b)("p",{parentName:"li"},"We strongly recommend to follow ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.youtube.com/watch?v=nSza-RwvxSE"}),"this video")," to see how easy is to get started with Event Streams v10. Installation is in two step, first time deploy the Event Streams operator, which will also automatically deploy the required IBM Cloud Platform Common Services if not present."),Object(n.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"929px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABM0lEQVQoz51R2W7EIAzM/39lj3SzbA6yQLgMmdqgTas+1pIFGDyHGY7jwDRNmOcZSik4ZyFxnue/cogxYl1XbHrHsmoY65By4SQQEXLOnH3/Ostaau1rKReY7AfnEz4eDkoHaMvgz9Byt57BLYyxsEzyNIbVu3aWuoCFEJFSbkCSQjaUeiKXE3+j8oMeJ++p11iVKOkjEYW5rb9joFKhHeHxzNgPQuTe8f6Fz5tiW8B91hinBYkKvPesKrTGw0fc7gus8xeZ5MAULLviTTnM+4GYClveGDw1QBnDuCZ28aNEVFZ2xk+bu9cMG2BMhFFZbCbgtlgElqhWhYd2YFGNZFx4rjZfTTIG67lvichUhaHV26fII7FNfCBGEOZ2WYWVrcjv1Z5dXVdpfMH7HBFzveqC9Q04t3GmAHzUkAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"3",title:"3",src:"/vaccine-solution-main/static/d32b5869eafb814417ebd0873ab69979/22bb3/es-operator.png",srcSet:["/vaccine-solution-main/static/d32b5869eafb814417ebd0873ab69979/7fc1e/es-operator.png 288w","/vaccine-solution-main/static/d32b5869eafb814417ebd0873ab69979/a5df1/es-operator.png 576w","/vaccine-solution-main/static/d32b5869eafb814417ebd0873ab69979/22bb3/es-operator.png 929w"],sizes:"(max-width: 929px) 100vw, 929px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",{parentName:"li"},"Once operator installed, then create cluster instance, users, topics…"),Object(n.b)("span",o({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAAB5klEQVQ4y51Ti46cMAzk/7+yle6gy/JMQh7kMTcOS4+tdlupSJYTYw/2eGiUiRgXi2VdYa3F/z4pReSc0czao581xnHEqhSM2QjssG0W2hhY56CU5n2D1hqOd8lxztMbOO8ZN8xR9d6oZcW6KGxMVsuCdZ6rv5rEBEwK9n1HCIG214lijPUu3hO82cc7HC2wINkNiUViWc7sKhpd/Z+PjDdNU/XXWLNxhK4fnviTlFieAUopv+3gLKHrWnblLjwmND5mdMOC4X6vY6XIUULCz7bHPI11DPnyCXR6ic3rVnNdyPQZYSdgYEF/69j+WEcQjmRjAiZEyzKEo2uX53mYDSbFBfoDMOeCJqUM40hs/E5M+UjYU3ka+eolp5831iYYn6oXrEaKNAFjTCiPAolJUiQnbwFZ3A8zZcPaLE2Uo8NADm98odalJsljKYkfHy1uv7pKg8jl1cjCn4y7P+ok1gi5AiRWyvFCNCVidv7Ql9gV6Dw/qeAEjBxP2QjL1h8ViJWGDM8O5IOvtnyV0TXWOK66vc9Y5okSCSiZMtgLPgfF2IiBv6TI6a/dXQFFjForSsNXeUg3or22/cQwDOj7/iWH7wG5GekoXH6NyEVpu8Oz+1dj/QOQW4qHRE6+xOJjUe84fAf4Bevc55HMmOa7AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"4",title:"4",src:"/vaccine-solution-main/static/37c7b5c896c3ac58085eb9143b421d39/3cbba/es-installation.png",srcSet:["/vaccine-solution-main/static/37c7b5c896c3ac58085eb9143b421d39/7fc1e/es-installation.png 288w","/vaccine-solution-main/static/37c7b5c896c3ac58085eb9143b421d39/a5df1/es-installation.png 576w","/vaccine-solution-main/static/37c7b5c896c3ac58085eb9143b421d39/3cbba/es-installation.png 1152w","/vaccine-solution-main/static/37c7b5c896c3ac58085eb9143b421d39/2f53e/es-installation.png 1160w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",{parentName:"li"}," Once installation is done, install CLI if you want to automate some of the creation of topics, users… See ",Object(n.b)("a",o({parentName:"p"},{href:"https://ibm.github.io/event-streams/installing/post-installation/"}),"the post installation document"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The topics (telemetries, orders, reefers) for the solution are defined in each of the project as yaml files. All Event Streams Kafka resources can be  defined as configuration files and managed with your code repository.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Each components of the solution that are producer, consumer or both, and are deployed in the same OpenShift cluster and set KAFKA_BROKERS and security settings as environment variables, also defined as secrets and config maps. "))))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-environment-mdx-6d7776c54b5fffc7c982.js.map