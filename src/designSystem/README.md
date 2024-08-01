# Design System

The purpose of this directory is to be the design system for the rest of the application.  The theory is that components from third party CSS libraries should be wrapped, here.  Any custom common components also reside here.

Although I draw heavily on Semantic UI, theoretically, components from multiple CSS libraries, such as Material UI or Bootstrap, could go here, provided they're wrapped.

Although not currently implemented, one potential with these components would also be to constrain third party components to the parameters that I want to allow in this application.  For example, if I use Semantic UI's Table and I want the consistent look and feel of the table being striped and hoverable, I can input those options here, and thereby prevent parent components in the app from omitting these options.

## TODO
Add TypeScript typing to the Semantic UI wrappers.  Since these are just wrappers from a trusted public package, this hasn't been a priority, but my goal is to follow best practices by having typing on all components.