import { ConfigProvider, theme } from 'antd'
import TranscribeForm from './components/TranscribeForm/TranscribeForm'
import valubellIcon from './assets/valubell-icon.jpeg'
import './App.css'

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#F96B2F',
          borderRadius: 4,
          colorBgContainer: '#1E1E1E',
        },
      }}
    >
      <div className="app-container">
        <header className="app-header">
          <img src={valubellIcon} className="app-logo" alt="Valuebell Logo" />
          <h1 className="app-title">Valuebell Mapper</h1>
        </header>
        <main className="app-main">
          <TranscribeForm />
        </main>
      </div>
    </ConfigProvider>
  )
}

export default App