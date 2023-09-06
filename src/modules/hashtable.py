import hashlib
import os
from typing import Any

#HasTable class for storing the zip files and their hashes
class HashTable:
    def __init__(self) -> None:
        self.table = {}

#Function to generate a hash for a given key
    def generate_hash(self, key) -> str:
        return hashlib.sha3_512(key.encode()).hexdigest()

    #We need to implement the constraint that le us verify if the hash is already in the table
    #Since we are working with the Has with the next structure:
    #   {hash | binary_file}
    #   {name_file | zip_file}
#Function to insert a key(file_name) and a zip file into the hash table
    def insert_zip(self, file_name: str, zip_data: Any) -> None:
        hash_key: str = self.generate_hash(file_name)
        self.table[hash_key] = zip_data
        
#Function to delete a zip file from the hash table given a hash key(file_name)
    def delete_zip(self, file_name: str) -> None:
        hash_key: str = self.generate_hash(file_name)
        if hash_key in self.table:
            del self.table[hash_key]
        else:
            print(f"File '{file_name}' not found in the hash table.")

#Function to search and get the zip file from the hash table given a hash key(file_name)
    def get_zip(self, file_name: str) -> Any | None:
        hash_key: str = self.generate_hash(file_name)
        if hash_key in self.table:
            return self.table[hash_key]
        else:
            print(f"File '{file_name}' not found in the hash table.")
            return None

#Function to get the zip files from the given directory
    def get_zip_files(self, directory: str) -> list:
        zip_files = []
        for file in os.listdir(directory):
            if file.endswith(".zip"):
                zip_files.append(os.path.join(directory, file))
        return zip_files

#Function to populate the hash table with the zip files from the given directory
    def populate_hashtable(self, directory: str) -> None:
        if not os.path.isdir(directory):
            print(f"Directory '{directory}' not found.")
            return self.table
        zip_files = self.get_zip_files(directory)
        for zip_file in zip_files:
            with open(zip_file, "rb") as file:
                zip_data = file.read()
                self.insert_zip(zip_file, zip_data)

#Function to print the hash table | For debugging purposes
    def __str__(self) -> str:
        tmp: str = "{\n"
        for key, value in self.table.items():
            tmp += f"\t{key} : \n\t\t{value}\n\n"
        tmp += "}"
        return tmp
