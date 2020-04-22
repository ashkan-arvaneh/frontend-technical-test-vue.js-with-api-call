frontend-technical-test-vue.js-with-api-call

1. `npm install`
2. `npm run serve` to start the server
3. `npm run test:unit` for testing

Please note:

1. Currently I'm setting state.loading to false upon successful data response but I have not done anything in regards to API failure. The UX could be improved to show a dialog, etc
2. I could have made more use of vue-router:

router:

```
 {
    path: "/details",
    name: "personDetails",
    component: personDetails
  }
```

component:

```
methods: {
    navigateToDetails() {
      this.$router.push({ path: "details" });
    }
}
```

But I think keeping things simple at this stage provides users with more fluid experience.

3. CSS is currently quite verbose, it could be simplified but I ran out of time. Could possibly create a sass folder and move common styles, animations and page basis to that folder
