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