# Learn React

# Parcel(bundler)
- Dev Build
- Local Server
- HMR Hot Module Replacement
-File Watching Algortithm c++
-Caching - Fatser builds
-Image Optimization
-Minification
-Bundling
-Compress
-COnsistent Hashing
-Code Splitting
-Differential Building
Diagnostics
Error Handling
-Tree Shaking


# Import and export
there are two types of imports
 Default Export/Import
export default Component;
import Component from "path";
- Named Export/Import
export const Component;
import {Component} from "path";
# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()

# 2 types Routing in web apps
 - Client Side Routing
 - Server Side Routing

 # Lazy Loading
 when the application loads bundlers bundle all the code into one js file. but in Large scale applications it is not good practice as single js file having more size taking more time to load. So making the bundlers small and making a bundle when we require so that it will load when it required. this will be provided be Lazy loading
 - Chunking
 -lazy Loading
 -Code Splitting
 -OnDemand Loading
 -dynamic Bundling
 -Dynamic importing
 Dont import directly import with lazy and suspence the component inorder to avoid the compoennt to suspend the rendering