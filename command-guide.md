# Command Guide

## install react project
~~~ shell
npx create-react-app app-name
~~~
## run json server and define source of data
~~~ shell
npx json-server -p 3500 -w data/db.json
~~~
<br>

build and start after each changes on localhost:
~~~shell
npm start
~~~

install package with npm, (-D means --save)

- [npm.js.com](https://www.npmjs.com/) is a site that you can search for packages and read documentation.

~~~shell
npm i react-icons -D
~~~

1) install package and move to production dependency
```shell
npm i react-icons --save-prod
```
2) unistall package from package.json dependencies
```shell
npm uninstall react-icon
```


## config emmet

1. navigate to file/preference/settings
2. type emmet and then click add Item under Emmet:Include Languages
3. type these key/value pairs
    ~~~
    javascript:javascriptreact
    ~~~

## some popular style component
1. [Styled components](https://styled-components.com/)
2. [React-Icons](https://www.npmjs.com/package/react-icons)
3. [Flex Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## some useful URL
- [Fake Json data](https://jsonplaceholder.typicode.com)

## some packages
- <b>json-server </b>, it will allow you to quickly launch a development API, that you can work with as you build your front-end applications

## Open ssl Error

"--openssl-legacy-provider" script is added in scripts section in `package.json` file to fix ssl-error by using this guide: 
[ssl-error](https://stackoverflow.com/questions/74726224/opensslerrorstack-error03000086digital-envelope-routinesinitialization-e)


## short key for create basic template to write your own component
1. click ctrl + alt + R
2. type `rafce` then press enter

## Link and Resources
- [github-link](https://github.com/gitdagray/react_resources/tree/main?tab=readme-ov-file)
- [youtube-lin](https://www.youtube.com/watch?v=RVFAyFWO4go)