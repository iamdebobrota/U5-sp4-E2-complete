## Important

- This code needs to be pushed in `masai-course` repository.

## Task

1. Complete the Pagination component.
   - Props:
     - `total` decides how many pages will be there. eg: `<Pagination total={10}>`
     - `selected` decides which page is currently selected.
     - `onPageChange` is a call back when user changes page number
   - [Design Inspiration from ANT Design](https://ant.design/components/pagination/).
   - Features
     - Go Next, disabled on last page.
     - Go Previous, disabled on first page.
     - Selected page must be highlighted with a blue border.
     - `Pagination` component will need one more `PageCell` component which represents one single box
2. Write Test for Following Components:
   - [Button](./src/components/Button/Button.tsx)
   - [Avatar](./src/components/Avatar/Avatar.tsx)
   - [Pagination](./src/components/Pagination/Pagination.tsx)

Note: Testings should demonstrate various funtionalty that component has as mentioned in App.jsx file.

### Hints:

1. You need to add `data-testid`, wherever required.
2. Test case like `should exists in dom` or cases that checks only existance of elements have no weightage at all, and are completely discarded
3. Test cases are checked based on coverage so make sure you write enough test cases for each and every component.
