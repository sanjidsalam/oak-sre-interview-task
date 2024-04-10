"""
This file contains the tests for the main.py file.
"""

from types import SimpleNamespace
from main import get_repo_description

def test_get_repo_description():
    """ Test the get_repo_description function """
    fake_github_api = FakeGithubApi()
    result = get_repo_description(fake_github_api, 'oaknational', 'oak-web-application')
    assert result == 'test repo description'

class FakeGithubApi:
    """ Fake GitHub API class """

    def get_repo(self, _repo_path):
        """ Fake get_repo method """
        return SimpleNamespace(description = 'test repo description')
