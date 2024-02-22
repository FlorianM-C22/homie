#!/usr/bin/python3
"""
Module to create homie user and switch to it.
"""

import subprocess


def create_user(username):
    process = subprocess.run(['sudo', 'useradd', '-m', username],
                             stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    if process.returncode == 0:
        print(f"User '{username}' created successfully.")
    else:
        print(f"Failed to create user '{username}'. \
              Error: {process.stderr.decode()}")


def switch_user(username):
    process = subprocess.run(['su', '-', username],
                             stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    if process.returncode == 0:
        print(f"Switched to user '{username}' successfully.")
    else:
        print(f"Failed to switch to user '{username}'.\
              Error: {process.stderr.decode()}")


create_user('homie')

switch_user('homie')
