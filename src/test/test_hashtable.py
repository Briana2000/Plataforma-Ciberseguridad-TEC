#test_hastable.py test the hashTable.py functionality

#region Imports
from modules.hashtable import HashTable
from collections import namedtuple
import pytest
import os
from dotenv import load_dotenv
#endregion Imports

load_dotenv()
#region fixtures
@pytest.fixture
def EXERCISES_DIR():
    return os.getenv("EXERCISES_DIR")

@pytest.fixture
def hash_table():
    return HashTable()
#endregion fixtures

#region Dummy Data
DummyFile = namedtuple("DummyFile", ["name", "path"])

script_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.dirname(script_dir)
dummy_path = os.path.join(root_dir + "/ejercicios/", "TestCase.zip")
with open(dummy_path, "rb") as dummy_file:
    dummy_content = dummy_file.read()

dummy_files = [
    DummyFile("test.zip", "./test.zip"),
    DummyFile("test2.zip", "./test2.zip"),
    DummyFile("DummyForDumies", dummy_path)
]
#endregion Dummy Data

#Test for the generation of a hash
def test_generate_hash(hash_table):
    assert hash_table.generate_hash(dummy_files[2].name) == "93b3b31e052599977d78fe41b97eed002ec8bfcf78f6f6e00ac83deee7a9cf1995256808e8b92bc5c1a787a4cbb2417c0103d39df3fb6e88408ab37580cb7915"


#Test for the creation of the hash table
def test_create_hashtable(hash_table):
    assert hash_table != None

#Test for the insertion of a zip path into the hash table
def test_insert_zip(hash_table):
    for dummy_file in dummy_files:
        hash_table.insert_zip(dummy_file.name, dummy_file.path)
        assert hash_table.table[hash_table.generate_hash(dummy_file.name)] == dummy_file.path

#Test for the deletion of a zip path from the hash table
def test_delete_zip(hash_table):
    hash_table.insert_zip(dummy_files[0].name, dummy_files[0].path)
    hash_table.delete_zip(dummy_files[0].name)
    assert hash_table.table == {}

#Test for the deletion of a zip path from the hash table that does not exist
def test_delete_zip_not_found(hash_table):
    with pytest.raises(Exception) as excinfo:
        hash_table.insert_zip(dummy_files[0].name, dummy_files[0].path)
        hash_table.delete_zip(dummy_files[1].name)
    assert str(excinfo.value) == f"File '{dummy_files[1].name}' not found in the hash table."

#Test for the search of a zip path from the hash table
def test_get_path(hash_table):
    hash_table.insert_zip(dummy_files[0].name, dummy_files[0].path)
    assert hash_table.get_path(dummy_files[0].name) == dummy_files[0].path

#Test for the search of a zip path from the hash table that does not exist
def test_get_path_not_found(hash_table):
    with pytest.raises(Exception) as excinfo:
        hash_table.insert_zip(dummy_files[0].name, dummy_files[0].path)
        hash_table.get_path(dummy_files[1].name)
    assert str(excinfo.value) == f"File '{dummy_files[1].name}' not found in the hash table."

#Test for the population of the hash table with the zip paths from the given directory
def test_populate_hashtable(hash_table, EXERCISES_DIR):
    hash_table.populate_hashtable(EXERCISES_DIR)
    assert len(hash_table.table) > 0

#Test for the population of the hash table with the zip paths from the given directory that does not exist
def test_populate_hashtable_not_found(hash_table, dir:str = "this dir does not exist"):
    with pytest.raises(Exception) as excinfo:
        hash_table.populate_hashtable(dir)
        assert hash_table.table == {}
    assert str(excinfo.value) == f"Directory '{dir}' not found."

#Test for the print of the hash table
def test_hashtable_print(hash_table):
    hash_table.insert_zip(dummy_files[0].name, dummy_files[0].path)
    hash_table.insert_zip(dummy_files[1].name, dummy_files[1].path)
    hash_table.insert_zip(dummy_files[2].name, dummy_files[2].path)
    print(hash_table)
    assert hash_table.Table != None