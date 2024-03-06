// This file was auto-generated. Please do not edit it.

import * as p5 from '....index';

declare module '....index' {
    interface p5InstanceExtensions {
        /**
         *   Creates and names a new variable. A variable is a
         *   container for a value. Variables that are declared
         *   with let will have block-scope. This means that
         *   the variable only exists within the  block that it
         *   is created within.
         *
         *   From the MDN entry: Declares a block scope local
         *   variable, optionally initializing it to a value.
         */
        let: any;

        /**
         *   Creates and names a new constant. Like a variable
         *   created with let, a constant that is created with
         *   const is a container for a value, however
         *   constants cannot be reassigned once they are
         *   declared. Although it is noteworthy that for
         *   non-primitive data types like objects & arrays,
         *   their elements can still be changeable. So if a
         *   variable is assigned an array, you can still add
         *   or remove elements from the array but cannot
         *   reassign another array to it. Also unlike let, you
         *   cannot declare variables without value using
         *   const. Constants have block-scope. This means that
         *   the constant only exists within the  block that it
         *   is created within. A constant cannot be redeclared
         *   within a scope in which it already exists.
         *
         *   From the MDN entry: Declares a read-only named
         *   constant. Constants are block-scoped, much like
         *   variables defined using the 'let' statement. The
         *   value of a constant can't be changed through
         *   reassignment, and it can't be redeclared.
         */
        const: any;

        /**
         *   Creates and names a function. A function is a set
         *   of statements that perform a task. Optionally,
         *   functions can have parameters. Parameters are
         *   variables that are scoped to the function, that
         *   can be assigned a value when calling the
         *   function.Multiple parameters can be given by
         *   seperating them with commmas.
         *
         *   From the MDN entry: Declares a function with the
         *   specified parameters.
         */
        function: any;

        /**
         *   Specifies the value to be returned by a function.
         *   For more info checkout  the MDN entry for return.
         */
        return: any;

        /**
         *   A boolean is one of the 7 primitive data types in
         *   Javascript. A boolean can only be true or false.
         *   From the MDN entry: Boolean represents a logical
         *   entity and can have two values: true, and false.
         */
        boolean: any;

        /**
         *   A string is one of the 7 primitive data types in
         *   Javascript. A string is a series of text
         *   characters. In Javascript, a string value must be
         *   surrounded by either single-quotation marks(') or
         *   double-quotation marks("). From the MDN entry: A
         *   string is a sequence of characters used to
         *   represent text.
         */
        string: any;

        /**
         *   A number is one of the 7 primitive data types in
         *   Javascript. A number can be a whole number or a
         *   decimal number. The MDN entry for number
         */
        number: any;

        /**
         *   From MDN's object basics: An object is a
         *   collection of related data and/or functionality
         *   (which usually consists of several variables and
         *   functions — which are called properties and
         *   methods when they are inside objects.)
         */
        object: any;

        /**
         *   Creates and names a class which is a template for
         *   the creation of objects. From the MDN entry: The
         *   class declaration creates a new Class with a given
         *   name using prototype-based inheritance.
         */
        class: any;

        /**
         *   for creates a loop that is useful for executing
         *   one section of code multiple times. A 'for loop'
         *   consists of three different expressions inside of
         *   a parenthesis, all of which are optional.These
         *   expressions are used to control the number of
         *   times the loop is run.The first expression is a
         *   statement that is used to set the initial state
         *   for the loop.The second expression is a condition
         *   that you would like to check before each loop. If
         *   this expression returns false then the loop will
         *   exit.The third expression is executed at the end
         *   of each loop. These expression are separated by ;
         *   (semi-colon).In case of an empty expression, only
         *   a semi-colon is written.
         *
         *   The code inside of the loop body (in between the
         *   curly braces) is executed between the evaluation
         *   of the second and third expression.
         *
         *   As with any loop, it is important to ensure that
         *   the loop can 'exit', or that the test condition
         *   will eventually evaluate to false. The test
         *   condition with a for loop is the second expression
         *   detailed above. Ensuring that this expression can
         *   eventually become false ensures that your loop
         *   doesn't attempt to run an infinite amount of
         *   times, which can crash your browser.
         *
         *   From the MDN entry: Creates a loop that executes a
         *   specified statement until the test condition
         *   evaluates to false. The condition is evaluated
         *   after executing the statement, resulting in the
         *   specified statement executing at least once.
         */
        for: any;

        /**
         *   while creates a loop that is useful for executing
         *   one section of code multiple times. With a 'while
         *   loop', the code inside of the loop body (between
         *   the curly braces) is run repeatedly until the test
         *   condition (inside of the parenthesis) evaluates to
         *   false. The condition is tested before executing
         *   the code body with while, so if the condition is
         *   initially false the loop body, or statement, will
         *   never execute.
         *
         *   As with any loop, it is important to ensure that
         *   the loop can 'exit', or that the test condition
         *   will eventually evaluate to false. This is to keep
         *   your loop from trying to run an infinite amount of
         *   times, which can crash your browser.
         *
         *   From the MDN entry: The while statement creates a
         *   loop that executes a specified statement as long
         *   as the test condition evaluates to true.The
         *   condition is evaluated before executing the
         *   statement.
         */
        while: any;

        // TODO: Property "===", defined in src/core/reference.js, line 87, is not a valid JS symbol name

        // TODO: Property ">", defined in src/core/reference.js, line 115, is not a valid JS symbol name

        // TODO: Property ">=", defined in src/core/reference.js, line 137, is not a valid JS symbol name

        // TODO: Property "<", defined in src/core/reference.js, line 158, is not a valid JS symbol name

        // TODO: Property "<=", defined in src/core/reference.js, line 179, is not a valid JS symbol name

        // TODO: Property "if-else", defined in src/core/reference.js, line 200, is not a valid JS symbol name
    }
}
