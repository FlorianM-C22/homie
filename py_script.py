#!/usr/bin/env python3
import platform
import shutil
import subprocess

def debian_install():
    print("Installing on Debian...")
    print("Updating packages...")
    subprocess.run(["sudo", "apt-get", "update"])
    subprocess.run(["sudo", "apt-get", "upgrade"])

    print("Installing Docker...")
    install_process = subprocess.run(["sudo", "apt-get", "install", "-y", "docker.io"])
    subprocess.run(["sudo", "apt-get", "install", "-y", "docker.io"])
    if install_process.returncode == 0:
            print("Docker installation completed!")
    else:
        print("Error: Docker installation failed.")

def ubuntu_install():
    pass

distribution = platform.linux_distribution()[0].lower()

if "debian" in distribution:
    print("This is a Debian-based system.")
    debian_install()
elif "ubuntu" in distribution:
    print("This is an Ubuntu-based system.")
    ubuntu_install()
else:
    print("This script is intended for Debian & Ubuntu based systems. Exiting.")
    exit(1)
