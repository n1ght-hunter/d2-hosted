FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

# Install packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    apt-transport-https \
    build-essential \
    ca-certificates \
    curl \
    git \
    htop \
    inetutils-ping \
    iproute2 \
    less \
    unzip \
    vim \
    wget \
    zip \
    zsh \
    && rm -rf /var/lib/apt/lists/*

# Install oh-my-zsh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# install oh-my-zsh plugins
RUN git clone --depth=1 https://github.com/ntnyq/omz-plugin-pnpm.git $HOME/.oh-my-zsh/custom/plugins/pnpm
COPY .zshrc /root/.zshrc
RUN chsh -s /bin/zsh

SHELL [ "/bin/zsh", "-c" ]

# Install go
# If you change the version the bazel version in go.mod should be set to match.
ENV GOVERSION="1.23.0"
RUN wget https://go.dev/dl/go${GOVERSION}.linux-amd64.tar.gz -O go.tar.gz \
    && tar -xvf go.tar.gz \
    && mv go /usr/local \
    && rm go.tar.gz

# Install fnm
RUN curl -fsSL https://fnm.vercel.app/install | zsh -s -- --install-dir "/opt/fnm" --skip-shell && \
    ln -s /opt/fnm/fnm /usr/bin/ && chmod +x /usr/bin/fnm  && \
    fnm -V

# install node
RUN source ~/.zshrc && fnm use --install-if-missing 20
RUN source ~/.zshrc && npm install -g pnpm


# install just
RUN curl --proto '=https' --tlsv1.2 -sSf https://just.systems/install.sh | bash -s -- --to /usr/local/just/bin
RUN source ~/.zshrc && just --completions zsh > /usr/share/zsh/vendor-completions/_just
