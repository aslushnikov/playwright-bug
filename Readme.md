This bug will only happen on Chromium only on the following conditions:

1. The fetch request is initiated from the onsubmit event of an html form element.
2. The fetch request is executed asynchronously with a small delay (but not zero).