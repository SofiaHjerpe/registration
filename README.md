# registration

# Account Registration


5. The `password` must be atleast 8 characters long. If the password is not of length, the input should receive appropriate styling to visualize this for the user. When the passwords is long enough the styling returns to normal _( or to an affirmative state if you would like )_.

6. The `confirm password` must be validated to be identical as the `password`. If that's not the case, the input should receive appropriate styling to visualize this for the user, much like the previous part.

7. If the `password` or the `confirm password` has not been correctly typed, the submit button should be disabled.

8. There must be a submit event in the application. When the form is submitted all of the data should be presented in an object like this:

```js
const registrationData = {
  name: "first name last name",
  username: "username",
  email: "email@email.com",
  password: "password",
};
```

This object is to be written to the console or written in an alert. The values should of course be corresponding to the values that the user have typed.

9. I would like that you also focus on writing clean code and use decent, thought-through, stylings.
    