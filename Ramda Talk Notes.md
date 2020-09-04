# Ramda Talk Notes

## Intro

- Yourself
- Not here to talk about
  -  functors, monads or monoids.
- Practical functional patterns.
- Goal
  - Programmers - should be able to create programs using these tools
  - Non-Programmers -  better understanding of functions and how functional programming works
- Learn theory yourself if interested

## Functions

* Like a wizard
  * Two magical inputs, and one magical output.
  * Really good at only doing one spell.
* Wizard taking other wizards and creating another wizard

## State

* A temporary storing of information to iterate on or use later down the line.
* No wizards, but CAKES!
* Stateless example
* Stateful example
* Why is state bad?
  * Theif
  * Cake swap
  * Drag a finger

## Pipe - Assembly Line

* Pipe
  * is a function
  * takes other functions
  * returns a function waiting for input
* Assembly Line
  * Functions act as members of assembly line
  * Input travels down the line, with each funciton doing biz
* Pipes in Pipes
  * Explain order

## Juxt

* Brought enough of same candy for everyone
* Sideways Pipe
* Array of funcs
* Array of results
* Can contain Pipes
  * which can contain more pipes (or juxts)

## ifElse

* Examples
* the function
  * takes a predicate, true or false
  * if true doThingA
  * If false doThingB
* Can contain pipes
  * And juts!!!

## As Infrastructure

* Control the flow of data
  * pipe, one at a time, in sequence
  * Juxt, everyone at once before moving forward
  * ifElse, a logic switch board
* Do not affect the data
  * These functions do not alter the data
  * the functions given to them do
* May alter the data container
  * Juxt provides an array of answers
  * Arrays are a very common container in FP
    * Map, Filter, Reduce, ..... TRANSDUCE

## Everything Together

* Naming is important
* Depth, breadth, abstraction all require best practice and common sense
* Always look for the main pipe
* Pipes are commonly abstracted, juxts are not
  * hard to name
  * easier to see program flow