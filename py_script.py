#!/usr/bin/env python3
import platform
import shutil

if "debian" in platform.version():
    print("This is a Debian-based system.")
    debian_install()
elif "ubuntu" in platform.version():
    print("This is a Ubuntu-based system.")
    ubuntu_install()
else:
    print("This script is intended for Debian & Ubuntu based systems. Exiting.")
    exit(1)

def debian_install():
    pass
def ubuntu_install():
    pass
