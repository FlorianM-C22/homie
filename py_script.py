#!/usr/bin/python3
import platform
import subprocess
import sys


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

    print("Installing Docker Compose...")
    install_process = subprocess.run(["sudo", "apt-get", "install", "docker-compose-plugin"])

    if install_process.returncode == 0:
        print("Docker Compose installation completed!")
    else:
        print("Error: Docker Compose installation failed.")


def ubuntu_install():
    print("Installing on Ubuntu...")

    print("Updating packages...")
    subprocess.run(["apt-get", "update"])

    print("Upgrading packages...")
    subprocess.run(["apt-get", "upgrade", "-y"])

    print("Installing Docker...")
    install_process = subprocess.run(["apt-get", "install", "-y", "docker.io"])

    if install_process.returncode == 0:
        print("Docker installation completed!")
    else:
        print("Error: Docker installation failed.")

    print("Installing Docker Compose...")
    install_process = subprocess.run(["apt-get", "install", "docker-compose-plugin"])

    if install_process.returncode == 0:
        print("Docker Compose installation completed!")
    else:
        print("Error: Docker Compose installation failed.")


def get_distribution():
    try:
        with open('/etc/os-release', 'r') as os_release:
            for line in os_release:
                if line.startswith('ID='):
                    return line.split('=')[1].strip().lower()
    except FileNotFoundError:
        pass
    return None


def main():

    distribution = get_distribution()

    if not distribution:
        print("Error: Unable to detect distribution. Exiting.")
        sys.exit(1)

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
