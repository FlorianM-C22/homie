#!/usr/bin/bash
#
#           Homie Installer Script v0.0.1#
#   Github: https://github.com/FlorianM-C22/homie
#   Issues: https://github.com/FlorianM-C22/homie/issues
#   Requires: bash, mv, rm, grep, sed, curl/wget, tar, python3, pip, pnpm
#
#   This script installs Homie to your system.
#   Usage:
#        wget -qO- https://github.com/FlorianM-C22/homie/install.sh | bash
#            or
#        curl -fsSL https://github.com/FlorianM-C22/homie/install.sh | bash
#
#   This script only works on Linux systems.
#   Please open an issue if you notice any bugs.
#
clear
echo -e "\e[0m\c"
#shellcheck disable=SC2016
echo '
 _   _                 _
| | | |               (_)
| |_| | ___  _ __ ___  _  ___
|  _  |/ _ \| `_ ` _ \| |/ _ \
| | | | (_) | | | | | | |  __/
\_| |_/\___/|_| |_| |_|_|\___|

  --- Made by Florian.M ---
'
if command -v python3 &> /dev/null; then
    echo "Python3 is already installed. Moving to the next step..."
else
    echo "Installing Python3..."
    sudo apt-get update
    sudo apt-get install -y python3
    echo "Python3 installation completed !"
fi

python_script_url ="https://github.com/FlorianM-C22/homie/py_script.py"
wget -O py_script.py "$python_script_url"

python3 py_script
