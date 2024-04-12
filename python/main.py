from github import Github
github_api=Github()

# Docs = https://pygithub.readthedocs.io/en/stable/introduction.html
# Repo = https://github.com/PyGithub/PyGithub

def get_repo_description(github_api, owner, repo_name):
    """ Get the description of a GitHub repo """
    repo = github_api.get_repo('{}/{}'.format(owner, repo_name))
    issue_open= repo.get_issues(state='open')
    issue_closed= repo.get_issues(state='closed')
    return {'open': list(issue_open) , 'closed': list(issue_closed)}
issue= get_repo_description(github_api, 'oaknational', 'oak-web-application')
print(issue)
    #return repo.description

def main():
    """ Main function to run the program """

    # Uncomment the below to print the description of a repo
    github_api = Github(seconds_between_requests=0.0, per_page=100)
    print(get_repo_description(github_api, 'oaknational', 'oak-web-application'))
    pass





if __name__ == '__main__':
    main()
