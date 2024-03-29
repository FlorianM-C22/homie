#!/usr/bin/python3
"""
Homie User test module.
"""

import subprocess
import pwd


def user_exists(username):
    try:
        pwd.getpwnam(username)
        return True
    except KeyError:
        return False


def create_user(username):
    if not user_exists(username):
        result = subprocess.run(['useradd', '-m', username],
                                capture_output=True, text=True)
        if result.returncode == 0:
            print(f"User {username} created successfully.")
        else:
            print(f"Failed to create user {username}. Error: {result.stderr}")
    else:
        print(f"User {username} already exists.")


def create_directory(username, directory):
    result = subprocess.run(['sudo', '-u', username, 'mkdir', '-p', directory],
                            capture_output=True, text=True)
    if result.returncode == 0:
        print(f"Directory {directory} created successfully.")
    else:
        print(f"Failed to create directory {directory}.\
              Error: {result.stderr}")


def create_file(username, filename):
    result = subprocess.run(['sudo', '-u', username, 'touch', filename],
                            capture_output=True, text=True)
    if result.returncode == 0:
        print(f"File {filename} created successfully.")
    else:
        print(f"Failed to create file {filename}. Error: {result.stderr}")


def main():
    username = 'homie'
    directory = f'/home/{username}/test'
    filename = f'/home/{username}/test.txt'
    create_user(username)
    create_directory(username, directory)
    create_file(username, filename)


if __name__ == "__main__":
    main()
