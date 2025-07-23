---
title: "Shard. A next-gen shell."
date: "2025-07-23"
excerpt: "I created Shard as the new kind of shell I was expecting to find. It combines functional programming to make a next-gen shell that is able to serve as the daily driver for a lot of people."
---

Shard. The project I am going to be working on (and I expect to end once for all). I designed it first, to make sure the language and the shell didn't lack any of the capabilities a modern shell needs. I'll be writing it with Zig, but before begining to actually write it, I need to explain a bit of how the language works.

## Functional Programming

Functional Programming is one of things I have always pursued but never acutally achieved. Thinking in functional programming is hard for me, since it requires thinking in a different way than we are teached since we begin programming. But I actually find it very sleek and powerful.

Shard is based on Haskell's syntax, with patters deriving from both Functional and Imperative Programming.

### Functions 

Here's a simple add function definition in Shard:

```haskell
addTwo x y = x + y
```

It looks a lot like Haskell. I also want to support static typing so that the language is safe to write. Here's the function with that:

```haskell
addTwo : Int, Int -> Int
addTwo x y = x + y
```

### Variables

Pardon me, Haskell, but in Shard, we're not going to have purity and inmutability. Variables are mutable.

```haskell
let a = 1
-- Or if you are feeling like it
let b : Int = 3
```

### Types 

Types in Shard aren't that compilcated, they are easy to follow and use:

#### Type Definitions

A Type in Shard, is some name that enclosures some functions and variables:

```haskell
type Animal =
    name : String = "Unnamed" -- this is a variable, we can even give a default

    say : Nothing -> String
    delete : Nothing -| -- '-|' meaning that it returns the same that it takes
```

#### Data Declarations

Instead, Data types are types that enclosure some tagged data.

```haskell
data Token =
    Comma |
    OpenParenthesis |
    CloseParenthesis |
    Other(String)
```

I plan to bring to the scripting langauge actual capabilities regarding abstraction. Types like this exist in the standard library:

```haskell
type array<&num> &list =
    value : (typeof list.enclosingType)[num] = list
```

What is basically defining is:

* We have a type `array` which takes as template a expression (normally a number) like this: `array<3>`
* Then, we have a **comptime list** as a submission to the initializer
* And that list gets passed to the inner value

### Threads

Fusion has an interesting approach to threads, since threads are named. Imagine this:

* When we open a shell session, we get a screen like this:
```
~ [main] > _
```
  * **`main`** is the thread we're at in.

* By using some commands like `switch` or `spawn`

-------------

I hope I finish the project. I'll try to write regularly every one or two weeks, which a devlog. I leave you with a script I made that showcases a bit about the language: 

```haskell

import fusion -- just for scripting
import thread -- also just for scripting. In repl, these will be imported
import signals -- again

let output_file = "output.txt"
io.clearFile output_file -- You can do it with 'try' or with not, but the function is @throws

cleanUp =
    print "Cleaning up..."
    io.remove output_file
    exit 0

defer cleanUp -- or 'onSignal signal.SIGINT cleanUp'

backgroundTask =
    for i in (range 1 5) do
        print "Background $i" to output_file -- You can use 'io.write', for demonstrating REPL purpose, here you can have it. 'to' is like a pipe
        wait 1
    end

spawn backgroundTask :backgroundThread

while true do
    print "Enter something or enter 'exit'"
    let input = getInput
    if input == "exit" then
        print "Exiting..."
    end
    io.write output_file, "You said: $input" -- Commas are optional when calling functions
end

print "Contents of $output_file:"
read output_file to print -- Or just 'read output_file'

cleanUp
```
