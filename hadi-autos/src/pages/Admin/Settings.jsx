import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Save, Globe, Lock, Bell, Palette } from 'lucide-react'

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: "Hadi's Motors",
    siteUrl: 'https://hadismotors.com',
    emailNotifications: true,
    darkMode: false,
    language: 'en'
  })

  const handleSave = () => {
    console.log('Saving settings:', settings)
    alert('Settings saved successfully!')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/admin" className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center px-4 py-2 bg-[#3b2a1f] text-white rounded-lg hover:bg-[#5c483a]"
        >
          <Save className="w-5 h-5 mr-2" />
          Save Settings
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6 space-y-8">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-[#3b2a1f]" /> General Settings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site URL</label>
              <input
                type="url"
                value={settings.siteUrl}
                onChange={(e) => setSettings({...settings, siteUrl: e.target.value})}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Bell className="w-5 h-5 mr-2 text-[#3b2a1f]" /> Notifications
          </h2>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
                className="w-4 h-4 text-[#3b2a1f] border-gray-300 rounded focus:ring-[#3b2a1f]"
              />
              <span className="ml-2 text-sm text-gray-700">Receive email notifications for new inquiries</span>
            </label>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Palette className="w-5 h-5 mr-2 text-[#3b2a1f]" /> Preferences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <select
                value={settings.language}
                onChange={(e) => setSettings({...settings, language: e.target.value})}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#3b2a1f]"
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings