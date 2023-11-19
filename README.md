###

<h1>Custom Vite app with Typescript and some configs</h1>

<h2>important: need node 20lts</h2>

```
1 - npm install -g degit

2 - npx degit gab-carneiro/custom-vite-app my-app

3 - cd my-app

4 - yarn
```

###

<h2>Libs</h2>
<ul>
<li><b>react-hook-form + yup + yupResolvers</b></li>
<li><b>emotions</b></li>
<li><b>Material ui</b></li>
<li><b>RTK query</b></li>
<li><b>react-redux</b></li>
<li><b>react-router-dom</b></li>
<li><b>usehooks</b></li>
<li><b>date-fns</b></li>
<li><b>i18next</b></li>
<li><b>sonarqube</b></li>

</ul>

###

<h2>configs</h2>

<ul>

<h3>descoment on .gitignore and add your configs:</h3>
<li><b>sonar-project.properties</b></li>
<li><b>.env</b></li>

<h3>react-hook-form + yup + yupResolvers:</h3>
<li><b>custom-input and custom-form are configured </b></li>
<li><b>example of use on the login screen</b></li>

<h3>emotions + Material ui</h3>
<li><b>global configuration of emotions made, and adjusted so as not to be incompatible with mui</b></li>

<h3>react-router-dom:</h3>
<li><b>default configuration done</b></li>

<h3>RTK query + react-redux + context</h3>
<li><b>RTK configuration made to manage global state</b></li>

<h3>date-fns</h3>
<li><b>has a date utils</b></li>

<h3>i18next</h3>
<li><b>internationalization configuration done</b></li>

<h3>sonarqube</h3>
<li><b>in the project, just adjust it to your scenario</b></li>
</ul>

###

<h2>Folder structure</h2>

<ul>
<h3>data</h3>
<li><b>data/api</b></li>
<li><b>data/endpoints</b></li>

<h3>domain</h3>
<li><b>domain/enums</b></li>
<li><b>domain/models</b></li>

<h3>infrastructure</h3>
<li><b>infrastructure/assets</b></li>
<li><b>infrastructure/config</b></li>
<li><b>infrastructure/constants</b></li>
<li><b>infrastructure/context</b></li>
<li><b>infrastructure/context/responsive-context</b></li>
<li><b>infrastructure/language</b></li>
<li><b>infrastructure/language/ptBr</b></li>
<li><b>infrastructure/storage</b></li>
<li><b>infrastructure/store</b></li> 
<li><b>infrastructure/theme</b></li>
<li><b>infrastructure/utils</b></li>

<h3>presentation</h3>
<li><b>presentation/common</b></li>
<li><b>presentation/common/root-container</b></li>
<li><b>presentation/common/routes</b></li>

<li><b>presentation/components</b></li> 
<li><b>presentation/components/custom-button</b></li>
<li><b>presentation/components/custom-form</b></li>
<li><b>presentation/components/custom-header</b></li>
<li><b>presentation/components/custom-input</b></li>
<li><b>presentation/components/custom-screen</b></li>
<li><b>presentation/components/custom-text</b></li>
<li><b>presentation/components/loading-container</b></li>

<li><b>presentation/pages</b></li>
<li><b>presentation/pages/login</b></li>
</ul>
