# gknoop.com
Source for my homesite.

## Stack
  - [GatsbyJS](https://www.gatsbyjs.com/) [(Gatsby Advanced Starter)](https://github.com/vagr9k/gatsby-advanced-starter/)
  - [Bootstrap](https://getbootstrap.com/)
### Dev Environment
  - Windows 10 with WSL2 (Ubuntu 20.04 LTS)
  - VS Code

## Instructions for Replicating 
  - [Install nvm and node](https://www.gatsbyjs.com/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system) 
  - [Install Git](https://www.atlassian.com/git/tutorials/install-git)
  - [Globally install GatsbyJS](https://www.gatsbyjs.com/tutorial/part-zero/#using-the-gatsby-cli) (i.e. `npm i -g gatsbyjs`)
  - Create a new project with `gatsby new [project name] https://github.com/Vagr9K/gatsby-advanced-starter`
  - `cd` into the project folder and run `gatsby develop` to generate a live reloading page at localhost:8000
  - Edit static/admin/config.yml to use your credentials (after which you can access \[website url\]/admin) - [source](https://github.com/vagr9k/gatsby-advanced-starter#netlifycms)
  - Install [Bootstrap](https://www.npmjs.com/package/bootstrap) in your project (i.e. `npm i bootstrap`)
  
## Troubleshooting
  - It is very likely you will receive a notice that there are unresolved dependencies. For security purposes, it is not possible to automatically install all dependencies in npm. You must resolve them manually with `npm i [space-separated list of package names]`
  - If you receive a warning about any high-risk vulnerabilities, you can likely ignore this. The offending files are likely dependencies of the Bootstrap package, which shouldn't be included in the static assets generated after running `gatsby build`. YMMV.
