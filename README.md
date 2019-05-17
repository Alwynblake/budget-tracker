# budget-tracker
### author: Alistair A. Blake
#### Feature Tasks
##### category
* in this app a section contains at least the following properties:
  * `id` a uuid
  * `timestamp` a date from when the section was created
  * `name` a string that is the name of the category
  * `budget` a number that is the total amount of $ in the category

##### redux
###### reducer
* created a section reducer in your reducer directory
* this reducer supports the following interactions:
  * `CATEGORY_CREATE`
  * `CATEGORY_UPDATE`
  * `CATEGORY_DESTROY`

###### action creators
* created an action creator for each interaction supported by the section reducer

##### Components
Created the following components and structured them according to the following diagram.
```
App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [Category Item]
           CategoryForm  -- for updating categories
```

###### App Component
The App component should set up the Provider for the redux store and the Router.

###### Dashboard Component
* should be displayed on the `/` route
* should use react-redux's `connect` to map state and dispatchable methods to props
* should display a `CategoryForm` for adding categories to the app state
* should display a `CategoryItem` for each category in the app state

###### CategoryForm Component
* should expect an `onComplete` prop to be a function
  * that function should be invoked with the CategoryForms state when the form is submitted
* should expect a `buttonText` prop to configure the submit buttons text
* should support an optional `category` prop that will initialize the state of the form

###### CategoryItem Component
* should display the category's name and budget
* should display a delete button
  * `onClick` the category should be removed from the application state
* should display a CategoryForm
  * `onComplete` the form should update the component in the application state

#### Documentation
Write a description of the project in your README.md