#  UI Automation with Playwright

This project contains automated UI tests using [Playwright](https://playwright.dev) for [the-internet.herokuapp.com](https://the-internet.herokuapp.com).

---

##  Getting Started

```bash
#Install dependencies**
npm install

#Install Playwright browsers
npx playwright install

#Run all tests
npm test

#Run a specific test file
npx playwright test tests/upload.spec.js
```

## Automation-tasks-UI-Playwright/
├── page-objects/        # Page Object classes for each page
├── test-data/           # Test files and test data (e.g. login data, supported file names)
├── tests/               # Test spec files
├── playwright.config.ts # Playwright test configuration
└── README.md            # You're reading it!


## 📋 Covered Test Suites
- Buttons
- Checkboxes
- Dropdown
- Input
- Login
- Upload
- Download

## 🛠 Technologies Used
- Playwright
- JavaScript (ESModules)
- Node.js

## 👤 Author
- Tetiana Vykhrystiuk  
[GitHub Profile](https://github.com/TVykhrystiuk)

---

⚠️ Note: The /download page might be temporarily unavailable.
