#!/usr/bin/python3
"""
Homie User test module.
"""

import subprocess


def create_user(username):
    result = subprocess.run(['sudo', 'useradd', '-m', username],
                            capture_output=True, text=True)
    if result.returncode == 0:
        print(f"User {username} created successfully.")
    else:
        print(f"Failed to create user {username}. Error: {result.stderr}")


def main():
    create_user('homie')
    subprocess.run(['sudo', '-u', 'homie', 'mkdir', 'test'], check=True)
