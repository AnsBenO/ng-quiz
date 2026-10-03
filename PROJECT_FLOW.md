# Project Flow

```mermaid
flowchart TD
    User[User] -->|"Import quiz file"| Import["Read quiz data"]
    Import --> Validate{"Quiz structure valid?"}
    Validate -->|No| ImportError["Show import errors"]
    ImportError -->|"Correct file and retry"| Import
    Validate -->|Yes| Library["Available quizzes"]

    Library -->|"Choose quiz and preferences"| Start["Create quiz attempt"]
    Start --> Attempt["Working quiz copy with answers and progress"]
    Attempt -->|"Answer, check, and navigate"| Attempt
    Attempt -->|"Finish quiz"| Score["Compare answers with correct answers"]
    Score --> Results["Show score and question summary"]
    Results -->|"Review answers"| Review["Show selected, correct, and missed options"]
    Review --> Results
    Results -->|"Retake"| Start
```

## Service Logic and Communication

Screens call the services; arrows between services show actual calls or data passed.

```mermaid
flowchart LR
    subgraph ImportFlow[Import logic]
        Import["Quiz import"] -->|"parse JSON"| Parser["QuizParserService<br/>Parse raw or wrapped quiz JSON<br/>Add defaults for true/false options"]
        Parser -->|"validate quiz data"| Validator["QuizValidatorService<br/>Check required fields, IDs, options,<br/>correct answers, and question types"]
        Validator -->|"validation errors"| Parser
        Parser -->|"quiz or parse errors"| Import
        Import -->|"add valid quiz"| QuizStore["QuizService<br/>Keep quizzes in memory<br/>Replace matching IDs"]
    end

    subgraph AttemptFlow[Attempt logic]
        List["Quiz list"] -->|"read quizzes"| QuizStore
        List -->|"start quiz with settings"| SessionService["QuizSessionService<br/>Clone quiz and optionally shuffle<br/>Track answers, checks, and question index<br/>Manage selection, navigation, and submission"]
        Player["Quiz player"] -->|"select, check, navigate, submit"| SessionService
        SessionService -->|"current question, answers, progress"| Player
        Player -->|"status(question, selected answers)"| Scoring["QuizScoringService<br/>Determine question and option states<br/>Summarize correct, incorrect, unanswered,<br/>and percentage score"]
        Results["Results"] -->|"read attempt"| SessionService
        Results -->|"summarize(attempt)"| Scoring
        Review["Answer review"] -->|"read quiz and answers"| SessionService
        Review -->|"status and optionState(question, answers)"| Scoring
        SessionService -->|"attempt data"| Results
        SessionService -->|"quiz and answers"| Review
        Results -->|"retake current quiz"| SessionService
    end
```

## State and Data

- Imported quizzes are kept in memory and are not persisted.
- Each attempt uses a working copy, so shuffling questions or answers does not alter the imported quiz.
- An attempt tracks preferences, selected answers, checked questions, and current progress.
- The score and question summary are calculated from the submitted answers.
