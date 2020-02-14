# What is it?

This is my attempt to custom-style and then serve html and css code for
a [mailchimp embedded form](https://mailchimp.com/help/add-a-signup-form-to-your-website/).

## What's special about it?

Nothing, really. I am serving the form so that I can make changes in a single place and have all the forms published in my blog updated. To do this, I use `document.write` inside an IIFE to write the markup in the html page and serve the file as a [JavaScript resource](src/mailchimp-form.js).

## How are the resources served?

I use [raw.githack.com](https://raw.githack.com/) to serve the files from this repo.

## How does the final result look like

This is what I ended up with, but you can follow the same pattern and style it in a different way.

![Form example](example.png)
