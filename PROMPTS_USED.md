# AI Assistance & Prompts Used

This document outlines how AI tools were used **as a supporting resource** during the development of this project.  
All architectural decisions, schema design, and final implementations were reviewed, adapted, and written by me.

AI assistance was primarily used for:
- Clarifying best practices
- Validating design decisions
- Improving code readability and documentation
- Spot-checking edge cases and potential improvements

---

## 1. Architecture & Design Clarification

**Purpose:**  
To validate my approach for modeling users and expenses and ensuring data consistency.

**Example Prompt:**
> "What are common best practices for ensuring referential integrity between related collections in MongoDB using Mongoose?"

**How it was used:**  
The response helped confirm that using a Mongoose pre-save hook for validating `userId` existence was an appropriate approach. The final implementation and logic were written and customized by me.

---

## 2. Aggregation & Analytics Logic

**Purpose:**  
To double-check MongoDB aggregation patterns for calculating monthly summaries.

**Example Prompt:**
> "How can I calculate monthly totals using MongoDB aggregation pipelines?"

**How it was used:**  
Used to validate aggregation stages (`$match`, `$group`). The pipeline was adapted to match the project’s schema, date handling, and business rules.

---

## 3. Validation Strategy

**Purpose:**  
To compare validation options and structure Joi schemas cleanly.

**Example Prompt:**
> "How should Joi validation be structured in an Express + TypeScript project?"

**How it was used:**  
Helped organize Joi schemas and middleware placement. Validation rules and error handling were implemented and customized manually.

---

## 4. Error Handling & Code Quality

**Purpose:**  
To improve consistency in error responses and project structure.

**Example Prompt:**
> "What is a clean way to implement centralized error handling in Express applications?"

**How it was used:**  
Used as a reference for structuring a global error handler and custom error classes. Final implementation was adjusted to fit the project’s needs.

---

## 5. Documentation & Readability

**Purpose:**  
To improve README clarity and ensure professional documentation.

**Example Prompt:**
> "How can I structure a backend README for a take-home assignment?"

**How it was used:**  
Used to refine wording and structure. All content reflects the actual implementation and design decisions made during development.

---

## Summary

AI was used as a **supporting tool**, similar to documentation or community references, to:
- Validate approaches
- Improve clarity
- Catch potential issues early

All core logic, feature implementation, and project decisions were made and executed by me.
