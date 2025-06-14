# Q&A File Format Guide

This document describes the required format for English question and answer files in this repository.

---

## Question File (`tr/questions/section-YY/question-XX.md`)

- **Section, Category, and Question Title**:  
  ```
  ## 📘 Section: <Section Name>  
  ### 🔹 Category: <Category Name>  
  #### ❓ Question XX: <Short Title>
  ```
- **Task Description**:  
  - Briefly describe what the user should do.
  - Use a bulleted list for step-by-step requirements.
  - Optionally, add a **Task** line for clarity.
- **Example**:  
  ```markdown
  ## 📘 Section: Getting Started  
  ### 🔹 Category: main Function and Printing  
  #### ❓ Question 1: Outputting to the terminal with a basic Rust program

  Write a Rust program that does the following:

  - Create a `main` function that prints `Hello, Rust!` to the terminal.

  🔧 **Task:** Use the `println!` macro to build a basic Rust application that outputs text to the console.
  ```

## Answer File (`tr/answers/section-YY/answer-XX.md`)

- **Section, Category, and Answer Title**:  
  ```
  ## 📘 Section: <Section Name>  
  ### 🔹 Category: <Category Name>  
  #### ✅ Answer XX: <Short Title>
  ```
- **Explanation**:  
  - Briefly explain the solution, including any relevant Rust concepts.
- **Code Block**:  
  - Use triple `%` for Rust code blocks:
    ```
    ```rust
    // Rust code here
    fn main() {
        println!("Hello, Rust!");
    }
    ```
    ```
- **Example**:  
  ```markdown
  ## 📘 Section: Getting Started  
  ### 🔹 Category: main Function and Printing  
  #### ✅ Answer 1: Outputting to the terminal with a basic Rust program

  This is one of the simplest working programs in Rust. The `main` function is the entry point, and the `println!` macro prints text to the terminal.

  ```rust
  fn main() {
      println!("Hello, Rust!");
  }
  ```
  ```

---

## General Notes

- Use Markdown headings and formatting as shown.
- Always include section, category, and question/answer number and title.
- Keep explanations concise and relevant.
- For both languages, keep the structure and style consistent across all files.
