FROM gitpod/workspace-full-vnc

SHELL ["/bin/bash", "-c"]
RUN source "/home/gitpod/.sdkman/bin/sdkman-init.sh"  \
    && sdk install java 17.0.4.1-tem < /dev/null

# Node.js 설치
RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

# 기타 필요한 도구 설치
RUN npm install -g npm
