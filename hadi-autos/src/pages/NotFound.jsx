import { Link } from 'react-router-dom'
import { Home, AlertCircle } from 'lucide-react'
import Button from '@components/ui/Button'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-gray-100 p-4">
      <div className="text-center max-w-lg">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600 mb-6">
          <AlertCircle className="w-10 h-10" />
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/" className="flex items-center justify-center">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>

        <div className="mt-12">
          <p className="text-sm text-gray-500">
            Need help?{' '}
            <a href="mailto:support@hadismotors.com" className="text-primary-600 hover:text-primary-500">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound