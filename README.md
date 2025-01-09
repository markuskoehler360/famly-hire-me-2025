# My Solution

## Getting Started
1. Clone the repository
2. Create .env by copying .env.example
3. Add VITE_ACCESS_TOKEN to .env
4. Run ```npm install```
5. run ```npm run dev```

## My Considerations
- @coreui/react was used to keep styling to a minimum
- https://quicktype.io/typescript was used to quickly generate interfaces for external backend data
- React-Query was used due to its simplicity
  - Works out-of-the-box, with zero-config
  - Takes care of error handling, caching, syncing with backend with minimal effort
  - Can later be customized, as the application grows
- React-Query was also used to invalidate cache entries (e.g., after check-ins or checkouts) to ensure the UI stays in sync with the backend
- ChildItem was kept as a single component, but would probably split up as soon it becomes bigger
- Debounce hook has been added to improve performance and omit redundant triggers on each scroll event
- Outdated pickup times have been removed from dropdown menu to reduce invalid selections
- In case an outdated pickup time is sent to the server, the error is (for now) handled via an alert()

## Next Steps
- Improve the design by adding responsive styling and better visual hierarchy for the dropdowns, buttons, etc.
- Add unit and integration tests for core components like ChildItem and hooks
- Use modal to handle error in a more user-friendly way
- Add localization/translations
- Add 'change pickup time' feature
- Add input field for notes ('Today Karla is being picked up by her grandmother.')
- Background job to clear all checkins over night
_______________________________________________________________
