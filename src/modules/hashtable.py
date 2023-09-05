import hashlib
from typing import Any

#HasTable class for storing the zip files and their hashes
class HashTable:
    def __init__(self) -> None:
        self.table = {}

#Function to generate a hash for a given key
    def generate_hash(self, key) -> str:
        return hashlib.sha3_512(key.encode()).hexdigest()

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


