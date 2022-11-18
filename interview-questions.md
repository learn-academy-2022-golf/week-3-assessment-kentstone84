# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

//1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is an extension to React that allows us to write code in a HTML type format and place them into a dom. React allows us to use a virtual DOM and when we make changes to the virtual DOM to updates and makes changes to the UI being the webpage. 

Researched answer: JSX stands for JavaScript XML which as stated above is an extenstion of React. React allows us to create a two environments of a UI the virtual, which is nothing more than programming concept that we can make changes to the virtual and the virtual syncs with the physical DOM to update the UI.  

//2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn is like NPM and both are package managers that allow us to share and work on code. Before working on code you run Yarn install and it downloads needed dendencies and core files needed to run and work the code.  

Researched answer:NPM was the first major JavaScript package manager and was built shortly after Node.js was introduced. This allowed programmers to share more code than ever before. At first there was an attempt to scale the npm client but broke down in the continuous integration enviroments. Due to the failed scaling of npm Yarn was introduced around the failings of npm and it replaced the existing workflow of the existing package managers. 

//3. What is an anonymous function in JavaScript?

Your answer:An anoymous function is a function that has not been named. A anonymous function can be used as an argument to other functions. this is an example of an anonymous function.  
(function  () {
     //
})

Researched answer: A anonymous function is a function is a special type of function that does not have to use any name. A defined anonymous function uses the () to enable to to be used without syntax errors. The anonymous function can not be accessed after it is used and can only be used by a variable that is stored in that function. The anonymous function can have many arguments as you want but it will always be executed as a single expression. 

//4. What is the difference between state values and props in React? 

Your answer: This one is because they go together they are not really different. The state is a updatable structure that contains data about the component and can change over time and the props are read-only components. 

Researched answer:Props stores the value of attributes of a tag and work like HTML attributes and allows the passing of data from one component to another. Passing state as a prop fom a parent to a child component is the a major core concept of React, it allows you to write code that is easie to maintain. Props are immutable so we can not modify them inside a component. The state must be kept as simple as possible as it repersents the comnpnents local infomation or state. 

//5. What is the DOM? 

Your answer: The DOM is what we see when using the internet or browsing through instagram. When the webpage loads it creates a dom which means Document object model. When working in react we use the vitual dom to make updates that sync with the physical dom. 

Researched answer: The DOM is the World Wide Web Consotium standard that defines a standard for accessing documents. The DOM is a tree of objects that make up a website. There are 3 parts of a DOM, the core DOM, the XML Dom, and the HTML Dom, together these make up a website. The DOM is nothing more than a programming interface for HTML and defines the HTML as objects. It is the standard for making changes, getting, adding or deleting HTML elements of a webpage. 

6. STRETCH: Which is the difference between a div and a span?

Your answer: The div and span serve different functions and both of them are HTML elements that group together to make up a webpage. Div and Span are both generic HTML elements that group together parts of a website. 
<div>
    <div class> </div>
        <h1> Man I hope this is right</h1>
        <p> I made this to explain <span id="special-text"> i hope this is understood </span>and I get a good grade</p>
    <div id> </div>
</div>

Researched answer:The div is used for block level styleing and span is used for inline organization and styling. Divs often group together headers, images, videos and makes it easier to identify sections of a web page. Div is the styling portion of inline content. Span does not start a new block as Div does. 

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Instead of function and logic the idea is a programming model that orrganizes software design around data or objects. The structure of object-oriented programming is classes, objects, methods and attributes. There are 4 principles around object-oriented programming and they are encapsulation, abstraction, inheritance and polymorphism. 

2. Ruby:Ruby is a high level programming language that supports muliple programming paradigms. The idea around Ruby is programming productivity and simplicity and in Ruby everything is an object including primitive data types. It has been around since the mid-90s and was developed by Yukihiro Matsumoto also known as "Matz" It is typed out dynamically and uses garbage collection and supports, procediral, object-oriented and functional programming. 

3. Implicit return: Implicit returns are a large debate inside the programming community due to the idea that it is more stylistic than programming. Implicit returns are solely used for shortening code within a function body and because they are optional it is explicit returns. 

4. Ruby blocks: A ruby block is an anonymous function that can be passed into methods. These anonumous function blocks are enclosed in a do-end statement or curly braces. The interesting part is what happens a method is called without passing a block, then we have an error saing (yield) or no block given. 

5. Ruby hashes: A ruby hash is a data-sructure to store key value pairs. Unlike arrays there is no index positions and because there is no index positions we must use hashes to access the hash values with keys. to show an empty hash would make use of 1. {}  and that is a empty hash. A hash with value pairs would be 1. { a: 1, b: 2, c: 3 } where the letter is the key and the number is the corrisponding value for the key. 
