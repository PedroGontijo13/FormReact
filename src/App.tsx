import './App.css'
import Form from './components/Form'
import ContentArea from './components/ContentArea'

interface personType {
    name: String;
    password: String;
}

function onFormSubmit(name: string, password: string) {
  console.log(name, password)
}

function App() {
  return (
    <div>
      <ContentArea />
      <Form onSubmitForm={onFormSubmit} />
    </div>
  ) 
}

export default App
