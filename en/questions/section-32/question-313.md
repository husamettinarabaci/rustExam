## 📘 Section: Traits and Trait Bounds  
### 🔹 Category: Using Multiple Trait Bounds with `+` Syntax  
#### ❓ Question 313: Using multiple trait bounds with `+` syntax

Do the following:

- Define two traits: `Speak` and `Run`, each with a method (`speak`, `run`).
- Write a generic function that accepts any type implementing both `Speak` and `Run` traits.
- The function should call both `speak` and `run` methods on its parameter.
- Create a struct named `Dog` and implement both traits for it.
- Pass a `Dog` instance to the generic function and print both `Woof woof!` and `Running!`.

🔧 **Task:** Write a generic function with multiple trait bounds and use it with a struct that implements both traits.
