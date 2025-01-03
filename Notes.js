//To bundle out html ja css files we are using the bundlers parcel webpack or vite
//npm is managing the packages. Packages are used to provide the libraries to our project
//npm init will configure the package.json it will keeps all the packages 
// There are two types or packages devDependencies and dependencies
//DevDependencies are used for the developement and dependencies are for Production also
//to execute the packages we are using npx 
//npx parcel index.html --- it will bundles all the files and loads in the server
//now we can install our react and react-dom with npm without cdn
//and exexute the app by npx parcel index.html
//It will configure the Package.json by keeping all the dependencies versions required for our project.
//Package-lock.json will track the exact versions of the Packages
//npx parcel build index.html will bundles the files and stotre it inside dist parcel only will cache all the data. it will craete the server And when changes are there it will immediatley refresh the server by HMR Hot Module Replacement with file watching algorithm.
