import hashlib
import os

#HasTable class for storing the zip files paths and their hashes
class HashTable:
    def __init__(self) -> None:
        self.table:dict[str: str] = {}
    @property
    def Table(self) -> dict[str: str]:
        return self.table
    
#Function to generate a hash for a given key
    def generate_hash(self, key) -> str:
        return hashlib.sha3_512(key.encode()).hexdigest()

    #We need to implement the constraint that le us verify if the hash is already in the table
    #Since we are working with the Has with the next structure:
    #   {hash | path_to_file}
    #   {name_file | path_to_file}
#Function to insert a key(file_name) and a zip path_file into the hash table
    def insert_zip(self, file_name: str, zip_path: str) -> None:
        hash_key: str = self.generate_hash(file_name)
        if hash_key in self.table:
            raise Exception(f"File '{file_name}' already exists in the hash table.")
        self.table[hash_key] = zip_path
        
#Function to delete a zip path file from the hash table given a hash key(file_name)
    def delete_zip(self, file_name: str) -> None:
        hash_key: str = self.generate_hash(file_name)
        if hash_key in self.table:
            del self.table[hash_key]
        else:
            raise Exception(f"File '{file_name}' not found in the hash table.")

#Function to search and get the zip path file from the hash table given a hash key(file_name)
    def get_path(self, file_name: str) -> str | None:
        hash_key: str = self.generate_hash(file_name)
        if hash_key in self.table:
            return self.table[hash_key]
        else:
            raise Exception(f"File '{file_name}' not found in the hash table.")

#Function to get the zip paths from the given directory
    def get_zip_paths(self, directory: str) -> list[str]:
        zip_paths: list[str] = []
        for file in os.listdir(directory):
            if file.endswith(".zip"):
                zip_paths.append(os.path.join(directory, file))
        return zip_paths
    
#Function to populate the hash table with the zip files from the given directory
    def populate_hashtable(self, directory: str) -> None:
        if not os.path.isdir(directory):
            raise Exception(f"Directory '{directory}' not found.")
        zip_paths = self.get_zip_paths(directory)
        for zip_path in zip_paths:
            self.insert_zip(os.path.basename(zip_path), zip_path)

#Function to print the hash table | For debugging purposes
    def __str__(self) -> str:
        tmp: str = "{\n"
        for key, value in self.table.items():
            tmp += f"\t{key} : \n\t\t{value}\n\n"
        tmp += "}"
        return tmp
