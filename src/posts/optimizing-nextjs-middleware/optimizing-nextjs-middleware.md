---
date: "06-22-2022"
title: "Handling Next.js middleware i18 routing"
---

Prefixing detected locale
----
By default, Next.js doesn't apply any locale prefixing of directly accessed domains. This means internationalization with automatic locale detection and routing only happens at the top root level. To bypass this the [official Next.js documentation](https://nextjs.org/docs/advanced-features/i18n-routing) recommends a workaround using the middleware API.
This allows us to manipulate and run code before the requests are fully completed, and by that also handle rerouting the response.

The documentation does explain the basics very well, so I will not elaborate further on that, but instead focus on some of the problems not being adressed, and how we have solved these in our codebase:
- How can we further do the locale detection from here?
- How can we actually use it without prefixing the default domain?

For the first question, we are going to take advantage of Accept-Language that is commonly sent by browsers inside the request-headers. For this, the [accept-language NPM library](https://www.npmjs.com/package/accept-language) can be used. Within `shouldHandleLocale` in our _middleware.ts we get the detected language and append it to the locale of the cloned nextUrl request-object. When the object is passed to the NextResponse, Next.js handles the redirection, and the locale gets prefixed onto the URL.

~~~
    acceptLanguage.languages(['en', 'pt', 'fr', 'da'])

    const detectedLang = acceptLanguage.get(
      request.headers.get('accept-language')
    )

    if (detectedLang === 'en') return

    newUrl.locale = detectedLang
    return NextResponse.redirect(newUrl)
~~~

For the second question, the additional check of _detectedLang_ equals _'en'_ ensures no redirection from the root domain for the primary language. Be aware, that per default, the get-method of acceptLanguage will fallback to the first element in the list if no locale is matched. The return statement is strictly necessary to avoid any infinite redirection loops.

### Handle URL encoding
While running ads for our website we discovered that quite often the customers would be navigated directly to our 404-page. Upon investigation is was discovered that some of our ad-platforms (noticeably Instagram) ASCII encodes their URLS. In short, this would end up with `?queryParam=value` turning into `%3FqueryParam%3Dvalue`.

Quite simply this can be solved with a javascript `replace` inside our _middleware as shown below. 
~~~
   const replaceChars = (href) => {
     const decodedHref = href
       .replace('%3F', '?')
       .replace('%3D', '=')
       .replace('%26', '&')
     return decodedHref
   }
   ...
   return NextResponse.redirect(replaceChars(href))
~~~