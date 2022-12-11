---
date: "12-11-2022"
title: "Simple abstraction around fetch"
---

Fetch is a modern API that allows you to make network requests in JavaScript. It is often used to fetch data from a server and load it into a web page. In this article, we will look at how you can abstract the fetch function in TypeScript to make it more reusable and easier to work with.

First, let's take a look at a basic example of how you would use the fetch function in JavaScript. This example fetches a JSON file from a server and then logs the data to the console:


~~~
  fetch('data.json')
    .then(response => response.json())
    .then(data => console.log(data));
~~~

One problem with this approach is that it can be difficult to test and debug. If something goes wrong, it can be hard to figure out what's happening because the error message will be buried in the then method. Additionally, if you want to apply consistent header params or sign the requests this will require a lot of duplicate code with no single source of truth.

To solve these problems, we can abstract the fetch function by creating a new function that wraps the fetch call and makes it easier to work with. Here is an example of how you might do this in TypeScript:

~~~
const fetchData = async (url : string): Promise<any> => {
  return fetch(url)
    .then((res) => handleResponse(res))
    .then((data) => data)
    .catch((e) => {
      console.error(e)
      throw e
    })
}
~~~

Note the handleResponse function which is used to catch any potential errors. This function can be used to either check on specific statuscodes or to validate the response.ok property. As some errors contains an error message from backend, we also need to await the json property to throw the error correct. Here is an example of how we handle endpoint errors:

~~~
const handleResponse = async (res: Response) : Promise<any> => {
  const data = await res.json()
  if (res.status >= 400) {
    Logger.error(data)
    throw { msg: data, statusCode: res.status }
  }
  return data
}
~~~

Now, instead of calling the fetch function directly, we can use this fetchData function. Here is an example of how you might use it in your code:

~~~
fetchData(url)
  .then(data => console.log(data))
  .catch(error => console.error(error));
~~~

By abstracting the fetch function in this way, we have made our code easier to test and debug. If something goes wrong, we will get a clear error message that tells us what happened. Additionally, we can easily reuse this fetchData function in multiple places in our code, which will make it easier to maintain.

In summary, abstracting the fetch function in TypeScript can help you to make your code more reusable and easier to work with. By creating a new function that wraps the fetch call and provides additional error-checking and other useful features, you can make your code more reliable and easier to maintain.