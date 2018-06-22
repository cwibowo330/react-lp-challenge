This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `project structure`

```my-app
  src
    ├── App.js (Header.js and Dashboard.js)
        ├── components
        |     Header.js (Main top nav: logo/phone)
        |     ├── Dashboard (Main App wrapper: NavList.js and Panels.)
        |     |       ├── Based on 'selected' List item:
        |     |           appData[selected] is passed to Panels as props
        |     ├── Panels (Default Panel, Generic Panel, Doctor Panel)
        ├── assets
            ├── imgs (includes svg imgs that are referenced in appData.js)
            ├── appData.js (includes all appData that is consumed in Dashboard)
            ├── chatData.js (chatData to mock chat conversations)
```