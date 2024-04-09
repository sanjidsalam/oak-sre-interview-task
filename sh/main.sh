#!/usr/bin/env bash

function get_repo_description() {
  owner=${1}
  repo=${2}
  curl --silent https://api.github.com/repos/${owner}/${repo} | jq '.description'
}


which curl > /dev/null 2> /dev/null
if [[ $? -ne 0 ]]
then
  echo "curl required. Please install"
fi

which jq > /dev/null 2> /dev/null
if [[ $? -ne 0 ]]
then
  echo "jq required. Please install"
fi


# Uncomment the below to print the description of a repo
# description=$(get_repo_description "oaknational" "oak-web-application")
# echo ${description}

