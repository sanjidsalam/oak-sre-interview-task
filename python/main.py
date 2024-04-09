from github import Github
# Docs = https://pygithub.readthedocs.io/en/stable/introduction.html
# Repo = https://github.com/PyGithub/PyGithub

github_api = Github()

def get_repo_description(owner, repo_name):
    repo = github_api.get_repo('{}/{}'.format(owner, repo_name))
    return repo.description

def main():
    # Uncomment the below to print the description of a repo
    # print(get_repo_description('oaknational', 'oak-web-application'))
    pass


if __name__ == '__main__':
    main()
