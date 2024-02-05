import './App.css';
import Todo from './components/Todo.tsx';
import store from './store/index.ts';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <Todo></Todo>
    </Provider>
  );
}

export default App;
