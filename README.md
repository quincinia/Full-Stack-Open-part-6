# Full-Stack-Open-part-6
Similar structure to part 5, gonna write notes for all the exercises here.

## Exercise 6.1
It feels like my reducer could be written more succinctly, but maybe I'm just being pedantic. I believe I added all the test cases for each of the different actions. Trying to use Prettier more.

## Exercise 6.2
App now works using the store. No major changes, just adding in the missing functions.

## Exercise 6.3
Reworked the directory structure. Add your action creators first, as they determine the structure of your actions. Don't remember why we use non-equality when we call `map`. Otherwise followed the story.

## Exercise 6.4
You can now add new anecdotes. I used `anecdoteToChange.votes++` to add new votes, but I see that this was incorrect because postfix will return the old value, which means that the update won't change anything. Used `+1` instead of incrementing so that the orginal state isn't changed.

## Exercise 6.5
Anecdotes are now sorted by votes. Like with part 5, I am using the `sort` method instead of manually bubbling the voted element. The default state does not need to be sorted because all anecdotes are zero.

## Exercise 6.6
Action creators have been in their own since 6.3 (`addVote`)and 6.4 (`createAnecdote`).

## Exercise 6.7
The form for adding new anecdotes has been moved to its own component. Wrapped the form in a fragment/empty tag in order to preserve the same HTML structure as before. Otherwise, the form was copied pretty directly from the App.

## Exercise 6.8
The anecdotes list is now its own component. Again, this was a relatively straightforward extraction.

## Exercise 6.9
Installed Redux DevTools. Moved the store to its own file. I put it alongside `index.js` because it doesn't really fit within the existing directory structure.

## Exercise 6.10
Only going to have 1 action (`SET_NOTIFICATION`) for the notification reducer. It will work like the previous parts where the Notification will render `null` when it detects that the message is `null`. Updated the store to hold notification messages alongside the messages. Make sure that whenever you update the structure of the store, you also update any selectors within your components. 

## Exercise 6.11
Notification messages disappear after 5 seconds\*.  
\*However, if a new notification is rendered *before* 5 seconds passes, then that notification **will not** reset the timer.

I don't know why I didn't think of this problem for the last few parts that used the Notification component. One way to solve this would be to use two actions (`set` and `remove`) and manage a private variable in the notification reducer that acts as a sort of semaphore. The semaphore counts up from 0, incrementing when we call `set`, and decrementing when we call `remove`. A call to `remove` will only truly remove the notification if the notification is at 0 after the decrement.

To keep things consistent with previous parts, I will **not** be doing anything to prevent this issue.