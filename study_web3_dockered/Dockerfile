#FROM amazonlinux
FROM centos
#MAINTAINER RomanH

#prepare system
RUN yum -y update && yum clean all
RUN yum install -y yum-utils && yum clean all
RUN yum-builddep -y python
RUN yum install -y make && yum clean all


#create folders for apps
RUN mkdir /usr/code

#we need node js
RUN yum install -y git && yum clean all
RUN curl -sL https://rpm.nodesource.com/setup_7.x | bash -
RUN yum install -y nodejs && yum clean all
RUN echo 'export NODE_PATH="'$(npm root -g)'"' >> /etc/profile.d/npm.sh
RUN npm install --global fs
RUN npm install --global mysql
RUN npm install --global body-parser
RUN npm install --global express
RUN npm install --global web3

RUN npm --prefix /usr/code install
RUN npm --prefix /usr/ico/eth_scripts install

WORKDIR /usr/code/

CMD printenv | grep -v "yyyyyxxxx" >> /etc/environment && tail -f /dev/null
