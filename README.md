# TODO List

## Setup
1. Clone the repository.

```
git clone git@github.com:ivanrichmond/todo.git
```

2. CD to the created directory: `todo`

```
cd todo
```

3. Use `yarn` to install packages, such as:

```
yarn
```

**NOTE:** If you want to use `npm`, you can, but because I used `yarn` for the project, `npm` may throw errors.  If it does, you may need to use `npm install --force`.

4. Start the React server.

```
yarn start
```

## File System

I've organized the file system as follows.  Most of the directories should be pretty self-explanatory.  I'll focus on `/src`, here.

`/build` the built code
`/public` the public code
`/src` the source code.  Top level items liked `App.tsx` are in the `src/` root
`/src/App.less` contains the Less styling for the project.  `App.css` and `App.css.map` are generated from this.
`/src/index.tsx` is the entry point for the App.
`/src/classes` contains classes for the project
`/src/components` contains most of the components, except for high level ones.
`/src/contexts` contains contexts and providers
`/src/designSystem` mimics a design system for the project.  Most of it contains wrappers around Semantic UI, but a few are my own creation.  For example `AppDate` is an `input type='date'` in which it puts things in `MM-DD-YYYY` format, rather than the default `YYYY-MM-DD` format that it outputs on some browsers.  When I made my own components, I gave them SUI styling for consistency with the SUI CSS, but in a real design system, I'd use SUI's theming to conform to UI/UX/Design's CSS in Figma and make my custom components conform to their designs there as well.
`/src/testData` contains `.json` data that I use to pre-populate the To Do app for testing purposes, so that it mimics a full-stack app that currently has To Do's.
`/src/**/*.test.*` I've put unit tests in the same place as the items their testing, following React's setup with `react-create`.  In my opinion, this keeps things simple and easy, because each test file is in the same directory as the file it's testing.  Since `Jest` automatically finds these files, I find it easy to organize it this way, but I'm also familiar with other schema, such as either having a `/tests` directory, which mimics the structure of `/src` or having `__tests__` directories under each directory.  I'm happy to adjust to any schema for any company I work for or any project I work on.

## Styling

Most of the styling comes from 2 places: Semantic UI's CSS and my own styling in `App.less`.

- I use SUI's CSS to mimic the CSS we'd get from a design system.
- I use `App.less` to style the app, working in conjunction with SUI's styling.

## Theory

- I prefer contexts over passing down states as child props through the component tree.  I prefer to use props to configure the components they're being passed directly into.  So, you'll notice that my components are fairly clean of props, for this reason.
- I like to alphabetize when possible.  I find that this scales well.  If you have to find something in the code, and there are a lot of items to check, it's much easier to find them alphabetically.
## Components

### AddTodos

Provides a form for adding new todos to the list and an add button to add them.

- It uses the NoticeContext to error out if the use did not fill in all the fields.
    - This is picked up in `Notice.tsx`.

### DueDateFilter

Currently, I'm only filtering my status.  Right now, this component is a placeholder for when I add a filter by due date, which is why it's currently disabled.

### Notice

Displays notices, such as errors, in conjunction with the `NoticeContext` and `Notice` class.  As such, it displays itself if there's a `notice` in `NoticeContext`.  

- `notice.type` contains the type of notice (`success`, `info`, `warning`, or `error`).  Based on this, the notice will show up in different colors, such as red tones for errors.  
- The message displayed comes from `notice.message`.
- If you click the X button to cancel it, it hides itself by calling `deleteNotice` from the `NoticeContext`, which clears `notice`, thus causing it not to show.

### StatusFilter

Filters the data in `TodoList` by `todo.status` or shows all if `all` is selected.

### TaskFilter

A placeholder for when I add a filter by task.  Once in place, it would allow the user to type in a task name to search for and filter only `todo.task` containing that, in `TodoList`.  It's currently disabled to indicate that it's not ready to go yet.

### TodoList

A list of To Do tasks, including their status and due dates.
- Checking and unchecking the status box toggles `status` between `complete` and `incomplete`.
- Completed items are shown as green.
- The delete button in the final column deletes a task.

### Todos

This is the meat of the Todo app, just under `App`.  I separated it from `App`, because, if this application were extended to have other features, such as user auth, `Todos` should only take care of the actual to do portion of the app.  This way, other sections could be added such as `UserProfile`, which would also be under `App`.

## Design System

This section documents the components under `/src/designSystem`.  
- My convention is to give each of these components the `App` prefix, as in `AppButton`.
- Most of these are just wrappers around Semantic UI.  I won't cover all of those, here, just the components that I made.  If it's not documented here, simply remove the `App` prefix and look it up in Semantic UI's React documentation: https://react.semantic-ui.com/ 
    - The sole exception to this is `AppTooltip`, which wraps `Popup`: https://react.semantic-ui.com/modules/popup/  I changed the name, because I find SUI's name to be confusing.  A "popup" could mean many things.  A tooltip is more specific, and I'm using this only for tooltips, so I wanted to name it appropriately.
- The reason I wrapped SUI components is:
    1. It's a step toward decoupling from their calling components in `/src/components`.  While it doesn't completely decouple, because a different library's comparible component might have different props, it goes a long way toward insulating these into one place.  The `/src/components` components are ignorant of the library used.  Thus, if we wanted to change from, say, Material UI, we might have to change the props passed to each instance of `AppButton`, but we wouldn't have to comb through the app looking for SUI `Button`s and change them to MUI ones, which would be a much lengthier refactor.
    2. If we only wanted to use a library in certain ways, we could restrict certain usages that we don't want to allow in the UI.  Let's say the library's Sprocket component has props `prop1`, `prop2` and `prop3`, but we wanted to set a rule for UI development that `prop3` is always set to a particular value.  We could essentially establish rules of usage by, programatically, simply by omitting `prop3` from the props in `AppSprocket` and then code `props3` as having that particular value in the wrapped `Sprocket` code.  I haven't done any of that here, but it's opens up that possibility.
    3. This also allows for the possibility of combining items from the library or library items with custom ones.  For instance, you'll notice that SUI's components do not have tooltips, but rather require you to wrape their components in a `Popup` to create a tooltip.  However, in my custom items, I leveraged my wrapper of `Popup`, `AppTooltip`, to display the tooltip passed into the `tooltip` prop.  That way, all you have to do is supply a tooltip prop to see a tooltip (and you don't see one if nothing's passed in).  This way, all calling components can use the hybrid component, based on the library's components (e.g. SUI's), without having to fuss with things like wrapping SUI's components in SUI `Popup`s, every time.
    4. I just consider it to be best practices to insulate third party components this way.  It's simply cleaner and easier to maintain.

### AppDate

A date picker, based on HTML `<input type='date'>` and SUI's `Form.Input`.  
When using `<input type='date'>` or SUI's version, which is ultimately the same thing with bells and whistles added, I found that the value is in `YYYY/MM/DD` format in some browsers.  But I wanted the American standard: `MM/DD/YYYY`.  So I decided to make my own component, which does this, so that I'll be sure to get that.

#### Props

`label`: OPTIONAL a label for the date picker

`onChange`: a function that does something when the date is changed

`tooltip`: OPTIONAL a tooltip string to be displayed on hover

`tooltipPosition`: OPTIONAL the position of the tooltip as: `right center` | `top left` | `top right` | `bottom right` | `bottom left` | `left center` | `top center` | `bottom center` (default)

### AppSelect

This component is based around HTML `<select>` and provides a dropdown to select something.  Although SUI has a `Dropdown` component, I preferred to make my own.  To make it blend in with the SUI look and feel, I used SUI CSS classes.  `AppSelect` is intended to be used with a `filter` function.  It has the tooltip optionally as part of it, so that you don't have to wrap it in `AppTooltip`.
#### Props

`className`: OPTIONAL Provide an additional CSS class

`label`: the label for the Select

`filter`: OPTIONAL Provide a filtering function for the `onChange` event

`options`: an array of items to select.

`tooltip`: OPTIONAL text for a tooltip

`tooltipPosition`: OPTIONAL direction for the tooltip as: 
    `right center` | `top left` | `top right` | `bottom right` | `bottom left` | `left center` | `top center` | `bottom center` (default)

## Classes

### Notice
Models a notification, such as an error.
{
    `message`: the text of the message
    `sendToConsole()`: calls the appropriate `console` method to send `message` to the console
    `type`: the type of notification: `info` | `warning` | `error` | `success`
}
### Todo
Models a to-do item.
{
    `complete()`: a convenience function that wraps `setStatus()`, setting `status` to `complete`
    `dueDate`: the due date of the to do
    `status`: `complete` | `incomplete`
    `setStatus`: setter function for `status`
    `task`: a description of the to do (aka the "task")
    `unComplete()`: a convenience function that wraps `setStatus()`, setting `status` to `incomplete`
}

## Contexts

### NoticeContext

This provides data around notifications, such as errors, warnings, successes, and infos.  It makes use of the `Notice` class.  It can be used in 2 ways: (1) it can be picked up by a component, which displays the notice on the screen (in this case the `Notice` component), and (2) it can be used to console out, based on the type of notice.
- `createNotice()`: sets `notice`
- `deleteNotice()`: clears the notice
- `notice`: `{message, type}`
    - `message`: The text of the notification, or empty string if none.
    - `type`: `error` | `warning` | `success` | `info`

### TodoContext

Keeps track of most of the data of the to do list, leveraging the `Todo` class.

`todos`: an array of `Todo` objects
`addTodo()`: a function to add a `Todo` object to `todos`
`deleteTodo()`: a function to delete a `Todo` object from `todos`
`toggleComplete()`: a function to toggle `Todo.status` between `complete` and `incomplete`
`filterStatus`: the filter for `Todo.status`, which can be used by callng components, such as `TodoList`, to filter `todos`.
`setFilterStatus()`: a setter function to set `filterStatus`.

Enjoy!
