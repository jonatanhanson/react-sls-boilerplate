<!-- SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

<p>
  <a href="https://github.com/helsingborg-stad/dev-guide">
    <img src="images/hbg-github-logo-combo.png" alt="Logo" width="300">
  </a>
</p>
<h3>React Serverless Boilerplate</h3>

  Boilerplate to quickly get started with development of web apps and APIs.
  Includes: React, Serverless API, Eslint, Prettier and  Helsingborg Stad Styleguide.



## Table of Contents
- [Table of Contents](#table-of-contents)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Deploy](#deploy)
- [Contributing](#contributing)
- [License](#license)


## Built With

* [Serverless Framework](https://www.serverless.com/)
* [React](https://reactjs.org/)


## Getting Started

To get a local copy up and running follow these simple steps.



### Prerequisites

* npm
```sh
npm install npm@latest -g
```
* yarn
```sh
npm install --global yarn
```
* Serverless
```sh
npm install -g serverless
```
* AWS account

Follow our [documentation](https://github.com/helsingborg-stad/dev-guide) to setup an AWS account.


* Eslint + Prettier with VSCode

Follow our [documentation](https://github.com/helsingborg-stad/dev-guide) to setup Eslint + Prettier with VSCode.


### Installation

1. Clone the repo
```sh
git clone https://github.com/helsingborg-stad/react-sls-boilerplate.git
```
2. Install dependencies
```sh
yarn
```
3. Install DynamoDB local
```sh
yarn db-setup
```
4. Start the app and local server
```sh
yarn start
```

## Deploy

Instructions for deploys.


## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## License

Distributed under the [MIT License][license-url].



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/helsingborg-stad/react-sls-boilerplate.svg?style=flat-square
[contributors-url]: https://github.com/helsingborg-stad/react-sls-boilerplate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/helsingborg-stad/react-sls-boilerplate.svg?style=flat-square
[forks-url]: https://github.com/helsingborg-stad/react-sls-boilerplate/network/members
[stars-shield]: https://img.shields.io/github/stars/helsingborg-stad/react-sls-boilerplate.svg?style=flat-square
[stars-url]: https://github.com/helsingborg-stad/react-sls-boilerplate/stargazers
[issues-shield]: https://img.shields.io/github/issues/helsingborg-stad/react-sls-boilerplate.svg?style=flat-square
[issues-url]: https://github.com/helsingborg-stad/react-sls-boilerplate/issues
[license-shield]: https://img.shields.io/github/license/helsingborg-stad/react-sls-boilerplate.svg?style=flat-square
[license-url]: https://raw.githubusercontent.com/helsingborg-stad/react-sls-boilerplate/master/LICENSE
[product-screenshot]: images/screenshot.png
