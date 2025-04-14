import { ErrorBoundary, FallbackState } from '@ErrorHandler'
import LandingPage from '@Pages'

function App() {
  return (
    <ErrorBoundary fallback={<FallbackState />}>
      <LandingPage />
    </ErrorBoundary>
  )
}

export default App
