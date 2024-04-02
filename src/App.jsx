import './App.css'
import ErrorBoundary from './components/ErrorBoundary';
import MyComponent from './components/MyComponent';
import MyComponent2 from './components/MyComponent2';


function App() {

  return (
    <>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <MyComponent2 />
      </ErrorBoundary>
    </>
  )
}

export default App
