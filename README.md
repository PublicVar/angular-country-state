# Angular Country State Select

## Description

This Angularjs directive add 2 select boxes. One for selecting the country and one for the state.
It based on the script written by [Shafiul Azam](https://bdhacker.wordpress.com/2009/11/21/adding-dropdown-country-state-list-dynamically-into-your-html-form-by-javascript/)

## Installation

Clone this repository. 
After including the **angular-country-state-select.js** file in your app, inject **'angularCountryState'** as a dependency in your AngularJS module:

```
angular
    .module('yourAppName', [
    'rest',
    'of',
    'your'
    'dependencies',
    'angularCountryState']);
```

### How to use

Insert the tag in your html files :
```
<country-state-select></country-state-select>
```

To get the chosen state and country, you need to bind your model.
```
<country-state-select country="myCountryModel" state="myStateModel"></country-state-select>
```

### Options
There are some other options :
* **country-label** : The label for the country select box. *default = "Country"*
* **country-select-label** : The select text in the country select box. *default = "Select"*
* **state-label** : The label for the state select box. *default = "State"*