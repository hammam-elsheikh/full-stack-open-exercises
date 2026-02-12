## when the user enter a new note and presses enter or save the following happens
```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: the js code depicts that when the enter or the save button is pressed
    the note is directly added to the notes array and the notes will be rerenderd with the new note
    then the browser sends a post request to save the note in the server.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
```
