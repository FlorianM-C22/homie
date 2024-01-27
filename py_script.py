#!/usr/bin/python3
import platform
import subprocess
import sys

def check_privileges():
    if not subprocess.run(["sudo", "-n", "true"]).returncode == 0:
        print("Error: Insufficient privileges. Please run the script with sudo.")
        sys.exit(1)

def debian_install():
    print("Installing on Debian...")

    print("Updating packages...")
    subprocess.run(["sudo", "apt-get", "update"])

    print("Upgrading packages...")
    subprocess.run(["sudo", "apt-get", "upgrade", "-y"])

    print("Installing Docker...")
    install_process = subprocess.run(["sudo", "apt-get", "install", "-y", "docker.io"])

    if install_process.returncode == 0:
        print("Docker installation completed!")
    else:
        print("Error: Docker installation failed.")

def ubuntu_install():
    print("Installing on Ubuntu...")  # Add Ubuntu-specific installation steps here

def main():
    check_privileges()

    try:
        distribution = platform.linux_distribution()[0].lower()
    except AttributeError:
        # For newer versions of Python
        distribution = platform.system().lower()

    # Fallback for distributions that do not have 'linux_distribution' or 'dist' available
    if not distribution:
        with open('/etc/os-release', 'r') as os_release:
            for line in os_release:
                if line.startswith('ID='):
                    distribution = line.split('=')[1].strip().lower()

    # Fallback to generic 'linux' if distribution is still not detected
    distribution = distribution or 'linux'

    if "debian" in distribution:
        print("This is a Debian-based system.")
        debian_install()
    elif "ubuntu" in distribution:
        print("This is an Ubuntu-based system.")
        ubuntu_install()
    else:
        print(f"This script is intended for Debian & Ubuntu based systems, but detected: {distribution}. Exiting.")
        sys.exit(1)

if __name__ == "__main__":
    main()
