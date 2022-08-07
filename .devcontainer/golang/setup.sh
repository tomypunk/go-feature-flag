# install curl, git, ...
apt-get update
apt-get install -y curl git jq python3-pip
pip install pre-commit
git clone https://github.com/thomaspoignant/gitalias.git && echo -e "[include]\n   path = $(pwd)/gitalias/.gitalias\n$(cat ~/.gitconfig)" > ~/.gitconfig
