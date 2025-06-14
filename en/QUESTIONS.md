# Rust Exam: Questions List

Below is the complete list of 250 questions, grouped by section. Each section contains 10 questions, and numbering is continuous from 1 to 250 for global clarity and consistency.

---

## 1. Getting Started
1. Outputting to the terminal with a basic Rust program
2. Adding a comment in Rust
3. Difference between `let` and `const` in Rust
4. Using variable shadowing in Rust
5. Converting number types using `as`
6. Creating a simple Rust project with Cargo
7. Printing multiple lines to the terminal
8. Using escape characters in strings
9. Writing a multiline comment
10. Compiling and running a Rust program from the terminal

## 2. Variables, Constants, and Types
11. Defining a tuple and accessing its elements
12. Assigning values via tuple destructuring
13. Defining an array and accessing its elements
14. Printing array elements with a `for` loop
15. Declaring mutable and immutable variables
16. Defining and using constants
17. Type inference in variable declarations
18. Changing variable types with shadowing
19. Creating and using character types
20. Using basic numeric types (i32, u32, f64, etc.)

## 3. Control Flow
21. Using `if`, `else if`, and `else`
22. Using `if` as a value-returning expression
23. Producing output based on a number using `match`
24. Creating a counter loop with `loop` and `break`
25. Conditional counting using `while`
26. Iterating over a range using `for` and `range`
27. Breaking a `for` loop on a specific value
28. Skipping a loop iteration with `continue`
29. Using `match` with multiple patterns
30. Using `if let` for pattern matching

## 4. I/O Basics
31. Reading a line from terminal input
32. Parsing user input to a number
33. Handling input errors gracefully
34. Trimming whitespace from input
35. Reading a single character from input
36. Reading until EOF
37. Reading input with a prompt
38. Reading and parsing a float
39. Reading input into a vector
40. Reading input from a file

## 5. Functions I
41. Declaring a simple function
42. Function with parameters and return value
43. Calling a function from `main`
44. Function returning nothing (`()`)
45. Function with multiple parameters
46. Function with an explicit return statement
47. Function that calls another function
48. Function with default arguments (simulate)
49. Function that returns a tuple
50. Function that takes a tuple as argument

## 6. Functions II
51. Function scope and variable lifetime
52. Nested function calls
53. Introduction to closures
54. Function that returns another function
55. Function with closure as parameter
56. Function with generic parameter
57. Function with trait bound parameter
58. Function with recursion
59. Function with early return
60. Function with side effects

## 7. Ownership and Borrowing I
61. Demonstrating ownership transfer
62. Move semantics with variables
63. Ownership with function parameters
64. Returning ownership from a function
65. Copy types vs. move types
66. Borrowing with references
67. Mutable references and borrowing rules
68. Multiple immutable references
69. Reference scope and lifetimes
70. Dangling references and prevention

## 8. Lifetimes I
71. Basic lifetime annotation in function signature
72. Lifetime with multiple references
73. Lifetime elision rules
74. Structs with lifetime parameters
75. Lifetime errors and fixes
76. Lifetime in function return values
77. Lifetime in method receivers
78. Lifetime in closures
79. Lifetime in generic structs
80. Lifetime in trait objects

## 9. Structs I
81. Defining a struct and creating an instance
82. Accessing struct fields
83. Struct with multiple field types
84. Struct update syntax
85. Tuple structs and unit-like structs
86. Debug printing a struct
87. Structs with references
88. Structs with lifetimes
89. Structs with methods
90. Structs with associated functions

## 10. Structs II
91. Implementing methods with `impl`
92. Associated functions (constructors)
93. Method taking `&self` and `&mut self`
94. Method returning a value
95. Method chaining
96. Method returning self
97. Method with default implementation
98. Method with trait bounds
99. Method with lifetimes
100. Method with static variables

## 11. Enums I
101. Defining a basic enum
102. Enum with data attached to variants
103. Pattern matching on enums
104. Using `match` with enums and printing
105. Enum methods with `impl`
106. Option enum usage
107. Enum with tuple variants
108. Enum with struct variants
109. Enum with default value
110. Enum with associated functions

## 12. Enums II
111. Pattern guards in match arms
112. Matching multiple patterns
113. Nested enums and matches
114. Using `if let` with enums
115. Matching on Option
116. Matching on Result
117. Matching on nested enums
118. Matching with while let
119. Matching with ref and mut
120. Matching with wildcard

## 13. Modules I
121. Declaring a module in the same file
122. Using `mod` and `use` for organization
123. Splitting code into multiple files
124. Accessing items from another module
125. Module visibility basics
126. Module imports
127. Module re-exports
128. Module documentation
129. Module tests
130. Module constants

## 14. Modules II
131. Using `pub` for public items
132. Privacy rules in modules
133. Paths and the `super` keyword
134. Re-exporting with `pub use`
135. Nested modules and visibility
136. Using `pub(crate)` and `pub(super)`
137. Importing with `as`
138. Importing multiple items
139. Importing glob (`*`)
140. Importing macros

## 15. Crates and External Packages
141. Creating a new crate with Cargo
142. Adding dependencies in `Cargo.toml`
143. Using an external crate in code
144. Versioning and updating dependencies
145. Using `use crate::` for imports
146. Publishing a crate
147. Versioning in Cargo.toml
148. Using features in Cargo.toml
149. Using dev-dependencies
150. Using build scripts

## 16. Collections: Vectors
151. Creating and initializing a vector
152. Adding and removing elements from a vector
153. Accessing vector elements safely
154. Iterating over a vector
155. Modifying elements in a vector
156. Slicing a vector
157. Sorting a vector
158. Removing elements from a vector
159. Inserting elements into a vector
160. Vector of structs

## 17. Collections: Strings
161. Creating a `String` and `&str`
162. String concatenation and formatting
163. Iterating over string characters
164. String slicing and indexing
165. Ownership and borrowing with strings
166. String length and capacity
167. String parsing
168. String to number conversion
169. String from number conversion
170. String formatting

## 18. Collections: HashMap
171. Creating a `HashMap` and inserting values
172. Accessing and updating values in a `HashMap`
173. Iterating over key-value pairs
174. Checking for keys and removing entries
175. Using non-string keys in a `HashMap`
176. HashMap with custom types
177. HashMap and ownership
178. HashMap and references
179. HashMap and lifetimes
180. HashMap and Option/Result

## 19. Option and Result Types
181. Using `Option` for nullable values
182. Unwrapping and matching on `Option`
183. Using `Result` for error handling
184. Propagating errors with `?`
185. Handling multiple error types
186. Chaining `Option` and `Result` methods
187. Using `unwrap_or` and `unwrap_or_else`
188. Using `map` and `and_then` on Option
189. Using `map_err` on Result
190. Option and Result in functions

## 20. Error Handling
191. Using `expect` and `unwrap` safely
192. Creating custom error types
193. Returning `Result` from functions
194. Using `Box<dyn Error>` for dynamic errors
195. Propagating errors
196. Handling errors in main
197. Error handling in libraries
198. Error handling with match
199. Error handling with if let
200. Error handling with unwrap_or

## 21. Traits I
201. Declaring a trait and implementing it
202. Default methods in traits
203. Using trait objects
204. Calling trait methods
205. Implementing traits for external types
206. Trait bounds in function signatures
207. Multiple trait bounds
208. Using `where` clauses
209. Blanket implementations
210. Traits with associated types

## 22. Generics I
211. Generic functions
212. Generic structs
213. Using generics with enums
214. Generic methods in `impl`
215. Type inference with generics
216. Generic trait implementations
217. Generic type parameters
218. Generic lifetime parameters
219. Generic associated types
220. Generic constraints

## 23. Generics II
221. Multiple generic parameters
222. Generic trait bounds
223. Generic where clauses
224. Generic functions with lifetimes
225. Generic structs with lifetimes
226. Generic enums with lifetimes
227. Generic methods with lifetimes
228. Generic trait objects
229. Generic type aliases
230. Generic const parameters

## 24. Closures and Iterator Basics
231. Defining and calling a closure
232. Passing closures to functions
233. Using `iter`, `map`, and `filter`
234. Consuming iterators with `collect`
235. Chaining iterator methods
236. Using `fold` and `reduce`
237. Using `find` and `position`
238. Using `enumerate` and `zip`
239. Using `any` and `all`
240. Using `peekable` and `cycle`

## 25. Closures and Ownership
241. Closure capture by reference
242. Closure capture by value (`move`)
243. Mutating captured variables in closures
244. Returning closures from functions
245. Lifetime of closures and variables
246. Closures as struct fields
247. Closures and trait bounds
248. Closures and async functions
249. Closures and error handling
250. Closures and recursion

---

All content is in English for global accessibility. Each section contains 10 questions, for a total of 250, numbered consecutively.


